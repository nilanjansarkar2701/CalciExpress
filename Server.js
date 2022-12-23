const express=require('express');
const app=express();
app.get("/Calculator",function(req,res)
{
    res.sendFile(__dirname+"/index.html");
});
app.listen(2020,function()
{
    console.log("Server running at port: 2020");
});
