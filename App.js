import * as React from 'react';
import { View, Text , Button ,Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import Login from './router/Login';
import Register from './router/Register';
import Home from './router/Home';
import Book from './router/Book';
import Profile from './router/Profile';
import Staff_Home from './router/Staff_Home';
import Staff_Book from './router/Staff_Book';
import Staff_Profile from './router/Staff_Profile';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createNativeStackNavigator();


function App() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={{ headerShown:false }}/>
          <Stack.Screen name="Register" component={Register} options={{ headerShown:false }}/>
          <Stack.Screen name="Home" component={Home} options={{ headerShown:false }}/>
          <Stack.Screen name="Book" component={Book} options={{ headerShown:false }}/>
          <Stack.Screen name="Profile" component={Profile} options={{ headerShown:false }}/>
          <Stack.Screen name="Staff_Home" component={Staff_Home} options={{ headerShown:false }}/>
          <Stack.Screen name="Staff_Book" component={Staff_Book} options={{ headerShown:false }}/>
          <Stack.Screen name="Staff_Profile" component={Staff_Profile} options={{ headerShown:false }}/>
        </Stack.Navigator>
        <StatusBar style="light" backgroundColor='#F67327'/>
      </NavigationContainer>
    );
}

export default App;