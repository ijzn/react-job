const express = require('express')
const Router = express.Router()
const utils = require('utility')
const model = require('./model')
const User = model.getModel('user')

Router.get('/list', function (req,res) {
  User.find({}, function (err, doc) {  
    if (!err) {
      res.json(doc)
    }
  })
})

Router.post('/resgister', function (req, res) {
  const {user, pwd, type } = req.body
  User.findOne({user},function (err, doc) {
    if (doc) {
      return res.json({code:1,msg:'用户名重复'})
    }
    User.create({user, type, pwd: utils.md5(pwd)}, function (e, d) { 
      if (e) {
        return res.json({code:1, msg: '后端出错了'})
      }
      return res.json({code: 0})
    })
  })
 })

 Router.post('/login', function (req, res) {
  const {user, pwd } = req.body
  User.findOne({user, pwd: utils.md5(pwd)},{'pwd': 0},function (err, doc) {
    if (!doc) {
      return res.json({code:1,msg:'用户名不存在或者密码错误'})
    }
    return res.json({code:0, data:doc})
  })
 })
Router.get('/info', function(req, res){
    // 校验用户有没有cookie
    return res.json({code:1})
})

module.exports = Router