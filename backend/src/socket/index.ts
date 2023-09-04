import {v4} from 'uuid';
import {returnSala} from '..';
import { Response, Request } from 'express';



export async function criarSala(req: Request,res: Response){
    const uidSala = v4();
    const novaSala = returnSala(uidSala);
    if(novaSala){
        console.log(novaSala.name)
        return res.json({
            sala: novaSala.name, 
            usuario: req.body
        });
    }
    else{
        return ;
    }
}

export async function entrarEmSala(req: Request, res: Response){
   try{
    const {uidSala, nomeUsuario } = req.body;
    const sala = returnSala(uidSala)

    sala.on('connection', (socket) => {
        socket.emit("bemvindo",{
            nome: nomeUsuario
        });

        
        socket.on("msg",(data) =>{
            console.log(data)
            sala.emit("msgFront", (data))
        })
        socket.on("disconnect", () => console.log(socket.id, 'desconectou'))


    })
   }catch(erro){
    console.log(erro)
   }


    
}

/* io.on("connection",async  (socket) =>{
    socket.on("criarSala", (data) =>{
        io.of(`${socket.id}`,)
    })
    io.of
}); */