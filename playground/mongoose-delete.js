const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');

// Todo.remove({})

Todo.remove({}).then((result) => {
  console.log(result);
});

Todo.findOneAndRemove({
  _id: '5b6c2d23605a8efbaeeb72df'
}).then((todo) => {
  console.log(todo);
});
