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
// db.collection('Todos').find({_id: new ObjectId('5aae641e056f321fdc0048b4')}).toArray().then((docs)=>{
// console.log(JSON.stringify(docs,undefined,2));
// },(err)=>{
// });

//Count Clause
db.collection('Todos').find().count().then((count)=>{
console.log(count);  
},(err)=>{
console.log(err);
});

db.close();
});
