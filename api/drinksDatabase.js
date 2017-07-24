const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const superagent = require('superagent');

module.exports = {

  retrieve: function(callback){
    var dbLink = 'mongodb://'+'hermano360'+':'+'f00tball'+'@'+'ds137090.mlab.com:37090/meadowlark';
    var query = {};
    try {
      MongoClient.connect(dbLink, function(err, db) {
        console.log("Successfully connected to database");
        console.log(query);
        db.collection('drinkQueue').find(query).toArray(function(err, docs) {
          if(err){
            console.log('simpleRetrieve');
            var dbLink= 'https://api.mlab.com/api/1/databases/meadowlark/collections/drinkQueue?apiKey=GCDYDkXV7dbJ5-fic6mTB6jOvNVs-ecf';
            superagent
            .get(dbLink)
            .end(function(err, res){
              if (err) {
                console.log(err);
                callback(err)
              } else {
                callback(res);
                console.log(res);
              }
            });
          } else {
            console.log(docs);
            callback(docs);
            db.close();
          }

        });
      });
    } catch (e) {
      console.log(e)
    }
  },
  finishDrink: function(id,callback){
    var dbLink = 'mongodb://'+'hermano360'+':'+'f00tball'+'@'+'ds137090.mlab.com:37090/meadowlark';
    var query = {_id: ObjectId(id)};
    MongoClient.connect(dbLink, function(err, db) {
      console.log("Successfully connected to database");
      console.log(query);
      db.collection('drinkQueue').updateOne(query, {$set: { "finished": true}},function(err,res){
        if (err) {
          callback(err);
          db.close();
        } else {
          callback(res)
          db.close();
        }
      })
    });
  }
}
