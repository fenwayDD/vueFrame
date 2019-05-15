<style lang="less" scoped>

</style>

<template>
    <div>
        <input type="text" v-model="username" v-validate="'required|alpha_num'" name="username">
        <span>{{ errors.first('username') }}</span>
    </div>
</template>

<script>
	export default {
		name: '',
		data() {
			return {
				username: ''
            }
		},
		mounted() {

		},
		methods: {},
		components: {}
	}
</script>
