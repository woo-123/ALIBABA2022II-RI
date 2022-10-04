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
            const  {correo,data} = req.body;
    
            let texto='';
            for(let i=0;i<data.text.readResults[0].lines.length;i++){
                texto += `${data.text.readResults[0].lines[i].text} `
            }
            let tags ='';
            for (let i=0;i<data.tags.length;i++){
                tags += `${data.tags[i].name}, ` 
            }
            const captions=data.description.captions;
            const registro = await pool.query(`SELECT userid FROM descripcion WHERE userid = $1 `,[correo]); 
            console.log(registro);
            if (registro.rowCount == 0){
                const newTodo = await pool.query(`Insert INTO descripcion (tags,description,textconst,userid) VALUES($1,$2,$3,$4) `,[tags,captions,texto,correo])
                res.json(newTodo);
            }else if(registro.rowCount > 0){
                 newTodo = await pool.query(`UPDATE descripcion SET tags= $1, description= $2 ,textconst= $3 WHERE userid = $4 `,[tags,captions,texto,correo])
                 res.json(newTodo);
            }   
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