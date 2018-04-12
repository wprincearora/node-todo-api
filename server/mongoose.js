var mongoose = require('mongoose');
//defining the promise library for mongoose
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');
module.export={mongoose};
