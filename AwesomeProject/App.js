import React, {useState} from 'react'
import {View, Text, FlatList, StyleSheet, Alert} from 'react-native'
import Header from './components/Header'
import ListItem from './components/ListItem'
import AddItem from './components/AddItem'

let counter = 4
const App = () => {

    const [items, setItems] = useState([
        {id: 1, text: 'Task 1'},
        {id: 2, text: 'Task 2'},
        {id: 3, text: 'Task 3'}
    ])

    const deleteItem = (id) =>{
        setItems(prevItems => {

            return prevItems.filter(item => item.id != id)
        })
    }

    const addItem =(text) =>{
        if(!text){
            Alert.alert("Error", "Please enter text", [(text: "ok")])
        }else{
            setItems(prevItems => {
                counter = counter + 1
                return[{id: counter, text}, ...prevItems]
            })
        }

    }


    return (
        <View>
            <Header />
            <AddItem addItem={addItem}/>
            <FlatList data={items} renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem}/>} />
        </View>
    )
}

const styles = StyleSheet.create({

})
export default App;
