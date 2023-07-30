const express = require("express");
const app = express();//connect express
app.use(express.json())//collect data form json formet

//server run
app.listen(5000, ()=>{
    console.log("server is stared......");
})

//api desing
//basic structure in api
app.post("/user",async(req,res)=>{
    console.log(req.body);//recive data from user

    const { name } = req.body;
    if(name == "Rayhan"){
        res.send({status:"success"})
    }
})