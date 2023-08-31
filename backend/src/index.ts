import express from 'express';
import {createServer} from 'http';
import {Server} from 'socket.io';
import cors from 'cors';
import {routes} from './routes/routes';
//o servidor express vai rodar com base no servidor nativo do node
const app = express();
const http = createServer(app);

app.use(cors({
    origin: '*'
}));
app.use(routes);

const io = new Server(http, {
    cors:{
        origin: "*",
        methods: ["GET", "POST"]
    }
});

export function criarNovaSala(uuid: string){
    return io.of(`${uuid}`)
}

http.listen(3000, () => console.log('App Rodando'));


