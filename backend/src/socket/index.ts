import {Server} from 'socket.io';
import {v4} from 'uuid';
import { http } from '../index';

const io = new Server(http, {
    cors:{
        origin: "*",
        methods: ["GET", "POST"]
    }
});

export function criarSala(){
    const uidSala = v4();
    const novaSala = io.of(`/${uidSala}`)

    novaSala.on("connection", (socket) =>{
        console.log('sala criada com sucesso', uidSala, socket.data)
        
    });
}

io.on("connection",async  (socket) =>{
    socket.on("criarSala", (data) =>{
        io.of(`${socket.id}`,)
    })
    io.of
});