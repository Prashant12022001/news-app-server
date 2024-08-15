import express from 'express'
import dotenv from "dotenv";
import {connectDB} from './db.js'
import newsRoutes from './routes/newsRoutes.js'
import cors from 'cors'

const app= express()

dotenv.config();

connectDB();

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send("News App"
    )
})

app.use("/api/v1", newsRoutes)

app.listen(8080,()=>{
    console.log("server is running")
})