"use strict"

const express = require("express")
const app = express();
const port = 8005;
app.use(express.json())
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/test-1").then((success)=>{
    console.log("connect Data base !!!")
}).catch((err)=>{
    
    console.log(err)
})

app.post("/test",(req,res)=>{
    
    try{
    let username = req.body.username;
        console.log("Server Is Running proferly")
        res.status(200).json({"status": "server", "message": "is a", "result": username})
       
    }catch(err){
        console.log(err)
        res.status(500).json({"status": "error", "message":err })
    }
    
})

app.get("/",(req,res)=>{
    console.log("1")
    try{
        let username = req.query.username;
        console.log("Server Is Running properly")
        res.status(200).json({"status": "server", "message": "is a", "result": username})
    }catch(err){
        console.log(err)
        res.status(500).json({"status": "error", "message":err })
    }
    
})

app.get("/exam/:username",(req,res)=>{
    try{
        let username = req.params.username;
        console.log("Server Is Running properly")
        res.status(200).json({"status": "server", "message": "is a", "result":username})
    }catch(err){
        console.log(err)
        res.status(500).json({"status": "error", "message":err })
    }
    
})

app.put("/object",(req,res)=>{
    try{
    const username=req.body.username;
    console.log("Server Is Running")
    res.status(200).json({"status": "server", "message": "is a", "result": username})
   
}catch(err){
    console.log(err)
    res.status(500).json({"status": "error", "message":err })
}

})
app.patch("/examination",(req,res)=>{
    try{
        let username = req.query.username;
        console.log("Server Is Running")
        res.status(200).json({"status": "server", "message": "is a", "result":username})
    }catch(err){
        console.log(err)
        res.status(500).json({"status": "error", "message":err })
    }
    
})

app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Create Server Successfully!!!")
    }
})
