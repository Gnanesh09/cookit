import express from "express"
import  "dotenv/config"
const app = express()
const port = process.env.PORT || 8001

app.get("/api/health", (req,res)=>{
    res.status(200).json({success:true})
})

app.listen(port,()=>{
    console.log("server runnig at port: ",port)
})