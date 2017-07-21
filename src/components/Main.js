import React, {Component} from 'react'
import superagent from 'superagent'
import {Button,Navbar,NavItem, NavDropdown,MenuItem,Nav} from 'react-bootstrap'
const axios = require('axios')
import DrinkScreen from './DrinkScreen'

class Main extends Component {
  constructor(){
    super()
    this.state = {
      drinkList:[]
    }
    this.refreshMyDrinks = this.refreshMyDrinks.bind(this);
  }

  refreshMyDrinks(){
    superagent
    .get(`/getDrinks`)
    .set('Accept','text/json')
    .end((err,res)=>{
      if (err || !res.ok) {
        console.log('Oh no! error');
      } else {
        if(res.body.text){
          this.setState({
            drinkList: JSON.parse(res.body.text)
          })
        } else {
          this.setState({
            drinkList: res.body
          })
        }

      }
    });
  }


  componentWillMount(){
    superagent
    .get(`/getDrinks`)
    .set('Accept','text/json')
    .end((err,res)=>{
      if (err || !res.ok) {
        console.log('Oh no! error');
      } else {
        if(res.body.text){
          this.setState({
            drinkList: JSON.parse(res.body.text)
          })
        } else {
          this.setState({
            drinkList: res.body
          })
        }

      }
    });
  }

  render(){
    return (
      <div>
        <DrinkScreen drinks={this.state.drinkList} refreshMyDrinks={this.refreshMyDrinks}/>
      </div>
    )
  }
}

export default Main
