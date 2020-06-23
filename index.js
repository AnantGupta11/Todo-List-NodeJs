const express = require('express');
const path= require('path');
const { title } = require('process');

const port =8000;
// for firing up express server
const app= express();

// set the view engine to ejs
app.set('view engine','ejs');
app.set('views', path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));
var todo_List =[
    {
        name:"Workout"
    },
    {
        name:"Driving"
    }
]


app.get('/', function(req, res){
    return res.render('home',{
        title: 'Todo-List',
        todo_List:todo_List
    });
})

app.post('/create-todo', function(req,res){
    // todo_List.push({
    //     name:req.body.name
    // });
    todo_List.push(req.body);
    return res.redirect('back');
})

app.get('/delete-todo',(req,res) =>{
    
})

app.listen(port, function(err){
    if(err){
        console.log('Error in running in server', err);
        
    }
    console.log('Server is running on port:',port);

});