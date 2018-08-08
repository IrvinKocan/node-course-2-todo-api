const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
  if (err){
    return console.log('Unable to connect to MongoDb');
  }
  console.log('Connected to MongoDB server');

  const db = client.db('TodoApp');

  db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5b6ade2d605a8efbaeeb67c6')
  }, {
    $set: {
      completed: true
    }
  }, {
    returnOriginal: false
  }).then((res) => {
    console.log(res);
  });

  // client.close();
});
