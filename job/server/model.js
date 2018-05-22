const mongoose = require('mongoose')
// 链接mongo 并且使用 imooc-react-jobs 这个集合
const DB_URL = 'mongodb://localhost:27017/imooc-react-jobs'
mongoose.connect(DB_URL)
mongoose.connection.on('connected',function(){
	console.log('mongo connect success')
})

const models = {
	user: {
    'user':{
      'type': String, 
      'require': true
    },
    'pwd': {
      'type': String, 
      'require': true
    },
    'type': {
      'type': String, 
      'require': true
    },
    // 头像
    'avator':{'type': String},
    // 个人简介 || 职位简介
    'desc': {'type': String},
    // 职位名
    'title': {'type': String},
    // 如果是boss  还有两字段
    'company': {'type': String},
    'money': {'type': String}
  },
  chat: {

  }
}

for (const m in models) {
  mongoose.model(m,new mongoose.Schema(models[m]))
}

module.exports = {
  getModel: function (name) {
    return mongoose.model(name)
  }
}


