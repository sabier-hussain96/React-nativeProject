// import { View, Text, TouchableOpacity,ScrollView } from 'react-native'
// import React, { useState,useEffect } from 'react'
// import { TextInput } from 'react-native-gesture-handler'
// import { HomeStyles } from '../../Styles/GlobalStyles'
// import Complete from '../../assets/icons/Complete'
// import { useNavigation } from '@react-navigation/native'
// import { screenNames } from '../constatnts/constants'

// const AddNotes = () => {

//    const [title,setTitle] = useState("");
//    const [description, setDesc] = useState("");
//     const [notes, setNotes] = useState([ ]);
 
    
  
//    const addNotes = () => {
//     console.log(notes);
//    const newarr = {
//         id: Math.random(),
//         title: title,
//         desc: description
//    };
//    console.log(newarr);
//     setNotes([...notes, newarr]);
//     setTitle("");
//     setDesc("");
//     setModalVisible(false);
//    }

//   return (
//     <View style={{flex:1}}>
//         <ScrollView>
//         <TextInput style={[HomeStyles.noteTitle,{borderBottomWidth:1}]} placeholder="Title" value={title} onChangeText={text => setTitle(text)} ></TextInput>
//         <TextInput style={[HomeStyles.noteTitle,{}]} placeholder='Start typing...' multiline={true} value={description} onChangeText={text => setDesc(text)}></TextInput>
//         </ScrollView>
//         <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
//             <TouchableOpacity onPress={addNotes}>
//                 <View style={[HomeStyles.newNote,{backgroundColor: "orange", flexDirection: "row", justifyContent: "center", padding: 17 }]}>
//                     <Complete stroke={"#FFFFFF"}/>
//                 </View>
//             </TouchableOpacity>
//         </View>
//     </View>
//   )
// }

// export default AddNotes