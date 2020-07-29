import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'

const BoxGrid = ({ value, index, onPress }) => {
    return (
        <TouchableOpacity style={styles.box} onPress={() => onPress(index)}>
            <View>
                <Text style={styles.valueText}>
                    {value}
                </Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    valueText: {
        fontSize: 40,
        textAlign: 'center',
    },
    box: {
        flex: 1,
        height: 180,
        borderWidth: 2,
        borderColor: 'black',
        justifyContent: 'center'
    },
})
export default BoxGrid;