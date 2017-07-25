import React, { Component } from 'react';
import {Glyphicon} from 'react-bootstrap';
import superagent from 'superagent';

class Drink extends Component {
  constructor(){
    super()
    this.state = {
      nameNumber:0
    }

    this.onEditClick = this.onEditClick.bind(this);
  }

  onEditClick(){
    let {id} = this.props;
    this.props.handleEditClick(id)
  }

  render(){


let names = [
  "marie",
  "jennifer",
  "sophie",
  "ode",
  "hedia",
"sebastien",
"ilan",
"ken",
"pierre",
"alexandre",
"matthew",
"marc alexandre",
"audrey",
"caroline",
"arnaud",
"julie",
"jerome"];

    const namePicture = (name) =>{
      let value = names.indexOf(name.toLowerCase())+1;
      if(value > 0){
        return (
          <img src = {`/Picture_Guests/${value}.png`} style={{height:'50px', width: '50px'}}/>
        )
      } else {
        return this.props.name;

      }
    }
    const drinkPicture = (drink) =>{
      let drinksList = [
  "bellini",
  "pina colada",
  "mojito",
  "sex on the beach",
  "bloody mary"
  ,"vodkatini james bond"
  ,"martini dry"
  ,"cuba libre"
  ,"death in the afternoon"
  ,"green beast"
  ,"negroni"
  ,"mint julep"
  ,"old fashioned"
  ,"amarreto sour"
  ,"manhattan perfect"
  ,"virgin colada"
  ,"beach volley"
  ,"mary is alive"
  ,"be fifty two"
  ,"black russian",
  "kamikaze"
  ];
      let value = 0;
      drinksList.forEach((drinkName,index)=>{
        if(drinkName == this.props.drink){
          value = index + 1;
        }
      })
      if(value > 0){
        return (
          <img src = {`/Picture_Cocktails/${value}.png`} style={{width:'100%'}}/>
        )
      } else {
        return this.props.drink;
      }
    }
    return (
      <tr>
        <td className="centerCell itemDescription">
            {namePicture(this.props.name)}
        </td>
        <td className="centerCell itemDescription">
            {drinkPicture(this.props.drink)}
        </td>
        <td className="centerCell itemDescription">
            <Glyphicon glyph="unchecked" onClick={this.onEditClick}/>
        </td>
      </tr>
    )
  }
}

export default Drink
