import React, {useState} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, Button, TextInput} from 'react-native'

const AddItem = ({addItem}) => {
const[text, setText] = useState('')

const onChange = (text) => setText(text)
    return (
        <View>
            <TextInput placeholder="Add Task" style={styles.input} onChangeText={onChange}/>
            <TouchableOpacity style={styles.button} onPress={() => addItem(text)}>
                <Text style={styles.btnText}> Add Task</Text>
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    input: {
        height: 60,
        padding: 8,
        fontSize: 16
    },
    button: {
        backgroundColor: "#c2bad8",
        padding: 9,
        margin: 5
    },
    btnText:{
        color: 'darkslateblue',
        fontSize: 20,
        textAlign: 'center'
    }
})
export default AddItem;
