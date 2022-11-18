import { StyleSheet } from "react-native"
export const HomeStyles = StyleSheet.create({
    textInput: {
        width: 140,
        height: 40,
        borderRadius: 30,
        backgroundColor: "#3d3d3d",
        marginBottom: 20,
        textAlign: "center",
        marginStart: 40,
        marginTop: 10,
        color: "#3d3d3d"

    },
    row: {
        display: "flex",
        flexDirection: "row",

    },
    dummyButton: {
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        width: 80,
        height: 30,
        padding: 5,
        backgroundColor: 'grey',
        textAlign: 'center'
    },
    clearButton: {
        width: 250,
        height: 40,
        borderRadius: 30,
        backgroundColor: "purple",
        marginBottom: 20,
        textAlign: "center",
        marginStart: 80,
        marginTop: 10,
        color: "#3d3d3d"
    },
    todoList: {
        width: 250,
        height: 40,
        borderRadius: 30,
        backgroundColor: "green",
        marginBottom: 20,
        textAlign: "center",
        marginStart: 80,
        marginTop: 10,
        color: "#3d3d3d"
    },
    todoHeading: {
        marginTop: 20,
        fontFamily: "Poppins-BoldItalic",
        fontSize: 20,
        textAlign: "center",
        color: "#3d3d3d"
    },
    listItem: {
        padding: 20,
        backgroundColor: "white",
        flexDirection: "row",
        elevation: 12,
        borderRadius: 5,
        marginVertical: 10,
        marginStart: 20,
        marginEnd:14,
        marginTop:20
    },
    loginInpText: {
        borderColor: "blue",
        borderWidth: 1,
        padding: 10,
        marginTop: 30,
        color: "#3d3d3d",

    },
    loginBtn: {
        backgroundColor: "#09E38D",
        borderRadius: 6,
        elevation: 3,
        padding: 10,
        marginTop: 30,
        color: "#3d3d3d"



    },
    registerBtn: {
        backgroundColor: "#42B62B",
        borderRadius: 6,
        elevation: 3,
        padding: 10,
        marginTop: 20,

    },
    searchBar: {
        borderRadius: 30,
        borderWidth: 1,
        paddingStart: 20,
        paddingEnd: 20,
        margin: 10,
        fontFamily:"Poppins-Regular",
        fontSize:15,
        
    },
    newNote: {
        height: 70,
        width: 70,
        borderWidth: 0.7,
        borderRadius: 50,
        marginRight: 20,
        marginBottom: 30
    },
    noteTitle: {
        width: "auto",
        height: 50,
        margin: 10,
        color: "#3d3d3d"
    },
    noteDesc: {
        width: "auto",
        height: 100,
        margin: 10,
        color: "#3d3d3d"
    },
    noteList: {
        width: "auto",
        height: "auto",
        elevation: 5,
        borderRadius: 6,
        backgroundColor: "#F9F06E",
        padding: 10,
        margin: 10
    },
    modalStyles:{
        height:50,
        width:'auto'
    },
    modalViewStyles:{
        borderWidth:2,
        borderColor:"orange",
        borderRadius:20,
        margin:10,
        paddingTop:15,
        height:350

    }


})