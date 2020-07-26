//require the library
const mongoose =require('mongoose');
//connect to data base
mongoose.connect('mongodb+srv://ak8002749:Anant@123@cluster0.uhew4.mongodb.net/todo-list-db?retryWrites=true&w=majority',{useNewUrlParser:true});

// accuire the connection to check if it is successful
const db=mongoose.connection;

//error
db.on('error', console.error.bind(console,'Error in connecting to db'));

//up and running then print the message
db.once('open', function(){
    console.log('Successfully connected to database');
})