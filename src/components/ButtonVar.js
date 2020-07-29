import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

const ButtonVar = ({ text, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default ButtonVar;
const styles = StyleSheet.create({
    button: {
        width: 180,
        fontSize: 20,
        backgroundColor: '#3880ff',
        marginBottom: 15,
        borderRadius: 20,
        height: 50,
        justifyContent: 'center',
    },
    text: {
        color: 'white',
        fontSize: 25,
        textAlign: 'center',
    }
})
