<style lang="less" scoped>

</style>

<template>
    <div>
        {{this.$store.state.count}}
    </div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {}
		},
		mounted() {
           this.$store.commit('increment', {num: 10});
		},
		methods: {},
		components: {}
	}
</script>
