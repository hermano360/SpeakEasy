import React, { Component } from 'react';
import {Glyphicon} from 'react-bootstrap';
import superagent from 'superagent';
var actions = require('../actions/actions');
var {connect} = require('react-redux');

class Drink extends Component {
  constructor(){
    super()
  }

  render(){
    var {dispatch} = this.props;
    const namePicture = (name) =>{
        return this.props.name;
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
        ,"old-fashioned"
        ,"amaretto sour"
        ,"manhattan perfect"
        ,"virgin colada"
        ,"beach volley"
        ,"mary is alive"
        ,"be 52"
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
            <Glyphicon glyph="unchecked" onClick={()=>{
              dispatch(actions.completeDrink(this.props.id))
            }}/>
        </td>
      </tr>
    )
  }
}

export default connect()(Drink)
