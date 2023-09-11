import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Home,Room} from '../pages';

const Stack = createStackNavigator()

export const routes: React.FC = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Room" component={Room}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}
