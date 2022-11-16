import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'
import React, { useState } from 'react'
import { HomeStyles } from '../../Styles/GlobalStyles';

const TodoList = () => {

  const [textInput, setTextInput] = React.useState('');
  const [todo, setTodos] = useState([ ]);

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

  const addTodo = () => {
    if (textInput == "") {
      alert("Cannot add an empty list")

    } else {
      const newTodo = {
        id: Math.random(),
        task: textInput
      };
      todo.push(newTodo)
      // setTodos([...todo, newTodo]);
      console.log(todo)
      setTextInput('');
    }

  }

  const deleteTodo = (todoId) => {
    const newFilterTodo = todo.filter(item => item.id != todoId);
    setTodos(newFilterTodo);
  }

  return (
    <View>
      <Text style={HomeStyles.todoHeading} >To Do List</Text>
      <View style={{ flexDirection: "row" }}>
        <TextInput style={{
          height: 50, width: 250, margin: 10, borderColor: "gray", borderColor: 'gray',
          borderWidth: 1, padding: 10
        }} placeholder='Add Todo Item...' value={textInput} onChangeText={text => setTextInput(text)}></TextInput>
        <TouchableOpacity style={{ backgroundColor: "green", height: 50, width: 100, margin: 10 }} onPress={addTodo}>
          <Text style={{ textAlign: "center", marginTop: 15, fontWeight: "bold" }}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList data={todo} renderItem={({ item }) => <ListItem todo={item} />} />
    </View>
  )
}

export default TodoList