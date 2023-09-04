import React from 'react';
import { createContext, useContext ,useState } from 'react';

 type Context = {
    globalNomeUsuario: string;
    setGlobalNomeUsuario: (nomeDeUsuario: string) => void;
    globalUidSala: string;
    setGlobalUidSala: (uidSala: string) => void;
}

const ChatContext = createContext<Context>({} as Context);

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

