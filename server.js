import express from 'express';
import http from 'http';
import cors from 'cors';
import {Server} from "socket.io"
import dotenv from "dotenv";
dotenv.config();
const app=express();
const server=http.createServer(app);

const io=new Server(server,{
    cors:{
        origin:"*"
    }
})

app.use(cors({origin:"*"}))

app.get('/',(req,res)=>{
    res.json({message:"Hello from server"});
})

server.listen(process.env.PORT || 3000,()=>{
    console.log("Server started on port no 3000")
})


io.on('connection',(socket)=>{
    socket.emit("welcome",socket.id);
    console.log(socket.id);
})