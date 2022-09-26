import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Button
} from 'react-native';

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Button title="Add item" onPress={() => navigation.navigate('Additems')} />
            <Button title="List item" onPress={() => navigation.navigate('List')} />
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white',
        alignItems: 'center'
    }
})