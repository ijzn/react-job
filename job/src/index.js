import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'; 
import { 
  BrowserRouter,
  Route,
  // Redirect,
  // Switch
 } from 'react-router-dom'

import reducer  from './reducer'
// import config from './config'

import Login from './cintainer/login/login'
import Register from './cintainer/register/register'
import AuthRouter from '@/component/authRouter/authRouter';
const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension?window.devToolsExtension():f=>f()  
))

function boss() {
  return <h2>boss page</h2>
}

ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
          <div>
            <AuthRouter></AuthRouter>
            <Route path='/boss' component={boss}></Route>
            <Route path='/login' component={Login}></Route>
            <Route path='/register' component={Register}></Route>
          </div>
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root')
)
