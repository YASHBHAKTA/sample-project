const express= require('express');

const app=express();

app.get("/",(req,resp)=>{
resp.send("APP IS WORKING...")
});

app.listen(5000)