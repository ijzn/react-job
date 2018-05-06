import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addGun, removeGun, addGunAsync } from './index.redux';
@connect(
  // 你需要的state中的数据
  state => ({num: state}),
  // 你需要的方法
  {addGun, removeGun, addGunAsync}
)
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>现在有机枪 {this.props.num} 把</h1>
        <button onClick={this.props.addGun}>+1</button>
        <button onClick={this.props.removeGun}>-1</button>
        <button onClick={this.props.addGunAsync}>推迟2s +1</button>
      </div>
    )
  }
}
