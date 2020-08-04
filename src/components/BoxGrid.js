import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'


const BoxGrid = ({ values, index, onPress, total }) => {

    const getStyle = (value) => {
        if (value == 1) {
            return { ...styles.box, backgroundColor: '#5271FF' };
        }
        if (value == "X") {
            return { ...styles.box, backgroundColor: '#9ee493' }
        }
        return styles.box;
    }

    const getStyleText = (value) => {

        return styles.valueText;
    }

    const parseBin = (number) => {
        let bin = number.toString(2);
        while (bin.length < total) {
            bin = "0" + bin;
        }
        return bin;
    }

    const getIndexStyle = () => {
        let style = { ...styles.indexStyle };
        if (total == 5) style = { ...style, fontSize: 10 };
        if (values[index] == 1) style = { ...style, color: 'white' };

        return style;
    }

    return (
        <View style={{ ...getStyle(values[index]) }}>
            <TouchableOpacity style={styles.touch} onPress={() => onPress(index)}>
                <View style={styles.containerText} >
                    <Text style={getIndexStyle()}>
                        {
                            total != 5 ? `${parseBin(index)} - ${index} ` : index
                        }
                    </Text>
                    <Text style={getStyleText(values[index])}>
                        {values[index]}
                    </Text>
                </View>
            </TouchableOpacity>
        </View >

    )
}


const styles = StyleSheet.create({
    valueText: {
        fontSize: 40,
        textAlign: 'center',
        color: 'white',
    },
    box: {
        flex: 1,
        height: 100,
        borderWidth: 0.5,
        borderColor: 'black',
        justifyContent: 'center',
        margin: 3,
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