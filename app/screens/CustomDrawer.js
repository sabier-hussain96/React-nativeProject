import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { HomeStyles } from '../../Styles/GlobalStyles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Logout from '../../assets/icons/Logout'
import Share from '../../assets/icons/Share'


// const bgImage = { uri: "https://reactjs.org/logo-og.png" }
const CustomDrawer = (props) => {

    const logOut = () => {
        AsyncStorage.removeItem('userToken');
        AsyncStorage.removeItem('notesArray');
        AsyncStorage.removeItem('todosArray');
        navigation.replace(screenNames.LOGIN_SCREEN);
    }

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props} style={{ backgroundColor: "#fff" }}>
                <ImageBackground source={require('../../assets/Images/bg2.jpg')} resizeMode="cover" style={{ padding: 30 }}>
                    <Image source={require('../../assets/Images/Naruto.png')} style={{ height: 80, width: 80, borderRadius: 40 }}></Image>
                    <Text style={HomeStyles.drawerUserName}>Shinghai</Text>
                </ImageBackground>
                <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
                    <DrawerItemList {...props} />
                </View>

            </DrawerContentScrollView>
            <View style={{ padding: 30, borderTopWidth: 1, borderTopColor: "#ccc" }}>
                <TouchableOpacity>
                    {/* <View style={{flexDirection:"row",alignItems:"center"}}>
                    <Share stroke={"black"}/>
                    <Text style={{ textAlign: "center",fontFamily:"Poppins-Regular",fontWeight:"bold",fontSize:15 }}>Share</Text>
                    </View> */}
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Logout stroke={"black"} />
                        <TouchableOpacity onPress={logOut}><Text style={{ fontFamily: "Poppins-Regular", fontWeight: "bold", fontSize: 15 ,paddingStart:15}}>Log Out</Text></TouchableOpacity>
                    </View>
                </TouchableOpacity>
            </View>
        </View>

    );
};


export default CustomDrawer