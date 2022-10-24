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

const forFade = ({ current }) => ({
  cardStyle: {
    opacity: current.progress,
  },
});

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen name="Login" component={Login} options={{ headerShown:false,cardStyleInterpolator: forFade }}/>
        <Stack.Screen name="Register" component={Register} options={{ headerShown:false,cardStyleInterpolator: forFade }}/>
        <Stack.Screen name="Home" component={Home} options={{ headerShown:false,cardStyleInterpolator: forFade }}/>
        <Stack.Screen name="Book" component={Book} options={{ headerShown:false,cardStyleInterpolator: forFade }}/>
        <Stack.Screen name="Profile" component={Profile} options={{ headerShown:false,cardStyleInterpolator: forFade }}/>

      </Stack.Navigator>
      <StatusBar style="light" backgroundColor='#F67327'/>
    </NavigationContainer>
  );
}

export default App;