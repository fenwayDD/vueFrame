<style lang="less" scoped>
    .tab{
        width: 100%;
        height: 64px;
        background-color: #495060;
        padding: 0 50px;
        line-height: 64px;
    }
    .layout-logo{
        width: 100px;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        float: left;
        position: relative;
        top: 15px;
        left: 20px;
    }
    .layout-nav{
        width: 420px;
        margin: 0 auto;
        margin-right: 20px;
    }
    .layout-nav li{
        width: 90px;
        float: left;
        color: rgba(255,255,255,.7);
        text-align: center;
        cursor: pointer;
    }
</style>
<template>
    <div id="tab">
        <div class="layout-logo"></div>
        <div class="layout-nav">
            <li v-for="tab in tabMenu" :name="tab.parent" :style="{color: tab.parent==activeName?'#fff':''}" @click="tabChange(tab)">
                <Icon type="ios-navigate"></Icon>
                <span class="m-l-5">{{ tab.title }}</span>
            </li>
        </div>
    </div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {
				tabMenu: [],
				activeName: ''
			}
		},
		mounted() {
			this.tabMenu = this.$store.state.tabRoutes;
			this.tabActiveInit();
		},
		methods: {
			tabChange: function(tab) {
				this.activeName = tab.parent;
				this.$router.push({
					path: tab.path || '/profession/mitsurugi'
				})
			},
            tabActiveInit () {
	            try{
		            let url = this.$route.path.split('/');
		            let keyword = url[url.length - 2];
		            let self = this;
		            this.tabMenu.forEach(function(item, index, arr) {
			            if(item.path.indexOf(keyword) > -1){
				            self.activeName = item.parent;
				            throw new Error('end');
			            }else{
				            self.activeName = 1;
			            }
		            })
                }catch (e) {
	            	if(e.message != 'end'){
                        throw e;
                    }
                }
            }
		},
		components: {}
	}
</script>
