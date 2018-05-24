import React, { Component } from 'react'
import axios from 'axios';
import { withRouter } from 'react-router-dom';
@withRouter
export default class AuthRouter extends Component {
  /**
   * 获取用户信息
   * 是否登录，
   * 现在得url地址。 login是不需要跳转的
   * 用户的type 身份是boss还是牛人
   * 用户是否完善信息（选择头像 个人简介）
   */
  componentDidMount() {
      const publicList = ['/login', '/register']
      const pathname = this.props.location.pathname
        if (publicList.indexOf(pathname)>-1) {
          return null
      }
      axios.get('/user/info')
      .then(res=>{
          if (res.status === 200) {
              if (res.data.code === 0) {
                //   登录成功的

              } else {
                //   没有登录的
                this.props.history.push('/login')              
              }
          }
      })
      .catch(err => {
          console.log(err)
      })
  }
  render() {
    return <div></div>
  }
}
