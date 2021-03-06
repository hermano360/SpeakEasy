import React, { Component } from 'react';
import {Button,Navbar,NavItem, NavDropdown,MenuItem,Nav, Carousel,OverlayTrigger, Popover, Table, Glyphicon} from 'react-bootstrap';
import superagent from 'superagent';
import Drink from './Drink'
var {connect} = require('react-redux');
var actions = require('../actions/actions');

class DrinkScreen extends Component {
  constructor(){
    super()
  }
  componentDidMount(){
    setInterval(()=>{
        this.props.dispatch(actions.retrieveDrinks())
    }, 5000);
  }
  render(){
    const drinksToBeMade = () =>{
      let filtered = this.props.drinks.filter((drink)=>{
        return !drink.finished;
      })
      return filtered.map((drink)=>{
          return (
            <Drink key={drink._id} date={drink.date} name={drink.name} drink={drink.drink} id={drink._id}/>
          )
      })
    };
    const completedDrinks = () =>{
      let filtered = this.props.drinks.filter((drink)=>{
        return drink.finished;
      })
      return filtered.map((drink)=>{
          return (
            <Drink key={drink._id} date={drink.date} name={drink.name} drink={drink.drink} id={drink._id}/>
          )
      })
    };
    return (
      <div>
        <h2 className="section-title inverse-color">Drinks To Be Made</h2>
      <section id="products" className="container-fluid content-section text-center inverse-color">
        <div className="section-content">
          <div className="checkoutTable">
            <Table responsive>
              <tbody>
                {drinksToBeMade()}
              </tbody>
            </Table>
          </div>
        </div>
      </section>
      <h2 className="section-title inverse-color">Completed Drinks</h2>
      <section id="products" className="container-fluid content-section text-center inverse-color">
        <div className="section-content">
          <div className="checkoutTable">
            <Table responsive>
              <tbody>
                {completedDrinks()}
              </tbody>
            </Table>
          </div>
        </div>
      </section>
      </div>
    )
  }
}

export default connect(
  state=>state
)(DrinkScreen);
