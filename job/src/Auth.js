import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login,getUserData } from './Auth.redux';
@connect(
  state => state.auth,
  {login, getUserData}
)

export default class Auth extends Component {
  componentDidMount() {
    console.log('11')
    this.props.getUserData()
  }
  
  render() {
    return (
      <div>
        <div>我的名字是{this.props.user},年龄：{this.props.age}</div>
        {this.props.isAuth?<Redirect to='/deshbord' />:null}
        您未登录，请先登录
        <button onClick={this.props.login}>LOGIN</button>
      </div>
    )
  }
}
