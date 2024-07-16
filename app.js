const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const path = require("path");
const Task = require("./modules/tasks")

require('dotenv').config();
const port = process.env.PORT || 3000
const conn = require("./db/conn")
conn();

const methodOverride = require("method-override")
app.use(methodOverride("_method"))

app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({extended: true}))


// EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get("/", async (req,res) => {
    try{
        const tasks = await Task.find()
        res.render("index", {tasks})
    }catch(error) {
        console.error(error)
    }          
            
})


app.get("/tasks/add", (req, res) => {
    res.render("addTask")
})

app.post("/tasks/add", async (req, res) =>{
    try{
        const newTask  = new Task({
            title: req.body.title,
            description: req.body.description
        });
        await newTask.save();
        res.redirect("/")

    }catch(error) {
        console.error(error)
    }
})

app.get("/tasks/edit/:id", async (req, res) => {
    try{
        const task = await Task.findById(req.params.id)
        if(!task) return res.status(404).send("Task not found!")
        res.render("editTask", {task})

    }catch(error) {
        console.error(error)
    }
})

app.post("/tasks/edit/:id", async (req, res) => {
    try{
        await Task.findByIdAndUpdate(req.params.id, {
            title: req.body.title,
            description: req.body.description,
            completed: req.body.completed === 'true'
        })
        res.redirect("/")

    }catch(error) {
        console.error(error)
    }
})

app.delete("/tasks/delete/:id", async (req, res) => {
    try{
        await Task.findByIdAndDelete(req.params.id)
        res.redirect("/")
    }catch(error) {
        console.error(error)
    }
    
})


app.listen(port, () => {
    console.log(`Server is rinning at ${port}`);
})
