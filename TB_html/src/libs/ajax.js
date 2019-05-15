const axios = require('axios');
const conf = require('../../.conf');

let ajax = {}, baseUrl = conf.httpUrl + '/api/';
ajax.install = ((Vue, options) => {
	function detailError(error, err) {
		if (typeof error === 'function') {
			error(err);
		} else {
			console.log(err);
		}
	}

	Vue.prototype.$axios = {
		get: (url, success, error) => {
			return axios.get(baseUrl + url)
				.then((res) => {
					success(res.data);
				})
				.catch((err) => {
					detailError(error, err);
				})
		},
		post: (url, data, success, error) => {
			return axios.post(baseUrl + url, data)
				.then((res) => {
					success(res.data);
				})
				.catch((err) => {
					detailError(error, err);
				})
		}
	}
});

module.exports = ajax;