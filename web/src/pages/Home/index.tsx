import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useGlobalContext } from '../../context';

export const Home: React.FC = () => {
    
    const {
      setGlobalUidSala,
      setGlobalNomeUsuario,
    } = useGlobalContext();

    const [nomeUsuario, setNomeUsuario] = useState<string>('');
    const [uidSala, setUidSala] = useState<string>('');
  
    const navigate = useNavigate();
    async function criarSala(){
     try{
      const {data} = await axios.post("http://192.168.0.43:3000/criarsala",{
        name: nomeUsuario
      })
      setGlobalNomeUsuario(nomeUsuario);
      setGlobalUidSala(uidSala)
      navigate(`/room${data.sala}`)
      }catch(erro){
      console.log(erro)
    }}
  
    async function entrarEmSala(){
      try{
        setGlobalNomeUsuario(nomeUsuario);
        setGlobalUidSala(uidSala);
        navigate(`/room/${uidSala}`);
      }catch(erro){
        console.log(erro)
      }
    }
  
    return (
      <main>
        <div className='container'>
            <input
            placeholder='Nome do usuario'
            value={nomeUsuario}
            onChange={e => setNomeUsuario(e.target.value)}
            type="text" />
          <button onClick={criarSala} type='submit'>Criar Sala</button>
        </div>
        <span>OU</span>
        <div className='container'>
        <input
            placeholder='Nome do usuario'
            value={nomeUsuario}
            onChange={e => setNomeUsuario(e.target.value)}
            type="text" />
            <input
            placeholder='codigo da sala'
            value={uidSala}
            onChange={e => setUidSala(e.target.value)}
            type="text" />
        <button onClick={entrarEmSala}>Entrar Sala</button>
        </div>
      </main>
    )
  
}
