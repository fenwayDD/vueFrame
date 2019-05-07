<style lang="less" scoped>
    .slider{
        width: 100%;
        &-item{
            width: 100%;
            &-title{
                width: 100%;
                height: 50px;
                padding: 14px 24px;
                line-height: 22px;
                cursor: pointer;
                span, i{
                    font-size: 12px;
                }
                i{
                    display: inline-block;
                    margin-top: 5px;
                }
            }
            &-subTitle{
                width: 100%;
                height: 50px;
                padding: 14px 24px 14px 43px;
                line-height: 22px;
                cursor: pointer;
                font-size: 14px;
            }
        }
        .activeSlider{
            color: #2d8cf0;
            background-color: #f0faff;
        }
    }
</style>

<template>
    <div class="slider">
        <div v-for="route in sliderMenu" class="slider-item">
            <div class="slider-item-title" @click="sliderExpend(route)">
                <Icon class="fLeft" type="md-analytics" />
                <span class="fLeft m-l-10">{{ route.meta.title }}</span>
                <Icon class="fRight" type="ios-arrow-down" />
            </div>
            <ul v-show="route.meta.parent == activeName || route.meta.expend">
                <li v-for="childRoute in route.children" :class="['slider-item-subTitle', childRoute.meta.active?'activeSlider':'']" @click="sliderChange(childRoute)">{{ childRoute.meta.title }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {
				sliderMenu: [],
				activeName: ''
            }
		},
		mounted() {
            this.sliderMenu = this.$store.state.routes;
			this.activeInit();
		},
		methods: {
			sliderChange: function(tab) {
				this.activeName = tab.parent;
				this.$router.push({
					path: tab.path
				})
            },
            sliderExpend (route) {
	            route.meta.expend = !route.meta.expend;
            },
            activeInit () {
	            let url = this.$route.path.split('/');
	            let keyword = url[url.length - 2];
	            let childKey = '/' + url[url.length - 2] + '/' + url[url.length - 1];
	            let self = this;
	            for(let i=0 ; i<this.sliderMenu.length ; i++){
	            	if(this.sliderMenu[i].path.indexOf(keyword) > -1){
			            this.sliderMenu[i].meta.expend = true;
                    }else if(keyword == 'profession' && this.sliderMenu[i].path == ''){
			            this.sliderMenu[i].meta.expend = true;
                    }else{
			            this.sliderMenu[i].meta.expend = false;
                    }
		            this.activeChildInit(this.sliderMenu[i].children);
                }
            },
            activeChildInit (routes) {
				for(let i=0 ; i<routes.length ; i++){
					if(this.$route.path == routes[i].path){
						this.$set(routes[i].meta, 'active', true);
                    }else{
						this.$set(routes[i].meta, 'active', false);
                    }
                }
            }
        },
        watch: {
			$route: {
				handler() {
                    this.activeInit();
                },
                deep: true
            }
        },
		components: {}
	}
</script>
