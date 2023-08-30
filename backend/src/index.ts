import express from 'express';
import {createServer} from 'http';


//o servidor express vai rodar com base no servidor nativo do node
const app = express();
const http = createServer(app);

app.get('/', (req,res) =>{
    res.json('Teste')
})


http.listen(3000, () => console.log('App Rodando'));



