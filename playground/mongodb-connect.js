//const MongoClient = require('mongodb').MongoClient;
//Object Destructring Method
const {MongoClient} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){
return console.log('Unable to Connect to mongoDb Server');
}
console.log('Connection Successfull');
// db.collection('Todos').insertOne({
//   text:'Hii there',
//   completed:false
// },(err,res)=>{
// if(err){
//  return console.log('Unable to finish ',err);
// }
// console.log(JSON.stringify(res.ops,undefined,2));
// });
db.collection('users').insertOne({
  name:'Prince',
  age:'18',
  location:'Sirsa'
},(err,res)=>{
if(err){
return console.log('Error While Processing your Request');
}
console.log(JSON.stringify(res.ops,undefined,2));
});
db.close();
});
