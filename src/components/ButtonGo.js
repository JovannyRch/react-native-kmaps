import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ButtonGo = ({ onPress }) => {


    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.text}>Reducir</Text>
            </TouchableOpacity>
        </View>
    );
}


const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
    },
    button: {
        backgroundColor: "#3880ff",
        borderRadius: 10,
        width: 150,
        padding: 10,
    },
    container: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    }
})

export default ButtonGo;