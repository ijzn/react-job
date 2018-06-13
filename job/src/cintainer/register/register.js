import React, { Component } from 'react'
import Logo from '@/component/logo/logo';
import { Radio, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
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
  handleChange(e, key) {
    this.setState({
      [key]: e.target.value
    })
  }
  handleChange1(key, val){
    this.setState({
      [key]:val
    })
  }
  handleRegister () {
    console.log(this.state)
    this.props.regisger(this.state)
  }
  render() {
    const RadioItem = Radio.RadioItem
    return (
      <div>
        {this.props.redirectTo?<Redirect to={this.props.redirectTo} />:null}
        <Logo></Logo> 
        <WingBlank>
            {this.props.msg?<p className='error-msg'>{this.props.msg}</p>:null}
            <div className='inputbox'>
              <input type="text" 
                     className='_input'
                     onChange={(e, key) => {this.handleChange(e, 'user')}}
                     placeholder='请输入用户名'/>
            </div>
            <WhiteSpace />
            <div className='inputbox'>
              <input type="text"
                     className='_input'
                     onChange={(e, key) => {this.handleChange(e, 'pwd')}}
                     placeholder='请输入密码'/>
            </div>
            <WhiteSpace />            
            <div className='inputbox'>
              <input type="text" 
                     className='_input'
                     onChange={(e, key) => {this.handleChange(e, 'repeatpwd')}}
                     placeholder='请再次输入密码'/>
            </div>
          <WhiteSpace />
          <RadioItem
           checked={this.state.type === 'boss'}
           onClick={() => this.handleChange1('type','boss')}                       
          >boss</RadioItem>
          <RadioItem
           checked={this.state.type === 'genius'}
           onClick={() => this.handleChange1('type', 'genius')}                       
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
