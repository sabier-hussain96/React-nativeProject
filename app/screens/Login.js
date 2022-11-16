import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react';
import { HomeStyles } from '../../Styles/GlobalStyles';
import Lottie from 'lottie-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import { screenNames } from '../constatnts/constants';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
    const navigation = useNavigation();
    const [userEmail, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const emailValidation = () => {
        const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
        if (strongRegex.test(userEmail)) {

        } else {
            alert("Please check the input")
        }
    }

    const passwordValidation = () => {
        const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        if (strongRegex.test(password)) {

        } else {
            alert("Please check the Password entered")
        }
    }

    const logIn = () => {
        try{
         
            if (userEmail != "" && password != "") {
            const token = Math.random();
            AsyncStorage.setItem('userToken', token.toString());
                navigation.navigate(screenNames.HOME_SCREEN);
            } else {
                alert("Please Enter the Username and Password")
            }
        }
        catch(err){

        }
       
    }

    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", padding: 20 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Lottie source={require("../../assets/fonts/login.json")} autoPlay loop style={{ height: 300, width: 300 }} />
                <Text style={{
                    fontFamily: "poppins-regular",
                    fontSize: 30,color:"#3d3d3d",
                    fontWeight: "bold",
                }}>Notebook</Text>
                <Text style={{
                    fontFamily: "poppins-regular",color:"#3d3d3d",
                    fontSize: 20, marginTop: 10
                }}>A notebook (also known as a notepad, writing pad, drawing pad, or legal pad) is a book or stack of paper pages that are often ruled and used for purposes such as note-taking, journaling or other writing, drawing, or scrapbooking.</Text>

                <TextInput placeholder='Email address' style={HomeStyles.loginInpText} onChangeText={email => setEmail(email)} onBlur={emailValidation}></TextInput>
                <TextInput placeholder='Password' style={HomeStyles.loginInpText} onChangeText={psw => setPassword(psw)} onBlur={passwordValidation} secureTextEntry={true} ></TextInput>

                <TouchableOpacity style={HomeStyles.loginBtn} onPress={logIn}><Text style={{ textAlign: "center",fontFamily:"Poppins-Regular",fontWeight:"bold",fontSize:20 }}>Log In</Text></TouchableOpacity>

                {/* <Text style={{ textAlign: "center", marginTop: 20 }}>---- OR ----</Text>
                <TouchableOpacity style={HomeStyles.registerBtn}><Text style={{ textAlign: "center" }} >Create an new account</Text></TouchableOpacity> */}
            </ScrollView>

        </SafeAreaView>
    )
}

export default Login