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


    const namePicture = (name) =>{
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

      let value = names.indexOf(name)+1;
      if(value > 0){
        return (
          <img src = {`/Picture_Guests/${value}.png`}/>
        )
      } else {
        return this.props.name;

      }
    }
    return (
      <tr>
        <td className="centerCell itemDescription">
            {namePicture(this.props.name)}
        </td>
        <td className="centerCell itemDescription">
            {this.props.drink}
        </td>
        <td className="centerCell itemDescription">
            <Glyphicon glyph="unchecked" onClick={this.onEditClick}/>
        </td>
      </tr>
    )
  }
}

export default Drink
