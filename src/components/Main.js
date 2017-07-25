import React, {Component} from 'react'
import superagent from 'superagent'
import {Button,Navbar,NavItem, NavDropdown,MenuItem,Nav} from 'react-bootstrap'
const axios = require('axios')
import DrinkScreen from './DrinkScreen'
import DrinkMenu from './DrinkMenu'

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
    let that = this;
    setInterval(function(){
      console.log("new items retrieval");
      superagent
        .get(`/getDrinks`)
        .set('Accept','text/json')
        .end((err,res)=>{
          if (err || !res.ok) {
            console.log('Oh no! error');
          } else {
            if(res.body.text && JSON.parse(res.body.text).length !== that.state.drinkList.length){
              that.setState({
                drinkList: JSON.parse(res.body.text)
              })
            } else {
              if(res.body.length !== that.state.drinkList.length){
                console.log('changing state');
                that.setState({
                  drinkList: res.body
                })
              } else {
                console.log('keeping state');
              }
            }

          }
        }) }, 10000);
  }

  render(){
    return (
      <div style={{height:'100vh'}}>
        <div className="col-sm-7 drink-menu-container">
          <DrinkMenu/>
        </div>
        <div className="col-sm-5">
          <DrinkScreen drinks={this.state.drinkList} refreshMyDrinks={this.refreshMyDrinks}/>
        </div>
      </div>
    )
  }
}

export default Main
