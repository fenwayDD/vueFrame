<style scoped>
    .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
        height: 100%;
    }
    .ivu-layout{
        height: 100%;
    }
</style>
<template>
    <div class="layout">
        <Layout>
            <Header>
                <main-tab></main-tab>
            </Header>
            <Layout>
                <Sider hide-trigger :style="{background: '#fff'}">
                    <main-slider></main-slider>
                </Sider>
                <Layout :style="{padding: '0 24px 24px'}">
                    <Breadcrumb :style="{margin: '24px 0'}">
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Content :style="{padding: '24px', minHeight: '280px', height: 'calc(100% - 158px)', background: '#fff'}">
                        <mainContent></mainContent>
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    </div>
</template>
<script>
    import mainContent from './views/content.vue';
    import mainTab from './views/tab.vue';
    import mainSlider from './views/slider.vue';
	export default {
        data() {
            return {

            }
        },
        mounted() {
            if (!sessionStorage.getItem('login')) {
            	this.$router.push('/login');
            }
        },
        methods: {

        },
		components: {
			mainContent,
			mainTab,
			mainSlider
        }
	}
</script>