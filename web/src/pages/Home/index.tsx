import React  from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";
import './styles.css';
export const Home: React.FC = () => {
  
  const {
    globalNomeUsuario,
    setGlobalNomeUsuario,
    globalUidSala,
    setGlobalUidSala,
    socket
  } = useGlobalContext();

  const navigate = useNavigate()

  function joinRoom() {
    if (globalNomeUsuario !== "" && globalUidSala !== "") {
      socket.emit("join_room", {
        nomeUsuario: globalNomeUsuario,
        uidSala: globalUidSala
      });
      navigate('/room')
    }
  }


  return (
    <main>
      <div className="container">
        <input
          placeholder="NOME DO USUARIO"
          value={globalNomeUsuario}
          onChange={(e) => setGlobalNomeUsuario(e.target.value)}
          type="text"
        />
        <input
          placeholder="CODIGO DA SALA"
          value={globalUidSala}
          onChange={(e) => setGlobalUidSala(e.target.value)}
          type="text"
        />
        <button onClick={joinRoom}>Entrar Sala</button>
      </div>
    </main>
  );
};
