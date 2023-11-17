const Todo = require('../models/todo.js');

module.exports.gettodos = async(req,res) => {
    try{
        const userID = req.params.userid;
        const todos = await Todo.find({userID : userID});
        res.json(todos);
    }
    catch(error){
        res.json(error);
    }
}

module.exports.posttodos = async(req,res) => {
    try{
        const userID = req.params.userid;
        const todo = await Todo.create({
            title : req.body.title,
            userID : userID,
        })
        res.json(todo);
    }
    catch(error){
        res.json(error);
    }
}

module.exports.deletetodos = async(req,res) => {
    try{
        const userID = req.params.userid;
        const todo = await Todo.findByIdAndDelete(req.params.id);
        res.json(todo);
    }
    catch(error){
        res.json(error);
    }
}

module.exports.gettodo = async(req,res) => {
    try{
        const userID = req.params.userid;
        const todo = await Todo.findById(req.params.id);
        res.json(todo);
    }
    catch(error){
        res.json(error);
    }
}

module.exports.updatetodo = async(req,res) => {
    try{
        const userID = req.params.userid;
        const todo = await Todo.findByIdAndUpdate(req.params.id, {
            title : req.body.title,
        })
        res.json(todo);
    }
    catch(error){
        res.json(error);
    }
}

module.exports.updatetodostatus = async(req,res) => {
    try{
        const todo = await Todo.findByIdAndUpdate(req.params.id, {
            status : req.body.status,
        })
        res.json(todo);
    }
    catch(error){
        res.json(error);
    }
}