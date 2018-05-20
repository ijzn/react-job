import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { 
  BrowserRouter,
  Route,
  Redirect,
  Switch
 } from 'react-router-dom';
import { Provider } from 'react-redux';
import reducer  from './reducer';
import Auth from './Auth'
import Deshbord from './Deshbord'

const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension?window.devToolsExtension():f=>f()  
))


ReactDOM.render(
  (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Auth}></Route>
          <Route path='/deshbord' component={Deshbord}></Route>
          <Redirect to='/deshbord'></Redirect>
        </Switch>    
      </BrowserRouter>
    </Provider>
  ),
  document.getElementById('root')
)
