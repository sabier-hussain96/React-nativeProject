import { View, Text ,TouchableOpacity,Image,FlatList, Dimensions} from 'react-native'
import React from 'react'
import { HomeStyles } from '../../Styles/GlobalStyles'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { screenNames } from '../constatnts/constants'


const Feed = () => {
  const navigation = useNavigation();

  // const logOut = () =>{
  //     AsyncStorage.removeItem('userToken');
  //     navigation.replace(screenNames.LOGIN_SCREEN);
  // }


  const data = [
    {
      id:1,
      image:require("../../assets/Images/Benten.png")
    },
    {
      id:2,
      image:require("../../assets/Images/bg2.jpg")
    },
    {
      id:3,
      image:require("../../assets/Images/bg3.jpg")
    },
    {
      id:4,
      image:require("../../assets/Images/bg4.jpg")
    },
    {
      id:5,
      image:require("../../assets/Images/Naruto.png")
    },
  ]

  return (
    <View style={{flex:1}}>
      <Text style={{fontFamily:"Poppins-Italic",fontSize:20,textAlign:"center",color:"#000000"}}>Image Carousel</Text>
      {/* Image Carousel */}
      <FlatList 
      horizontal
      data={data}
      bounces={false}
      initialScrollIndex={0}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <Image source={item.image} style={{ width: Dimensions.get('screen').width, height: 400 }} />
      )}
      />
      {/* Paginator */}
      
      
  
    </View>
  )
}

export default Feed