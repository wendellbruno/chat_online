import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {Routes} from './src/Routes';
import {ChatProvider} from './src/context';

export default function App() {
  return (
    <ChatProvider>
      <Routes />
    </ChatProvider>
  );
}

