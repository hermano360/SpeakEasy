var superagent = require('superagent');

export const DrinksReducer = (state=[], action)=>{
  switch(action.type){
    case 'GET_DRINKS':
      return action.drinks
    default:
      return state;
  }
}
