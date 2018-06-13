const express = require('express')
const Router = express.Router()
const utils = require('utility')
const model = require('./model')
const User = model.getModel('user')
// 查询筛选条件
const _filter ={'pwd':0,'__v':0}

Router.get('/list', function (req,res) {
  User.find({}, function (err, doc) {  
    if (!err) {
      res.json(doc)
    }
  })
})

Router.post('/resgister', function (req, res) {
  const {user, pwd, type } = req.body
  User.findOne({user},_filter,function (err, doc) {
    if (doc) {
      return res.json({code:1,msg:'用户名重复'})
    }
    const userModel = new User({user, type, pwd: utils.md5(pwd)})

    userModel.save(function (e, d) { 
      if (e) {
        return res.json({code:1, msg: '后端出错了'})
      }
      const {user, type, _id} = d
      res.cookie('userid', _id)
      return res.json({code: 0, data: {user, type, _id}})
    })
  })
 })

 Router.post('/login', function (req, res) {
  const {user, pwd } = req.body
  User.findOne({user, pwd: utils.md5(pwd)},_filter,function (err, doc) {
    if (!doc) {
      return res.json({code:1,msg:'用户名不存在或者密码错误'})
    }
    res.cookie('userid', doc._id)
    return res.json({code:0, data:doc})
  })
 })
Router.get('/info', function(req, res){
  const {userid} = req.cookies
  if (!userid) {
    // 校验用户有没有cookie
    return res.json({code:1})
  } else {
    User.findOne({_id:userid},_filter, function (err, doc) { 
      if (err) {
        res.json({code: 1,msg: err})
      }
      if (doc) {
        res.json({code: 0,data: doc})
      }
    })
  }
    
})

module.exports = Router