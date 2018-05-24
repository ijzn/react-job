import React, { Component } from 'react'
import Logo from '@/component/logo/logo';
import { List, InputItem, WingBlank, WhiteSpace, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { login } from '@/redux/user.redux'
import { Redirect } from 'react-router-dom';
@connect(
  state => state.user,
  {login}
)
export default class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: '',
      pwd: ''
    }
  }
  register() {
    // console.log(this.props)
    this.props.history.push('/register')
  }
  handleChange(key, val) {
    this.setState({
      [key]: val
    })
  }
  handleLogin () {
    this.props.login(this.state)
  }
  render() {
    return (
      <div>
        {this.props.redirectTo?<Redirect to={this.props.redirectTo} />:null}        
        <Logo></Logo>
        <WingBlank>
          <List>
            {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}            
            <InputItem type='money'
              onChange={v => this.handleChange('user',v)}    
            >用户</InputItem>
            <WhiteSpace />                 
            <InputItem type='money'
              onChange={v => this.handleChange('pwd',v)}            
            >密码</InputItem>
          </List>
          <WhiteSpace />
          <Button type='primary'
           onClick={() => {this.handleLogin()}}        
          >登录</Button>
          <WhiteSpace />
          <Button type='primary' onClick={() => {this.register()}}>注册</Button>
        </WingBlank>
      </div>
    )
  }
}
