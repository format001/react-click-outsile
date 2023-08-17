
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import ClickOutside from './clickOutside.jsx'
import './style.css'
import {createRoot} from "react-dom/client";

class Menu extends Component {
  state = {
    open: false
  };

  render() {
    const { open } = this.state

    const items = <ul>
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
      <li>Four</li>
      <li>Five</li>
    </ul>

    return <div className="Menu">
      <ClickOutside onClickOutside={this.hide.bind(this)}>

        <a href="#" onClick={this.toggle.bind(this)}>Menu</a>
        {open ? items : null}
      </ClickOutside>
    </div>
  }

  toggle() {
    const { open } = this.state
    this.setState({ open: !open })
    console.log('toggle')
  }

  hide() {
    this.setState({ open: false })
  }
}


createRoot(document.querySelector('#root')).render(
    <Menu />
)

