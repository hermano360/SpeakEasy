import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'
var {Provider} = require('react-redux');

var actions = require('./actions/actions.js');
var store = require('./store/configureStore.js').configure();

store.subscribe(()=>{
  var state = store.getState();
  console.log('New State', state);
})
store.dispatch(actions.retrieveDrinks())


ReactDOM.render(
  <Provider store = {store}>
    <Main />
  </Provider>
  , document.getElementById('app'))
