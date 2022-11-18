import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useState,useEffect } from 'react'
import { HomeStyles } from '../../Styles/GlobalStyles';
import AsyncStorage from '@react-native-async-storage/async-storage'

const TodoList = () => {
  const [textInput, setTextInput] = React.useState('');
  const [todo, setTodos] = useState([ ]);

  useEffect(() => {

    const findTodos = async () => {
      const result = await AsyncStorage.getItem('todosArray');
      if (result !== null) {
        let resultant = JSON.parse(result)
        setTodos(resultant)
      }
    }
    findTodos();
  }, [])


  const ListItem = ({ todo }) => {
    return <View style={HomeStyles.listItem}>
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: "bold", fontSize: 15 }}>{todo?.task}</Text>
      </View>
      <TouchableOpacity onPress={() => deleteTodo(todo?.id)}>
        <Text style={{ color: "red" }}>Delete</Text>
      </TouchableOpacity>
    </View>;
  }

  const addTodo = async() => {
    if (textInput == "") {
      alert("Cannot add an empty list")

    } else {
      const newTodo = {
        id: Math.random(),
        task: textInput
      };
      todo.push(newTodo)
      await AsyncStorage.setItem('todosArray', JSON.stringify(todo));
      // setTodos([...todo, newTodo]);
      setTextInput('');
    }

  }

  const deleteTodo = async(todoId) => {
    const newFilterTodo = todo.filter(item => item.id != todoId);
    await AsyncStorage.setItem('todosArray', JSON.stringify(newFilterTodo));
    setTodos(newFilterTodo);
  }

  return (
    <View>
      <Text style={HomeStyles.todoHeading} >To Do List</Text>
      <View style={{ flexDirection: "row"}}>
        <TextInput style={{
          height: 50, width: 250, marginStart: 20, marginTop:15, borderColor: "gray",
          borderWidth: 1, padding: 10,color:'black',fontFamily:"Poppins-Regular"
        }} placeholder='Add todo' value={textInput} onChangeText={text => setTextInput(text)}></TextInput>
        <TouchableOpacity style={{ backgroundColor: "#37F520", height: 50, width: 100, marginStart: 10, marginTop:15 }} onPress={addTodo}>
          <Text style={{ textAlign: "center", marginTop: 15, fontWeight: "bold" }}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList data={todo} renderItem={({ item }) => <ListItem todo={item} />} />
    </View>
  )
}

export default TodoList