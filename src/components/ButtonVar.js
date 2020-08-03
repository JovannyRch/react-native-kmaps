import React from 'react'
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native'
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
        width: Dimensions.get("window").width * 0.6,
        fontSize: 20,
        marginBottom: 15,
        borderRadius: 20,
        borderColor: "#3880ff",
        borderWidth: 2,
        height: 50,
        justifyContent: 'center',
    },
    text: {
        color: '#3880ff',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: '100',
    }
})
