import React, {useState} from 'react';
import {Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useGlobalContext} from '../../context';
export const Home: React.FC = () => {

  const navigation = useNavigation();

  const {
    globalNomeUsuario,
    setGlobalNomeUsuario,
    globalUidSala,
    setGlobalUidSala,
    socket
  } = useGlobalContext();

  function joinRoom() {
    if (globalNomeUsuario !== "" && globalUidSala !== "") {
      
     socket.emit("join_room", {
        nomeUsuario: globalNomeUsuario,
        uidSala: globalUidSala
      })
      navigation.navigate('Room')
    }

  }


  return (

    Platform.OS === 'ios' ? 

   
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <TextInput 
        inputMode='text'
        onChangeText={setGlobalNomeUsuario}
        value={globalNomeUsuario}
        placeholder='NOME DO USUARIO'
        style={styles.TextInput} />
        <TextInput 
        inputMode='text'
        placeholder='CODIGO DA SALA'
        onChangeText={setGlobalUidSala}
        value={globalUidSala}
        style={styles.TextInput} />
        <TouchableOpacity 
        onPress={joinRoom}
        style={styles.btnEntrar}>
          <Text>Entrar</Text>
          </TouchableOpacity>
    </KeyboardAvoidingView>
   :
   <View style={styles.container}>
        <TextInput 
        inputMode='text'
        onChangeText={setGlobalNomeUsuario}
        value={globalNomeUsuario}
        placeholder='NOME DO USUARIO'
        style={styles.TextInput} />
        <TextInput 
        inputMode='text'
        placeholder='CODIGO DA SALA'
        onChangeText={setGlobalUidSala}
        value={globalUidSala}
        style={styles.TextInput} />
        <TouchableOpacity 
        onPress={joinRoom}
        style={styles.btnEntrar}>
          <Text>Entrar</Text>
          </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#282828',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 15
  },
  TextInput: {
    width: "50%",
    height: 50,
    backgroundColor: 'white',
    color: 'black',
    alignItems: "center",
    justifyContent: "center"
  },
  btnEntrar: {
    backgroundColor: 'white',
    width: "50%",
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  }
});
