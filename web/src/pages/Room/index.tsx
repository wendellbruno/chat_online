import React, {useState, useEffect} from 'react';
import { useGlobalContext } from '../../context';
import './styles.css';


export const Room: React.FC = () => {
  const [newMessagem, SetNewMesagem] = useState<string>('');
  const [listMessagens, setListMessagens] = useState([])
  
  const {globalNomeUsuario, socket, globalUidSala} = useGlobalContext();

  async function handleNewMenssage(){
    if(newMessagem !== ""){
      const data = {
        uidSala: globalUidSala,
        usuario: globalNomeUsuario,
        message: newMessagem
      };
      socket.emit("send_mesage", data);
      //setListMessagens(list => [...list, data]);
      SetNewMesagem('');
      
    }
  }

  useEffect(() =>{
    socket.on("receive_message", (data) => {
      console.log(data)
      setListMessagens(list => [...list, data]);
    });
  },[socket])

  



  return (
    <div className='containerChat'>
      <div className="containerMenssage">
        {listMessagens.map( (element, index) => {
          return (
            <div key={index}>
              <span >
              <p>{element.usuario}</p>
              <p>{element.message}</p>
              </span>
            </div>
          );
        })}
      </div>
      <div className="containerTextArea">
        <textarea 
        cols="90" rows="10" 
        value={newMessagem} onChange={e => SetNewMesagem(e.target.value)} 
        />
        <button className='BtnEnviar' onClick={handleNewMenssage} >ok</button>
      </div>
    </div>
  );
}