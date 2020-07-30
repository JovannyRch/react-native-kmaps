import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'


const BoxGrid = ({ value, index, onPress, total }) => {

    const getStyle = (value) => {
        if (value == 1) {
            return { ...styles.box, backgroundColor: '#5271FF' };
        }
        if (value == "X") {
            return { ...styles.box, backgroundColor: '#ecff77' }
        }
        return styles.box;
    }

    const getStyleText = (value) => {
        if (value == "X") {
            return { ...styles.valueText, color: "grey" };
        }
        return styles.valueText;
    }

    const parseBin = (number) => {
        let bin = number.toString(2);
        while (bin.length < total) {
            bin = "0" + bin;
        }
        return bin;
    }

    return (
        <View style={getStyle(value)}>
            <TouchableOpacity style={styles.touch} onPress={() => onPress(index)}>
                <View style={styles.containerText} >
                    <Text style={styles.indexText}>
                        {parseBin(index)} - {index}
                    </Text>
                    <Text style={getStyleText(value)}>
                        {value}
                    </Text>
                </View>
            </TouchableOpacity>
        </View>

    )
}


const styles = StyleSheet.create({
    valueText: {
        fontSize: 60,
        textAlign: 'center',
        color: 'white',

    },
    box: {
        flex: 1,
        height: 180,
        borderWidth: 0.5,
        borderColor: 'black',
        justifyContent: 'center',
        margin: 5,
        backgroundColor: '#C7D0D8',
        borderRadius: 10,
    },
    touch: { display: 'flex', flex: 1, justifyContent: 'center', },
    containerText: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        alignSelf: 'center',
    },
    indexText: {
        textAlign: 'left',
    }
})
export default BoxGrid;