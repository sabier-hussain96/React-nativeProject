import { View, Text, TextInput, TouchableOpacity, ScrollView, Modal } from 'react-native'
import React, { useState, useEffect } from 'react'
import { HomeStyles } from '../../Styles/GlobalStyles'
import AddIcon from '../../assets/icons/AddIcon'
import Complete from '../../assets/icons/Complete'
import AsyncStorage from '@react-native-async-storage/async-storage'
// import { color } from 'react-native-reanimated'
// import { useNavigation } from '@react-navigation/native'
// import { screenNames } from '../constatnts/constants'




const Notes = () => {
  const [serchText, setSearch] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [edit, setEdit] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDesc] = useState("");
  const [notes, setNotes] = useState([

  ]);
  const [filteredNotes, SetFilteredNotes] = useState([])
  const [editTitle, setEditTitle] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [editId, setEditId] = useState("");

  useEffect(() => {

    const findNotes = async () => {
      const result = await AsyncStorage.getItem('notesArray');
      if (result !== null) {
        console.log(result)
        let resultant = JSON.parse(result)
        setNotes(resultant)
      }
    }
    findNotes();
  }, [])


  const addNotes =async () => {
    if (title !== "" || description !== "") {
      const newarr = {
        id: Math.random(),
        title: title,
        desc: description
      };
      // setNotes([...notes, newarr]);
      notes.push(newarr);
      SetFilteredNotes([...filteredNotes, newarr]);
     await AsyncStorage.setItem('notesArray',JSON.stringify(notes))
      console.log(filteredNotes)
      setTitle("");
      setDesc("");
      setModalVisible(false);
    } else {
      alert("Title field or description cannot be empty")
    }


  }


  const createNewNotes = () => {
    setModalVisible(true);
  }

  const editNotes = (e) => {
    setEdit(true)
    const editedId = notes.find(item => item.id == e);
    setEditTitle(editedId.title)
    setEditDesc(editedId.desc)
    setEditId(editedId.id)
  }

  const onDelete = async(e) => {
    let newArray = []
    const newFilterTodo = notes.filter(item => item.id != e);
    setNotes(newFilterTodo)
    newArray.push(newFilterTodo)
    // Updating local storage
    await AsyncStorage.setItem(
      'notesArray',
      JSON.stringify(newFilterTodo),
     async () => {
      await AsyncStorage.mergeItem(
          'notesArray',
          JSON.stringify(newFilterTodo), );
      }
    );
  
 
    SetFilteredNotes(newFilterTodo)
    console.log(newFilterTodo)
  }

  const editNewNotes =  async() => {
    const editArray = {
      id: editId,
      title: editTitle,
      desc: editDesc
    };
    const editIndex = notes.findIndex(item => item.id === editId);
    notes[editIndex] = editArray;

    await AsyncStorage.setItem(
      'notesArray',
      JSON.stringify(notes),
     async () => {
      await AsyncStorage.mergeItem(
          'notesArray',
          JSON.stringify(notes), );
      }
    );
  
    filteredNotes[editIndex] = editArray;
    setEdit(false);
  }

  const searchNotes = (data) => {
    console.log("entered function search")
    const searchText = serchText.toUpperCase();
    if (searchText !== "") {
      console.log("]11111 ")
      const matchedArray = [];
      for (let i = 0; i < notes.length; i++) {
        console.log("22222")
        const searchTitle = notes[i].title.toUpperCase();
        console.log("3333")
        if (searchTitle.toUpperCase().lastIndexOf(searchText, 0) === 0) {
          console.log("matched string searched")
          matchedArray.push(notes[i]);
        }
      }
      setNotes(matchedArray)
    } else {
      setNotes(filteredNotes)
    }

  }

  return (
    <View style={[HomeStyles.modalStyles, { flex: 1 }]}>
      <ScrollView>
        <TextInput style={[HomeStyles.searchBar, { color: 'black' }]} placeholder='Search here' onChangeText={(text) => setSearch(text)} onBlur={(data) => searchNotes(data)}></TextInput>
        {notes.length !== 0 ?
          <View style={{}}>
            {notes.map((item) => (
              <View key={item.id}>
                <TouchableOpacity onPress={() => editNotes(item.id)}>
                  <View style={HomeStyles.noteList} >

                    <Text style={{ fontSize: 15, fontFamily: "Poppins-BoldItalic" }} >{item.title}</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                      <Text>{item.desc}</Text>
                      <Text style={{ color: "red", fontFamily: "Poppins-Bold", fontSize: 16, marginTop: -10, marginStart: 5 }} onPress={() => onDelete(item.id)}>Delete</Text>
                    </View>

                  </View>
                </TouchableOpacity>
              </View>


            ))}

          </View>

          :
          <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 200 }}>
            <Text>Add Notes</Text>
          </View>}

      </ScrollView>

      {/* Floating Add button  */}

      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <TouchableOpacity onPress={createNewNotes}>
          <View style={[HomeStyles.newNote, { backgroundColor: "orange", flexDirection: "row", justifyContent: "center", padding: 17 }]}>
            <AddIcon stroke={"#FFFFFF"} />
          </View>
        </TouchableOpacity>
      </View>

      {/* Add note modal */}
      <Modal visible={modalVisible} >
        <View style={{ flex: 1 }}>
          <ScrollView>
            <View style={{ flex: 1, alignContent: "center" }}>
              <Text style={{ fontSize: 20, fontFamily: "Poppins-Bold", textAlign: "center", marginTop: 20, marginBottom: 20, color: "#000000" }}>Add New Notes</Text>
              <View style={HomeStyles.modalViewStyles} >
                <View>
                  <Text style={{ fontSize: 15, marginLeft: 13, fontFamily: "Poppins-Regular", color: "black", marginBottom: -20 }}>Title:</Text>
                  <TextInput style={[HomeStyles.noteTitle, { borderBottomWidth: 1 }]} value={title} onChangeText={text => setTitle(text)} ></TextInput>
                </View>
                <View>
                  <Text style={{ fontSize: 15, marginLeft: 13, fontFamily: "Poppins-Regular", color: "black", marginBottom: -20 }}>Description:</Text>
                  <TextInput style={[HomeStyles.noteDesc, {}]} placeholder='Start typing...' multiline={true} value={description} onChangeText={text => setDesc(text)} numberOfLines={1} scrollEnabled={false}></TextInput>
                </View>
              </View>
            </View>
          </ScrollView>
          {title !== "" || description !== "" ? (<View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
            <TouchableOpacity onPress={addNotes}>
              <View style={[HomeStyles.newNote, { backgroundColor: "orange", flexDirection: "row", justifyContent: "center", padding: 17 }]}>
                <Complete stroke={"#FFFFFF"} />
              </View>
            </TouchableOpacity>
          </View>) : null}
        </View>
      </Modal>
      {/* Edit Notes Modal */}

      <Modal visible={edit} animationType="slide" >
        <ScrollView>
          <View style={{ flex: 1, alignContent: "center" }}>
            <Text style={{ fontSize: 20, fontFamily: "Poppins-Bold", textAlign: "center", marginTop: 20, marginBottom: 20, color: "#000000" }}>Edit Notes</Text>
            <View style={HomeStyles.modalViewStyles}>
              <View>
                <Text style={{ fontSize: 15, marginLeft: 13, fontFamily: "Poppins-Regular", color: "black", marginBottom: -20 }}>Title:</Text>
                <TextInput style={[HomeStyles.noteTitle, { borderBottomWidth: 1 }]} placeholder="Title" value={editTitle} onChangeText={text => setEditTitle(text)} ></TextInput>
              </View>
              <View>
                <Text style={{ fontSize: 15, marginLeft: 13, fontFamily: "Poppins-Regular", color: "black", marginBottom: -20 }}>Description:</Text>
                <TextInput style={[HomeStyles.noteTitle]} placeholder="Title" value={editDesc} onChangeText={text => setEditDesc(text)} ></TextInput>
              </View>
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