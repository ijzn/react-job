import React, { Component } from 'react'
import { 
  Link,
  Route,
  Switch,
  Redirect
 } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from './Auth.redux';
import App from './App'

function erying() {
  return <h1>2</h1>
}
function san() {
  return <h1>3</h1>
}
@connect(
  state=>state.auth,
  {logout}
)
export default class Deshbord extends Component {
  render() {
    const match = this.props.match
    const redirectToLogin = <Redirect to='/login'></Redirect>
    const app = (
      <div>
        <div>用户：{this.props.user}</div>
        {this.props.isAuth?<button onClick={this.props.logout}>loginout</button>:null}
        <ul>
          <li>
            <Link to={`${match.url}`}>一</Link>
          </li>
          <li>
            <Link to={`${match.url}/two`}>二</Link>              
          </li>
          <li>
            <Link to={`${match.url}/th`}>三</Link>              
          </li>
        </ul>
        <Switch>
          <Route path={`${match.url}`} exact component={App}></Route>
          <Route path={`${match.url}/two`} exact component={erying}></Route>
          <Route path={`${match.url}/th`} exact component={san}></Route>
        </Switch>
      </div>
    )
    return this.props.isAuth? app : redirectToLogin
  }
}
