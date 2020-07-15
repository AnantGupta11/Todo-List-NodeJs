const mongoose= require('mongoose');

const todoSchema= new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    category:{
        type: String
    },
    due:{
        type: Date
    }
});

const Todo= mongoose.model('Todo', todoSchema);

module.exports=Todo;
