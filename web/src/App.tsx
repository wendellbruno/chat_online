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

    const socket = io('http://192.168.0.43:3000');
    socket.emit('criarSala',{nome: 'Wendell'})
  }


  return (
    <>
      <div>
          <input
          placeholder='Nome do usuario'
          onChange={e => setNome(e.target.value)}
          value={nome}
          type="text" />
      </div>
      <button onClick={criarSala}>Criar Sala</button>
      <button>Entrar Sala</button>
    
    </>
  )
}

export default App
