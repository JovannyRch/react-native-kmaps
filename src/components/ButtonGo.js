import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import ButtonVar from './ButtonVar';

const ButtonGo = ({ onPress }) => {


    return (
        <View style={styles.container}>
            <ButtonVar text={"Suma de productos"} onPress={onPress} />
            <ButtonVar text={"Producto de sumas"} onPress={onPress} />

        </View>
    );
}


const styles = StyleSheet.create({
    text: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: "#2f4858",
        borderRadius: 100,
        width: Dimensions.get("window").width * 0.5,
        height: 50,
        justifyContent: 'center',
        padding: 5,
        marginBottom: 13,
    },
    container: {
        marginTop: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        left: Dimensions.get("window").width * 0.25,
    }
})

export default ButtonGo;