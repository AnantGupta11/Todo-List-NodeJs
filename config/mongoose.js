//require the library
const mongoose =require('mongoose');
//connect to data base
mongoose.connect('mongodb://localhost/contacts_list_db');

// accuire the connection to check if it is successful
const db=mongoose.connection;

//error
db.on('error', console.error.bind(console,'Error in connecting to db'));

//up and running then print the message
db.once('open', function(){
    console.log('Successfully connected to database');
})