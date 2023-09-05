import express from 'express';
import {createServer} from 'http';
import {Server} from 'socket.io';
import cors from 'cors';
import {routes} from './routes/routes';
//o servidor express vai rodar com base no servidor nativo do node
const app = express();
const http = createServer(app);

app.use(cors({
    origin: '*',
}));
app.use(express.json());
app.use(routes);


export const io = new Server(http, {
    cors:{
        origin: "*",
        methods: ["GET", "POST"]
    }
});

io.on("connection", (socket) =>{
    console.log("Novo Usuario se conectou", socket.id);

    socket.on("join_room", (data) =>{
        socket.join(data.uidSala);
        socket.emit("user_join_room", data.nomeUsuario)
    })

    socket.on("send_mesage", (data) =>{
        console.log(data)
        io.to(data.uidSala).emit("receive_message", data)
    })

    socket.on("disconnect", () =>{
        console.log("usuario desconectou", socket.id)
    })
});

export function returnSala(){
    /* return io.of(`${uuid}`) */
    return  io;
}





http.listen(3000, () => console.log('App Rodando'));


