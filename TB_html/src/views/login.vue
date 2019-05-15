<style lang="less" scoped>
    #main_content{
        width: 100%;
        height: 100%;
        .main_border{
            width: 100%;
            height: 100%;
            background-color: #212121;
            position: relative;
            overflow: hidden;
            .bottom_module{
                width: 100%;
                height: 15%;
                background-color: #1f4f9c;
                position: absolute;
                left: 0;
                bottom: 0;
            }
            #login, #register{
                width: 350px;
                background-color: transparent;
                position: absolute;
                top: 20%;
                left: 50%;
                transform: translate(-50%, 0);
                z-index: 4;
            }
        }
    }
</style>

<template>
    <div id="main_content">
        <div class="main_border">
            <vue-particles
                    :style="{width: '100%', position: 'absolute', top: 0, left: 0, zIndex: 2}"
                    color="#dedede"
                    :particleOpacity="0.7"
                    :particlesNumber="40"
                    shapeType="circle"
                    :particleSize="4"
                    >

            </vue-particles>
            <div v-show="isLogin" id="login">
                <div class="login-title center font20 color-white">TB 登录</div>
                <div class="m-t-40">
                    <Input v-validate="'required|alpha_num|min:6|max:10'" name="username" class="specialInput" v-model="login.username" icon="md-contact" placeholder="NAME" style="width: 100%;" />
                    <span class="color-red m-t-5">{{ errors.first('username') }}</span>
                </div>
                <div class="m-t-30">
                    <Input v-validate="'required|alpha_num|min:6|max:10'" name="password" class="specialInput" v-model="login.password" type="password" icon="md-lock" placeholder="PASSWORD" style="width: 100%;" />
                    <span class="color-red m-t-5">{{ errors.first('password') }}</span>
                </div>
                <div class="m-t-20 color-white font14">
                    <Checkbox size="small" v-model="login.remember"> 记住密码</Checkbox>
                </div>
                <div class="m-t-20">
                    <Button type="error" long style="height: 40px" @click="loginEvent">登录</Button>
                </div>
                <div class="m-t-20 textRight">
                    <a class="font14 color-blue cursorP" @click="isLogin = false" href="javascript:void(0)">没有账号, 注册！</a>
                </div>
            </div>
            <div v-show="!isLogin" id="register">
                <div class="login-title center font20 color-white">TB 注册</div>
                <div class="m-t-40">
                    <Input v-validate="'required|alpha_num|min:6|max:10'" name="username" class="specialInput" v-model="register.username" icon="md-contact" placeholder="NAME" style="width: 100%;" />
                    <span class="color-red m-t-5">{{ errors.first('username') }}</span>
                </div>
                <div class="m-t-30">
                    <Input v-validate="'required|alpha_num|min:6|max:10'" name="password" class="specialInput" v-model="register.password" type="password" icon="md-lock" placeholder="PASSWORD" style="width: 100%;" />
                    <span class="color-red m-t-5">{{ errors.first('password') }}</span>
                </div>
                <div class="m-t-35">
                    <Button type="primary" long style="height: 40px" @click="registerEvent">注册</Button>
                </div>
                <div class="m-t-20 textRight">
                    <a class="font14 color-blue cursorP" @click="isLogin = true" href="javascript:void(0)">已有账号, 登录！</a>
                </div>
            </div>
            <div class="bottom_module"></div>
        </div>
    </div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {
				login: {
					username: '',
                    password: '',
					remember: false
                },
                register: {
					username: '',
                    password: ''
                },
				isLogin: true
            }
		},
		mounted() {
            this.initLoginMsg();

		},
		methods: {
			loginEvent () {
				this.$axios.post('login', this.login, (res) => {
					if (res.return_code == 1){
						this.$Notice.error({
							title: res.message
						})
					} else if (res.return_code == 0) {
						if (this.login.remember) {
                            document.cookie = 'username=' + this.login.username;
                            document.cookie = 'password=' + this.login.password;
                            document.cookie = 'remember=' + this.login.remember;
                        } else {
							document.cookie = 'username=';
							document.cookie = 'password=';
							document.cookie = 'remember=' + this.login.remember;
                        }
						sessionStorage.setItem('login', true);
						this.$router.push('/');
					}
				}, (err) => {
					this.$Notice.error({
						title: err.message
					})
				})
            },
            registerEvent () {
                this.$axios.post('register', this.register, (res) => {
                	if (res.return_code == 1){
                		this.$Notice.error({
                            title: res.message
                        })
                    } else if (res.return_code == 0) {
                		this.$Notice.success({
			                title: res.message
                        })
                    }
                }, (err) => {
                	this.$Notice.error({
		                title: err.message
                    })
                })
            },
            initLoginMsg () {
	            let cookieMsg = document.cookie.split(';');
	            for (let i=0 ; i<cookieMsg.length ; i++){
		            if(cookieMsg[i].indexOf('remember') > -1) {
			            this.login.remember = Boolean(cookieMsg[i].split('=')[1]);
		            }
		            if(cookieMsg[i].indexOf('username') > -1) {
			            this.login.username = cookieMsg[i].split('=')[1];
		            }
		            if(cookieMsg[i].indexOf('password') > -1) {
			            this.login.password = cookieMsg[i].split('=')[1];
		            }
	            }
            }
        },
		components: {}
	}
</script>
