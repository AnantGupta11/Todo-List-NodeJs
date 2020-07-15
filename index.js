const express = require('express');
const path= require('path');
const { title } = require('process');

const port =8000;

const db=require('./config/mongoose');
// for firing up express server
const app= express();
const Todo=require('./models/todo');
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
    //todo_List.push(req.body);
    Todo.create({
        name:req.body.name,
        category:req.body.category,
        due:req.body.due
    },function(err, newTodo){
        if(err){
            console.log('Error in creating todo',err);
            return;
        }
        console.log('******',newTodo);
        return res.redirect('back');
    })
    // return res.redirect('back');
})

app.get('/delete-todo',(req,res) =>{
    
})

app.listen(port, function(err){
    if(err){
        console.log('Error in running in server', err);
        
    }
    console.log('Server is running on port:',port);

});