var express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const configureStripe = require('stripe');
const drinksDatabase = require('./api/drinksDatabase.js')

//Create out app
const postStripeCharge = res => (stripeErr, stripeRes) => {
  if (stripeErr) {
    res.status(500).send({ error: stripeErr });
  } else {
    res.status(200).send({ success: stripeRes });
  }
}

var stripe = configureStripe('sk_test_Ln4I7mzcg3YZ0CwM3tOo5QWs');
var app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/getDrinks', function (req,res,next){
  console.log("getting drinks");
  drinksDatabase.retrieve(function(docs){
  res.json(docs)
});
})


app.post('/deleteDrink', function (req,res,next){
  console.log('deleting drinks');
  drinksDatabase.delete(req.body.id, function(docs){
  res.json(docs)
});
})

app.listen(PORT,function(){
  console.log('Express server is up on port ' + PORT);
});
