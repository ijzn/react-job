import React, { Component } from 'react'
import Logo from '@/component/logo/logo';
import { WingBlank, WhiteSpace, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { login } from '@/redux/user.redux'
import { Redirect } from 'react-router-dom'
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
    this.props.history.push('/register')
  }
  handleChange(e, key) {
    this.setState({
      [key]: e.target.value
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
          {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
          <div className='inputbox'>
            <input type="text"
                    className='_input'
                    onChange={(e, key) => this.handleChange(e,'user')}
                    placeholder='请输入密码'/>
          </div>
          <WhiteSpace />
          <div className='inputbox'>
            <input type="text"
                    className='_input'
                    onChange={(e,key) => this.handleChange(e,'pwd')}
                    placeholder='请输入密码'/>
          </div>
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
