//const MongoClient = require('mongodb').MongoClient;
//Object Destructring Method
const {MongoClient} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
if(err){
return console.log('Unable to Connect to mongoDb Server');
}
console.log('Connection Successfull');
db.collection('Todos').find({text:'Hii there',completed:false}).toArray().then((docs)=>{
console.log(JSON.stringify(docs,undefined,2));
},(err)=>{

});
db.close();
});
