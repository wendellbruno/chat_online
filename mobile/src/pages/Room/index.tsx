import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Platform, KeyboardAvoidingView, SafeAreaView} from 'react-native';
import {useGlobalContext} from '../../context';
import { Message } from '../../model/chatModel';
import { TextInput } from 'react-native-gesture-handler';



export const Room: React.FC = () => {

  const {
    globalNomeUsuario,
    globalUidSala,
    socket
  } = useGlobalContext();

  const [newMessagem, SetNewMesagem] = useState<string>('');
  const [listMessagens, setListMessagens] = useState<Message[]>([])

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
      setListMessagens((list: Message) => [...list, data]);
    });
  },[socket])




  return (



    Platform.OS === 'ios' ?
    <SafeAreaView  style={{flex: 1, backgroundColor: "#282828"} }>
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
      <View style={styles.containerChat}>
        <FlatList
        data={listMessagens}
        renderItem={({item}) => (
          <View style={
            item.usuario === globalNomeUsuario ? 
            {backgroundColor: "#005C4B", padding: 10, marginBottom: 5} :
            {backgroundColor: '#202C33', padding: 10, marginBottom: 5}}> 
            <Text style={styles.massageText}>{item.usuario} : </Text>
            <Text style={styles.massageText}>{item.message}</Text>
          </View>
        )}
        />
      </View>
      <TextInput style={styles.containerTextMessage}
     placeholder='Message...'
     inputMode='text'
     multiline={true}
     numberOfLines={6}
     value={newMessagem}
     blurOnSubmit
     onChangeText={SetNewMesagem}
     onSubmitEditing={() => handleNewMenssage()}
     />  
    </KeyboardAvoidingView>
    </SafeAreaView>
    : <View style={styles.container}>
      <View style={styles.containerChat}>
      <FlatList
        data={listMessagens}
        renderItem={({item}) => (
          <View style={
            item.usuario === globalNomeUsuario ? 
            {backgroundColor: "#005C4B", padding: 10, marginBottom: 5} :
            {backgroundColor: '#202C33', padding: 10, marginBottom: 5}}> 
            <Text style={styles.massageText}>{item.usuario} : </Text>
            <Text style={styles.massageText}>{item.message}</Text>
          </View>
        )}
        />
      </View>
     <TextInput style={styles.containerTextMessage}
     placeholder='Message...'
     value={newMessagem}
     onChangeText={SetNewMesagem}
     onSubmitEditing={() => handleNewMenssage()}
     inputMode='text'
     /> 
    </View>
  )
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282828',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerChat: {
    borderWidth: 1,
    borderColor: "white",
    width: "80%",
    height: "80%"
  },
  massageText:{
    color: 'white'
  },
  containerTextMessage: {
    marginTop: 5,
    width: "80%",
    height: 50,
    backgroundColor: "#f8f8f8"
  }

});
