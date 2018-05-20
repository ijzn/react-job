import React, { Component } from 'react'
import logoImg from './job.png'
import './logo.css';
export default class Logo extends Component {
  render() {
    return (
      <div>
        <div className="logo-container">
            <img src={logoImg} alt="" /> 
        </div>
      </div>
    )
  }
}
