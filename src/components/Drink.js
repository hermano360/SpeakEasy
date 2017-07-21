import React, { Component } from 'react';
import {Glyphicon} from 'react-bootstrap';
import superagent from 'superagent';

class Drink extends Component {
  constructor(){
    super()
    this.state = {
    }

    this.onEditClick = this.onEditClick.bind(this);
  }

  onEditClick(){
    let {id} = this.props;
    this.props.handleEditClick(id)
  }

  render(){
    // let {name, productOption, qty, productPrice}= this.props.item;
    // let {organization} = this.props;
    return (
      <tr>
        <td className="centerCell itemDescription">
            {this.props.name}
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
