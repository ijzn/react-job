<<<<<<< HEAD
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

const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension?window.devToolsExtension():f=>f()  
))


ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
          <div>
            <Route path='/login' component={Login}></Route>
            <Route path='/register' component={Register}></Route>
          </div>
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root')
)
=======
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
>>>>>>> parent of e587831... 设置别名，logo组件 ，新建登录页面，注册页面 (未完成)
