import { View, Text, TextInput, TouchableOpacity, ScrollView, Modal } from 'react-native'
import React, { useState } from 'react'
import { HomeStyles } from '../../Styles/GlobalStyles'
import AddIcon from '../../assets/icons/AddIcon'
import Complete from '../../assets/icons/Complete'
import { useNavigation } from '@react-navigation/native'
import { screenNames } from '../constatnts/constants'
import AddNotes from './AddNotes'



const Notes = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const [edit, setEdit] = useState(false)

  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [notes, setNotes] = useState([

  ]);

  const [editTitle, setEditTitle] = useState("")
  const [editDesc, setEditDesc] = useState("")
  const [editId, setEditId] = useState("")

  const addNotes = () => {

    console.log(notes);
    const newarr = {
      id: Math.random(),
      title: title,
      desc: description
    };
    // console.log(newarr);
    setNotes([...notes, newarr]);
    console.log(notes)

    setTitle("");
    setDesc("");
    setModalVisible(false);
  }


  const createNewNotes = () => {
    setModalVisible(true);
  }

  const editNotes = (e) => {
    console.log(e)
    console.log("Touchable notes pressed");
    setEdit(true)
    const hello = notes.find(item => item.id == e);
    console.log(hello)
    setEditTitle(hello.title)
    setEditDesc(hello.desc)
    setEditId(hello.id)

    // navigation.navigate(screenNames.EDIT_NOTE)

  }

  const onDelete = (e) => {
    const newFilterTodo = notes.filter(item => item.id != e);
    setNotes(newFilterTodo)
  }

  const editNewNotes = () => {
    const editArray = {
      id: editId,
      title: editTitle,
      desc: editDesc
    };
    const hello = notes.findIndex(item => item.id === editId);
    notes[hello]=editArray;
    console.log(editArray)
    console.log(notes)
    setEdit(false);
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <TextInput style={HomeStyles.searchBar} placeholder="type here..."></TextInput>

        {notes.length !== 0 ?

          <View style={{}}>
            {notes.map((item) => (
              <TouchableOpacity onPress={() => editNotes(item.id)}>
                <View style={HomeStyles.noteList} >

                  <Text style={{ fontSize: 15, fontFamily: "Poppins-BoldItalic" }} >{item.title.toUpperCase()}</Text>
                  <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                    <Text>{item.desc}</Text>
                    <Text style={{ color: "red", fontFamily: "Poppins-Regular", fontSize: 15, marginTop: -10 }} onPress={() => onDelete(item.id)}>delete</Text>
                  </View>

                </View>
              </TouchableOpacity>

            ))}

          </View>

          :
          <View>
            <Text>Empty notes Cannot be added </Text>
          </View>}

      </ScrollView>

      {/* Floating button dummy */}
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <TouchableOpacity onPress={createNewNotes}>
          <View style={[HomeStyles.newNote, { backgroundColor: "orange", flexDirection: "row", justifyContent: "center", padding: 17 }]}>
            <AddIcon stroke={"#FFFFFF"} />
          </View>
        </TouchableOpacity>
      </View>

      <Modal visible={modalVisible}>
        <View style={{ flex: 1 }}>
          <ScrollView>
            <TextInput style={[HomeStyles.noteTitle, { borderBottomWidth: 1 }]} placeholder="Title" value={title} onChangeText={text => setTitle(text)} ></TextInput>
            <TextInput style={[HomeStyles.noteTitle, {}]} placeholder='Start typing...' multiline={true} value={description} onChangeText={text => setDesc(text)}></TextInput>
          </ScrollView>
          <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <TouchableOpacity onPress={addNotes}>
              <View style={[HomeStyles.newNote, { backgroundColor: "orange", flexDirection: "row", justifyContent: "center", padding: 17 }]}>
                <Complete stroke={"#FFFFFF"} />
              </View>
            </TouchableOpacity>
          </View>
        </View>

      </Modal>

      {/* Edit Modal */}
      <Modal visible={edit}>
        <ScrollView>
          <View style={{ flex: 1, alignContent: "center" }}>
            <Text style={{ fontSize: 20, fontFamily: "Poppins-Bold", textAlign: "center", marginTop: 20, marginBottom: 20, color: "#000000" }}>This is the Edit Page</Text>
            <View>
              <Text style={{fontSize:15,marginLeft:13,fontFamily:"Poppins-Regular",color:"black",marginBottom:-20}}>Title:</Text>
              <TextInput style={[HomeStyles.noteTitle, { borderBottomWidth: 1 }]} placeholder="Title" value={editTitle} onChangeText={text => setEditTitle(text)} ></TextInput>
            </View>
            <View>
              <Text style={{fontSize:15,marginLeft:13,fontFamily:"Poppins-Regular",color:"black",marginBottom:-20}}>Description:</Text>
              <TextInput style={[HomeStyles.noteTitle]} placeholder="Title" value={editDesc} onChangeText={text => setEditDesc(text)} ></TextInput>
            </View>

          </View>
        </ScrollView>
        <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
          <TouchableOpacity onPress={editNewNotes}>
            <View style={[HomeStyles.newNote, { backgroundColor: "orange", flexDirection: "row", justifyContent: "center", padding: 17 }]}>
              <Complete stroke={"#FFFFFF"} />
            </View>
          </TouchableOpacity>
        </View>

      </Modal>



    </View>
  )
}


export default Notes