import React, {useState, useEffect} from 'react';
import { useGlobalContext } from '../../context';
import './styles.css';
import { Message } from '../../model/chatModel';


export const Room: React.FC = () => {
  const [newMessagem, SetNewMesagem] = useState<string>('');
  const [listMessagens, setListMessagens] = useState<Message[]>([])
  
  const {globalNomeUsuario, socket, globalUidSala} = useGlobalContext();

  async function handleNewMenssage(){
    if(newMessagem !== ""){
      const data: Message = {
        uidSala: globalUidSala,
        usuario: globalNomeUsuario,
        message: newMessagem
      };
      socket.emit("send_mesage", data);
      SetNewMesagem('');
    }
  }

  useEffect(() =>{
    socket.on("receive_message", (data) => {
      console.log(data)
      setListMessagens((list: Message) => [...list, data]);
    });
  },[socket])

  



  return (
    <main>
      <div className='containerChat'>
      <div className="containerMenssage">
        {listMessagens.map( (element: Message, index) => {
          return (
            <div key={index} className='containerTextMessage'>
              <span className={element.usuario === globalNomeUsuario ? "you" : "other" } >
              <p className='messageUsuario'>{element.usuario} : </p>
              <p className='messageText'>{element.message}</p>
              </span>
            </div>
          );
        })}
      </div>
      <div className="containerTextArea">
        <textarea 
        value={newMessagem}
        onChange={e => SetNewMesagem(e.target.value)}
        onKeyUp={(event) =>{
          event.key === 'Enter' && handleNewMenssage()
          
        }}
        cols="30" rows="5"
        maxLength={200}
        />
      </div>
    </div>
    </main>
  );
}