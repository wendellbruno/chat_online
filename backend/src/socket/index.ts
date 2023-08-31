import {v4} from 'uuid';
import {criarNovaSala} from '..';



export async function criarSala(){
    const uidSala = v4();
    const novaSala = criarNovaSala(uidSala);
    console.log(novaSala.name);
    novaSala.on("connection", (socket) =>{
        console.log('sala criada com sucesso', uidSala, socket.data)
        
    });
}

/* io.on("connection",async  (socket) =>{
    socket.on("criarSala", (data) =>{
        io.of(`${socket.id}`,)
    })
    io.of
}); */