'use strict';

var axios = require('axios');
var conf = require('../../.conf');

var ajax = {},
    baseUrl = conf.httpUrl + '/api/';
ajax.install = function (Vue, options) {
	function detailError(error, err) {
		if (typeof error === 'function') {
			error(err);
		} else {
			console.log(err);
		}
	}

	Vue.prototype.$axios = {
		get: function get(url, success, error) {
			return axios.get(baseUrl + url).then(function (res) {
				success(res.data);
			}).catch(function (err) {
				detailError(error, err);
			});
		},
		post: function post(url, data, success, error) {
			return axios.post(baseUrl + url, data).then(function (res) {
				success(res.data);
			}).catch(function (err) {
				detailError(error, err);
			});
		}
	};
};

module.exports = ajax;
//# sourceMappingURL=ajax.js.map