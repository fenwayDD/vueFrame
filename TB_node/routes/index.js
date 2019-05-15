const express = require('express');
const router = express.Router();
const userModel = require('../model/userModel');


/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

router.post('/register', function(req, res, next) {
	userModel.find({username: req.body.username}, function (err, data) {
		if (err) {
			return console.log(err);
		} else {
			if (data.length > 0) {
				res.json({
					message: '用户名已存在',
					return_code: 1
				})
			} else {
				let newUser = new userModel({
					username: req.body.username,
					password: req.body.password
				});

				newUser.save(function (err, data) {
					if (err) {
						return console.log(err)
					} else {
						res.json({
							message: '新增成功',
							return_code: 0
						})
					}
				})
			}
		}
	});
});

router.post('/login', function (req, res, next) {
	userModel.find({username: req.body.username}, function (err, data) {
		if (err) {
			return console.log(err);
		} else {
			if (data.length > 0) {
				if (data[0].password == req.body.password) {
					res.json({
						message: '登录成功',
						return_code: 0
					})
				} else {
					res.json({
						message: '账号密码错误',
						return_code: 1
					})
				}
			} else {
				res.json({
					message: '该账户不存在',
					return_code: 1
				})
			}
		}
	})
});

module.exports = router;