const express = require ("express");
const app = express();
const cors = require("cors");
const pool=require("./db")
const path = require('path');
//middleware
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, '/client/build')));
const port = process.env.PORT || 5000;
//Routes 
     //create a todo 
        app.post("/todos", async (req, res)=>{
            try {
                console.log(req.body)
                const {tags,captions} = req.body;
                const newTodo = await pool.query("Insert INTO descripcion (tags,description) VALUES($1,$2) ",[tags,captions])
                res.json(newTodo);
            } catch (err) {
                console.log(err.message);
            }
        })

    //get all todo
    app.get('/', (req,res) => {
        res.sendFile(path.join(__dirname, '/client/build/index.html'));
      });

    // get a todo 

    //update a todo  

    //delete a todo 
app.listen(port,() =>{
    console.log("El server se Inicio en el puerto "
    , port)
})