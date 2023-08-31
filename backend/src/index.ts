import express from 'express';
import {createServer} from 'http';
import cors from 'cors';
import {routes} from './routes/routes';
//o servidor express vai rodar com base no servidor nativo do node
const app = express();
app.use(cors({
    origin: '*'
}));
app.use(routes);
export const http = createServer(app);

http.listen(3000, () => console.log('App Rodando'));



