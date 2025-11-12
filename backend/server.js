import express from "express";

const app=express();
app.get("/api/auth/signup",(req,res)=>{
res.send("Login endpoint")
})
app.listen(3000,()=>console.log("Server running on port 3000"));
