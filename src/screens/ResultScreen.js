import React from 'react'
import { View, Text } from 'react-native'
import { Kmap } from '../clases/Kmap';

const ResultScreen = ({ route }) => {

    const { mins, dc } = route.params;
    const calculator = new Kmap(mins, dc, "ABCDEFGHIJKLMNOPQRSTUVWXY");
    const resultado = calculator.suma;
    return (
        <View>
            <Text>{resultado}</Text>
        </View>
    )
}

export default ResultScreen;
