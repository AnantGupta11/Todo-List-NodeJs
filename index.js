const express = require('express');

const port =8000;
// for firing up express server
const app= express();







app.get('/', function(req, res){
    res.send('<h1>Anant</h1>');
})



app.listen(port, function(err){
    if(err){
        console.log('Error in running in server', err);
        
    }
    console.log('Server is running on port:',port);

});