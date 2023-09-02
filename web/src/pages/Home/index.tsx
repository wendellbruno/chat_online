import React from 'react';
import { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {io} from 'socket.io-client';
import axios from 'axios';

export const Home: React.FC = () => {
    const [nome, setNome] = useState<string>('');
    const [uidSala, setUidSala] = useState<string>('');
  
    const navigate = useNavigate();
  
    
    async function criarSala(){
     try{
      const response = await axios.get("http://192.168.0.43:3000/criarsala")
      console.log(response)
      }catch(erro){
      console.log(erro)
    }
      
    }
  
    function entrarEmSala(salaId: string, nome: string){
  
      const socket = io(`http://192.168.0.43:3000/${salaId}`);
      
      socket.emit
    }
  
  
    return (
      <main>
        <div className='container'>
            <input
            placeholder='Nome do usuario'
            value={nome}
            onChange={e => setNome(e.target.value)}
            type="text" />
          <button onClick={criarSala} type='submit'>Criar Sala</button>
        </div>
        <span>OU</span>
        <div className='container'>
        <input
            placeholder='Nome do usuario'
            value={nome}
            onChange={e => setNome(e.target.value)}
            type="text" />
            <input
            placeholder='codigo da sala'
            value={uidSala}
            onChange={e => setUidSala(e.target.value)}
            type="text" />
        <button onClick={() => entrarEmSala(uidSala)}>Entrar Sala</button>
        </div>
      </main>
    )
  
}
