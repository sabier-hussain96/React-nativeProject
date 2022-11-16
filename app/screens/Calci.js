/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View
} from 'react-native';

import {
  Colors, Header
} from 'react-native/Libraries/NewAppScreen';
import { HomeStyles } from '../../Styles/GlobalStyles';
import { screenNames } from '../constatnts/constants';



const Calci = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const navigation = useNavigation()

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [result, setResult] = useState(null);

  const addition = () => {
    const result = (Number(num1) + Number(num2));
    setResult(Number(result))


  }

  const subtraction = () => {
    const result = (Number(num1) - Number(num2));
    setResult(Number(result))


  }

  const multiply = () => {
    const result = (Number(num1) * Number(num2));
    setResult(Number(result))


  }
  const divide = () => {
    const result = (Number(num1) / Number(num2));
    setResult(Number(result))
  }

  const clear = (e) => {
    setResult("");
  }

  const todoListing = () => {
    navigation.navigate(screenNames.TODO_SCREEN);
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text style={{
            fontSize: 40, textAlign: 'center', color: 'red'
          }}>Calculator</Text>
          <TextInput style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            margin: 10
          }} placeholder="Enter first number" onChangeText={text => setNum1(text)}></TextInput>

          <TextInput style={{
            height: 40,
            borderColor: 'gray',
            borderWidth: 1,
            margin: 10
          }} placeholder="Enter second number" onChangeText={text => setNum2(text)}></TextInput>

          <View style={{ alignItems: "center", flexDirection: "row", justifyContent: "center" }}>
            <Text>Result:</Text>
            <Text style={{
              height: 40,
              width: 150,
              borderColor: 'gray',
              borderWidth: 1,
              margin: 10,
              padding: 10
            }}>{result}</Text>
          </View>
          <View style={HomeStyles.row}>
            <TouchableOpacity style={HomeStyles.textInput} onPress={addition}>
              <Text style={{ color: "#FFFFFF", marginTop: 10, textAlign: "center" }}>Add</Text>
            </TouchableOpacity>

            <TouchableOpacity style={HomeStyles.textInput} onPress={subtraction}>
              <Text style={{ color: "#FFFFFF", marginTop: 10, textAlign: "center" }} >Subtract</Text>
            </TouchableOpacity>
          </View>

          <View style={HomeStyles.row}>
            <TouchableOpacity style={HomeStyles.textInput} onPress={divide}>
              <Text style={{ color: "#FFFFFF", marginTop: 10, textAlign: "center" }} >Divide</Text>
            </TouchableOpacity>

            <TouchableOpacity style={HomeStyles.textInput} onPress={multiply}>
              <Text style={{ color: "#FFFFFF", marginTop: 10, textAlign: "center" }} >Multiply</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity style={HomeStyles.clearButton} onPress={clear} >
              <Text style={{ color: "#FFFFFF", marginTop: 10, textAlign: "center" }} >Clear</Text>
            </TouchableOpacity>

            <TouchableOpacity style={HomeStyles.todoList} onPress={todoListing} >
              <Text style={{ color: "#FFFFFF", marginTop: 10, textAlign: "center" }} >check the Todo List</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Calci;
