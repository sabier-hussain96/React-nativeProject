// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { header_Shown, screenNames } from './app/constatnts/constants';
import Calci from './app/screens/Calci';
import Home from './app/screens/Home';
import SplashScreen from './app/screens/SplashScreen';
import TodoList from './app/screens/ToDoList';
import Login from './app/screens/Login';
// import EditNotes from './app/screens/EditNotes';
import Notes from './app/screens/Notes';
import AddNotes from './app/screens/AddNotes';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={screenNames.SPLASH_SCREEN}>
        <Stack.Screen name={screenNames.SPLASH_SCREEN} component={SplashScreen} options={header_Shown} />
        <Stack.Screen name={screenNames.LOGIN_SCREEN} component={Login} options={header_Shown} />
        <Stack.Screen name={screenNames.HOME_SCREEN} component={Home} options={header_Shown} />
        <Stack.Screen name={screenNames.CALCI_SCREEN} component={Calci} options={header_Shown}  />
        <Stack.Screen name={screenNames.TODO_SCREEN} component={TodoList} options={header_Shown}  />
        <Stack.Screen name={screenNames.NOTES} component={Notes} options={header_Shown}/>
        {/* <Stack.Screen name={screenNames.ADD_NOTE} component={AddNotes} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;