import React, {useEffect, useState} from 'react';
import {io} from 'socket.io-client';
import { useGlobalContext } from '../../context';
import axios from 'axios';


export const Room: React.FC = () => {

  const {globalNomeUsuario, globalUidSala} = useGlobalContext();
  const socket = io(`http://192.168.0.43:3000/${globalUidSala}`)
  const [mensagem, setMensagem] = useState<string>('');
  
 
  axios.post(`http://192.168.0.43:3000/room`,{
          nomeUsuario: globalNomeUsuario,
          uidSala: globalUidSala
        })

  
  socket.on("msgFront", (data) => console.log(data))
  
  function handleSubmitMsg(event){
    event?.preventDefault();
    socket.emit("msg",({
      nomeUsuario: globalNomeUsuario,
      msg:mensagem
    }));
    setMensagem('');
  }

  return (
    <div>
     <form
     onSubmit={handleSubmitMsg}
     >
    <input 
     type="text" 
     onChange={e => setMensagem(e.target.value)}
     value={mensagem}
     />
     <button type='submit' onClick={handleSubmitMsg}> enviar</button>
     </form>



    </div>
  );
}
