import React, { Component } from 'react'
import Logo from '@/component/logo/logo';
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
export default class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: '',
      pwd: ''
    }
  }
  register() {
    console.log(this.props)
    this.props.history.push('/register')
  }
  render() {
    return (
      <div>
        <Logo></Logo>
        <WingBlank>
          <List>
            <InputItem type='money'>用户</InputItem>
            <WhiteSpace />                 
            <InputItem type='money'>密码</InputItem>
          </List>
          <WhiteSpace />
          <Button type='primary'         
          >登录</Button>
          <WhiteSpace />
          <Button type='primary' onClick={() => {this.register()}}>注册</Button>
        </WingBlank>
      </div>
    )
  }
}
