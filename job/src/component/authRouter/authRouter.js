import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { loadData } from '@/redux/user.redux'
import { connect } from 'react-redux'
@withRouter
@connect(
  null,
  {loadData}
)
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
      
  }
  render() {
    return <div></div>
  }
}
