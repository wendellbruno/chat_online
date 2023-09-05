import React  from "react";
import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../../context";

//const socket = io("http://192.168.0.43:3000");

export const Home: React.FC = () => {
  /* const [nomeUsuario, setNomeUsuario] = useState<string>("");
  const [uidSala, setUidSala] = useState<string>(""); */
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
