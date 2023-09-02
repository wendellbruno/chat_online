import {v4} from 'uuid';
import {criarNovaSala} from '..';



export function criarSala(req,res){
    const uidSala = v4();
    const novaSala = criarNovaSala(uidSala);
    if(novaSala){
        console.log(novaSala.name)
        return res.json(novaSala.name)
    }
    else{
        return ;
    }
}

/* novaSala.on("connection", (socket) =>{
    console.log('sala criada com sucesso', uidSala)
    
}); */

/* io.on("connection",async  (socket) =>{
    socket.on("criarSala", (data) =>{
        io.of(`${socket.id}`,)
    })
    io.of
}); */