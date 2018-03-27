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
db.collection('Todos').findOneAndUpdate({_id: new ObjectId("5aae641e056f321fdc0048b4")},
  {$set:{
    name:"Prince Arora"
  },$inc:{
    age:1
  }
   },{returnOriginal:false}
 ).then((data)=>
  {
  console.log(JSON.stringify(data,undefined,2));
},(err)=>{
console.log(JSON.stringify(err,undefined,2));
});
db.close();
});
