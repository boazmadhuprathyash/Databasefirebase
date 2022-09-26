import React, { useEffect, useState } from "react";
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import database from '@react-native-firebase/database'

let itemRef = database().ref("/Items")

export default function Home() {
    const [array, setArray] = useState([])

    useEffect(() => {
        itemRef.on("value", snapshot => {
            let data = snapshot.val();
            const items = Object.values('data')
            console.log(items)
            setArray(items)
        })
    }, [])

    return (
        <View style={styles.container}>
            {
                (array.length > 0) ?
                    array.map((item, index) => {
                        return (
                            <Text style={styles.itemText}>{item.name}</Text>
                        )
                    })
                    :
                    <Text style={styles.text}>No items</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'blue',
        justifyContent: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'yellow'
    },
    itemText: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})