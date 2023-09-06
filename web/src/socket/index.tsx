import { io } from "socket.io-client";
import { useGlobalContext } from "../context";

import React from 'react';
import axios from "axios";

export const Socket: React.FC = () => {
const {globalNomeUsuario, globalUidSala} = useGlobalContext();
const socket = io(`http://192.168.0.43:3000/${globalUidSala}`)


axios.post(`http://192.168.0.43:3000/room`,{
          nomeUsuario: globalNomeUsuario,
          uidSala: globalUidSala
        })

        console.log(socket);

socket.on("msgFront", (data) => console.log(data))        

  return (
    <div>

    </div>
  );
}
