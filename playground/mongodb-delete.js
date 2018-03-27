//const MongoClient = require('mongodb').MongoClient;
//Object Destructring Method
const {MongoClient,ObjectId} = require('mongodb');
//Self created Unique Object Id
console.log(new ObjectId('5aae648794b7741dd0fe6965'));
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){
return console.log('Unable to Connect to mongoDb Server');
}
console.log('Connection Successfull');
// db.collection('todos').deleteMany({completed:true}).then((result)=>{
// console.log(result);
// });

// db.collection('Todos').deleteOne({text:"Hii there"}).then((data)=>{
// console.log(data);
//
// });

db.collection('users').findOneAndDelete({_id:new ObjectId("5aae68b3013d011e1016c2ff")}).then((data)=>{
console.log("hi");
});
db.close();
});
