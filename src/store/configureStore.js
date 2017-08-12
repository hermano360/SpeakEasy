var redux = require('redux');
var thunk = require('redux-thunk').default;

var {DrinksReducer} = require('../reducers/reducers.js');

export var configure = (initialState={})=>{
  var reducer = redux.combineReducers({
    drinks: DrinksReducer
  })
  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension(): f=>f
  ))
  return store
}
