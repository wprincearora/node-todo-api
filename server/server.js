
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose}=require('./db/mongoose.js');
var {Todo}=require('./models/Todo');
var {User}=require('./models/User');


var app = express();

//Third party middleware for parsing body
/*bodyParser converts json into req.body method*/
app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  console.log(req.body);
  var todo = new Todo({
    text:req.body.text
  });

  todo.save().then((doc)=>{
    res.send(doc);
  },(err)=>{
    res.status(400).send(err);
  });
});

app.get('/todos',(req,res)=>{
  Todo.find({}).then((docs)=>{
    res.send(docs);
  },(err)=>{
    res.status(400).send(err);
  });
});

app.listen(3000,()=>{
  console.log("App started on port 3000");
});
//Creating ORM or model
// var Todo=mongoose.model('Todo',{
//     text:{
//       type:String,
//       required:true
//     },
//     completed:{
//       type:Boolean
//     },
//     completedAt:{
//       type:Number
//     }
// });
//
// ///Creating another MODEL or ORM
// var User=mongoose.model('User',{
//     email:{
//       type:String,
//       required:true,
//       trim:true,
//       minLength:1,
//     }
// });
//
// //Creating new instance of the model
// // var newTodo = new Todo(
// //    {text:'',
// //    completed:true,
// //    completedAt:1
// //     });
// //
// //   newTodo.save().then((data)=>
// //   {
// //   console.log(data);
// //   },(e)=>{
// //     console.log(e.message);
// //   })
//
//
// var newUser= new User(
//     {
//       email:"    wwwprincearora@gmail.com"
//     });
// newUser.save().then((data)=>{
//       console.log(data);
// },(err)=>{
//     console.log(err.Message);
// });

module.exports={app};
