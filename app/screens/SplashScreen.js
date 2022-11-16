import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { screenNames } from '../constatnts/constants'
import Lottie from 'lottie-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SplashScreen = () => {

  const navigation = useNavigation()
  useEffect(() => {
    try {
      setTimeout(async () => {
       
        const tokenGen =await  AsyncStorage.getItem('userToken');
        if (tokenGen !== null) {
          navigation.replace(screenNames.HOME_SCREEN);
        }
        else{
          navigation.replace(screenNames.LOGIN_SCREEN);
        }
      }, 2500)
    }
    catch (err) {
      alert("login again");
    }
  }, [])

  return (
    <View style={{ flex: 1, alignItems: 'center', margin: 'auto' }}>
      <Lottie source={require('../../assets/fonts/Anime.json')} autoPlay loop style={{ height: 400, width: 400 }} />
      <Text style={{ fontWeight: 'bold', fontFamily: "Poppins-Regular", fontSize: 30, textAlign: "center", marginTop: 10, color: 'red' }}>Agile IDC</Text>
    </View>
  )

}

export default SplashScreen