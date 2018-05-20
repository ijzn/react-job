const express = require('express')
const mongoose = require('mongoose')
// 链接mongo 并且使用 imooc-react-jobs 这个集合
const DB_URL = 'mongodb://localhost:27017/imooc-react-jobs'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
	console.log('mongo connect success')
})
// 类似于mysql的表 mongo里有文档、字段的概念，
const User = mongoose.model('user', new mongoose.Schema({
	user:{type:String,require:true},
	age:{type:Number,require:true}
}))
// 新增数据
// User.create({
// 	user:'小明',
// 	age:28
// },function(err, doc){
// 	if (!err) {
// 		console.log(doc)
// 	}else{
// 		console.log(err)
// 	}
// })
// 新建app
/* User.remove({age:12},function(err,doc){
	console.log(doc)
}) */
// User.update({'user':'老王'},{'$set':{age:21}},function(err,doc){
// 	console.log(doc)
// })
const app = express()
app.get('/',function(req,res){
	res.send('<h1>Hello world</h1>')
})
app.get('/data',function(req,res){
  User.findOne({user:'小明'},function (err,doc) { 
    res.json(doc)
   })
})
/* app.get('/data',function(req,res){
	User.findOne({user:'xiaoming'},function(err,doc){
		res.json(doc)
	})
}) */
// app.get('/delete',function(){

// })
app.listen(9093,function(){
	console.log('Node app start at port 9093')
})