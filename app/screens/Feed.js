import { View, Text ,TouchableOpacity,ScrollView} from 'react-native'
import React from 'react'
import { HomeStyles } from '../../Styles/GlobalStyles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { screenNames } from '../constatnts/constants'

const Feed = () => {
  const navigation = useNavigation();

  const logOut = () =>{
      AsyncStorage.removeItem('userToken');
      navigation.replace(screenNames.LOGIN_SCREEN);
  }



  return (
    <View style={{flex:1}}>
      <ScrollView>
      <Text></Text>
      </ScrollView>
      <TouchableOpacity style={HomeStyles.loginBtn} onPress={logOut}><Text style={{ textAlign: "center",fontFamily:"Poppins-Regular",fontWeight:"bold",fontSize:20 }}>Log Out</Text></TouchableOpacity>
    </View>
  )
}

export default Feed