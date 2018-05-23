import React, { Component } from 'react'
import Logo from '@/component/logo/logo';
import { List, Radio, WhiteSpace, WingBlank, Button, InputItem } from 'antd-mobile';
import { connect } from 'react-redux';
import { regisger } from '@/redux/user.redux';
import './index.css'
@connect(
  state=>state.user,
  {regisger}
)
export default class Register extends Component {
  constructor (props) {
    super(props)
    this.state = {
      user: '',
      pwd: '',
      repeatpwd: '', 
      type: 'boss' // genius
    }
  }
  handleChange(key, val) {
    this.setState({
      [key]: val
    })
  }
  handleRegister () {
    this.props.regisger(this.state)
  }
  render() {
    const RadioItem = Radio.RadioItem
    return (
      <div>
        <Logo></Logo> 
        <WingBlank>
          <List>
            {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
            <InputItem 
              onChange={val => this.handleChange('user',val)}
            >用户名</InputItem>
            <WhiteSpace />            
            <InputItem
              type='password'
              onChange={val => this.handleChange('pwd',val)}            
            >密码</InputItem>
            <WhiteSpace />
            <InputItem
              type='password'
              onChange={val => this.handleChange('repeatpwd',val)}            
            >确认密码</InputItem>
            <WhiteSpace />
          </List>
          <WhiteSpace />
          <RadioItem
           checked={this.state.type === 'boss'}
           onClick={() => this.handleChange('type','boss')}                       
          >boss</RadioItem>
          <RadioItem
           checked={this.state.type === 'genius'}
           onClick={() => this.handleChange('type', 'genius')}                       
           >牛人</RadioItem>
          <WhiteSpace />
          <Button type='primary' onClick={() => {this.handleRegister()}}>
            注册
          </Button>
        </WingBlank>
      </div>
    )
  }
}
