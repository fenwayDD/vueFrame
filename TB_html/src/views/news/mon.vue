<style lang="less" scoped>

</style>

<template>
    <div>
        mon
    </div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {}
		},
		mounted() {
            this.ajaxTest();
		},
		methods: {
			ajaxTest () {
				this.$axios.post('reg', {}, (res) => {
					console.log(res);
                }, (err) => {
					console.log(err);
                });
            }
        },
		components: {}
	}
</script>
