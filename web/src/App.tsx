import { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import './App.css'
import {io} from 'socket.io-client';
import axios from 'axios';

function App() {
  const [nome, setNome] = useState<string>('');
  const [uidSala, setUidSala] = useState<string>('');

  
  
/*   function handleLogar(event?: FormDataEvent){
    const socket = io('http://192.168.0.43:3000');
    event?.preventDefault();
    socket.emit('usuarioLogou', nome)
  }  */

  function criarSala(){
   try{
    axios.post("http://192.168.0.43:3000/criarsala",{
      usuario: nome
    })
   }catch(erro){
    console.log(erro)
   }
    /* const socket = io('http://192.168.0.43:3000');
    socket.emit('criarSala') */
  }

  function entrarEmSala(){
    const socket = io('http://192.168.0.43:3000/4130b0fb-a391-409c-b2ba-4282174dfe55');
    //socket.emit('criarSala')
  }


  return (
    <>
      <div>
          <input
          placeholder='Nome do usuario'
          value={nome}
          onChange={e => setNome(e.target.value)}
          type="text" />
      </div>
      <button onClick={criarSala} type='submit'>Criar Sala</button>
      <button onClick={entrarEmSala}>Entrar Sala</button>
    
    </>
  )
}

export default App
