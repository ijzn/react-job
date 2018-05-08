import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from './Auth.redux';
@connect(
  state => state.auth,
  {login}
)
export default class Auth extends Component {
  render() {
    return (
      <div>
        {this.props.isAuth?<Redirect to='/deshbord' />:null}
        您未登录，请先登录
        <button onClick={this.props.login}>LOGIN</button>
      </div>
    )
  }
}
