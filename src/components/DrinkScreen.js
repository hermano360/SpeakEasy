import React, { Component } from 'react';
import {Button,Navbar,NavItem, NavDropdown,MenuItem,Nav, Carousel,OverlayTrigger, Popover, Table, Glyphicon} from 'react-bootstrap';
import superagent from 'superagent';
import Drink from './Drink'

class DrinkScreen extends Component {
  constructor(){
    super()
    this.state = {
    }
    this.handleEditClick = this.handleEditClick.bind(this);
  }

  handleEditClick(id){
    let that = this;
    superagent.post('/finishDrink')
    .set('Content-Type', 'application/json')
    .send({id:id})
    .end(function(err,res){
    if (err || !res.ok) {
      console.log('Oh no! error');
    } else {
      that.props.refreshMyDrinks();
    }

  })}

  render(){
    const drinksToBeMade = () =>{
      return this.props.drinks.map((drink)=>{
        if(!drink.finished){
          return (
            <Drink key={drink._id} date={drink.date} name={drink.name} drink={drink.drink} id={drink._id} handleEditClick={this.handleEditClick}/>
          )
        } else {
          return (
            <div></div>
          )
        }
      })
    };
    const completedDrinks = () =>{
      return this.props.drinks.map((drink)=>{
        if(drink.finished){
          return (
            <Drink key={drink._id} date={drink.date} name={drink.name} drink={drink.drink} id={drink._id} handleEditClick={this.handleEditClick}/>
          )
        } else {
          return (
            <div></div>
          )
        }
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

export default DrinkScreen
