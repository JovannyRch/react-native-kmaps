import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'


const BoxGridShow = ({ groups, values, index }) => {

    let colors = [
        "#f5ffc6",
        "#b4e1ff",
        "#c1ff9b",
        "#ab87ff",
        "#c84c09",
        "#7ea172",
        "#ebbe9b",
        "#8a3033",
        "#a5e6ba",
        "#5b2a86",
        "#e84855",
        "#1b998b",
        "#fffd82",
        "#edf2ef",
    ];
    let groupsOfBox = [];
    for (const i in groups) {
        const g = groups[i];
        let iG = g.indexOf(index);

        if (iG >= 0) {
            groupsOfBox.push(colors[i]);
        }
    }

    const cajita = (color) => {
        return <>
            <View style={{ height: 10, width: 10, backgroundColor: color }}>

            </View>
        </>
    }


    return (
        <View style={styles.box}>
            <View style={styles.containerText} >
                <Text >
                    {index.toString()}
                    {
                        groupsOfBox.map((group) => cajita(group))
                    }
                </Text>
                <Text >

                </Text>
            </View>
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
export default BoxGridShow;