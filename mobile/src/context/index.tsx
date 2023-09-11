import React from 'react';
import { createContext, useContext ,useState } from 'react';
import { Socket, io } from 'socket.io-client';

 type Context = {
    globalNomeUsuario: string;
    setGlobalNomeUsuario: (nomeDeUsuario: string) => void;
    globalUidSala: string;
    setGlobalUidSala: (uidSala: string) => void;
    socket: Socket
}

const ChatContext = createContext<Context>({} as Context);
const socket = io("http://192.168.0.43:3000");

type Props = {
    children? : React.ReactNode
}
export const ChatProvider: React.FC<Props> = ({children}) => {
    const [globalNomeUsuario, setNomeUsuario] = useState<string>('');
    const [globalUidSala, setUidSala] = useState<string>('');
    
    function setGlobalNomeUsuario(nomeDeUsuario: string){
        setNomeUsuario(nomeDeUsuario);
    }

    function setGlobalUidSala(uidSala: string){
        setUidSala(uidSala);
    }


    return (
    <ChatContext.Provider
    value={{
        globalUidSala,
        setGlobalUidSala,
        globalNomeUsuario,
        setGlobalNomeUsuario,
        socket
    }}
    >
        {children}
    </ChatContext.Provider>
    );
}


//hook perssonalizado
export function useGlobalContext(){
    const context = useContext(ChatContext);
    return context;
}