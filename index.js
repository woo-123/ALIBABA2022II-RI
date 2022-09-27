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
        app.post("/",(req,res)=>{
            console.log(req.body)
        })
        app.post("/todos", async (req, res)=>{
            try {
                console.log(req.body)
                
                const data = req.body;
              
                let texto='';
                for(let i=0;i<data.text.readResults[0].lines.length;i++){
                    texto += `${data.text.readResults[0].lines[i].text} `
                }
                let hola ='';
                for (let i=0;i<data.tags.length;i++){
                    hola += `${data.tags[i].name}, ` 
                }
                console.log(texto);
                const captions=data.description.captions;
                const newTodo = await pool.query(`UPDATE "AspNetUsers" SET tags= $1, description= $2 ,textconst= $3`,[hola,captions,texto])
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