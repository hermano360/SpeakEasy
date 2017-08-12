var superagent = require('superagent');

export var completeDrink = (id)=>{
  return (dispatch, getState)=>{
    superagent.post(`/finishDrink`).send(
      {id}
    ).set('Accept','text/json').end((err,res)=>{
      if (err || !res.ok) {
        console.log('Oh no! error');
      } else {
        dispatch(retrieveDrinks())
      }
    });
  }
}

export var getDrinks = (drinks)=>{
  return {
    type: 'GET_DRINKS',
    drinks
  }
}

export var retrieveDrinks = ()=>{
  return (dispatch, getState)=>{
    superagent.get(`/getDrinks`).set('Accept','text/json').end((err,res)=>{
      if (err || !res.ok) {
        console.log('Oh no! error');
      } else {
        if(res.body.text){
            dispatch(getDrinks(JSON.parse(res.body.text)));
        } else {
          console.log(res.body.filter(drink => !drink.finished));
            dispatch(getDrinks(res.body));
        }
      }
    });
  }
}
