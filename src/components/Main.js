import React, {Component} from 'react'
import superagent from 'superagent'
import {Button,Navbar,NavItem, NavDropdown,MenuItem,Nav} from 'react-bootstrap'
const axios = require('axios')
import DrinkScreen from './DrinkScreen'
import DrinkMenu from './DrinkMenu'

class Main extends Component {
  constructor(){
    super()
  }
  
  render(){
    return (
      <div style={{height:'100vh'}}>
        <div className="col-sm-7 drink-menu-container">
          <DrinkMenu/>
        </div>
        <div className="col-sm-5">
          <DrinkScreen/>
        </div>
      </div>
    )
  }
}

export default Main
