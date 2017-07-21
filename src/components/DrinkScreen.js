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
    superagent.post('/deleteDrink')
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
    const checkoutItemView = () =>{
      return this.props.drinks.map((drink)=>{
        return (
          <Drink key={drink._id} date={drink.date} name={drink.name} drink={drink.drink} id={drink._id} handleEditClick={this.handleEditClick}/>
        )
      })
    };
    return (
      <section id="products" className="container-fluid content-section text-center inverse-color">
        <div className="section-content">
          <h2 className="section-title inverse-color">Drink List</h2>
          <div className="checkoutTable">
            <Table responsive>
              <thead>
                <tr>
                  <th className="centerCell itemDescription">
                    Name
                  </th>
                  <th className="centerCell itemDescription">
                    Drink
                  </th>
                  <th className="centerCell itemDescription">
                    <Glyphicon glyph="ok" onClick={()=>{console.log(test)}}/>
                  </th>
                </tr>
              </thead>
              <tbody>
                {checkoutItemView()}
              </tbody>
            </Table>
          </div>
        </div>
      </section>
    )
  }
}

export default DrinkScreen
