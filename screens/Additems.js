import React, { useState } from "react";
import database from '@react-native-firebase/database'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight
} from 'react-native'

let addItem = (item) => {
    database().ref('/Items').push({
        name: item
    })
}

export default function Home() {
    const [name, setName] = useState("")

    const handleSubmit = () => {
        addItem(name)
        setName("")
        alert("Item added successfully")

    }

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Add Item</Text>
            <TextInput style={styles.inputView} value={name} onChangeText={(text) => setName(text)} />
            <TouchableHighlight style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Add</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'red'
    },
    inputView: {
        width: '50%',
        height: 50,
        borderWidth: 2,
        borderColor: 'black',
        backgroundColor: 'white'
    },
    button: {
        width: '50%',
        height: 50,
        borderRadius: 10,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
})