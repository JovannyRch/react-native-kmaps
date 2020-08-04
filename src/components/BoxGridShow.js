import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'


const BoxGridShow = ({ groups, values, index }) => {
    const getStyle = (value) => {

        if (value == 1) {
            return { ...styles.box, backgroundColor: '#5271FF' };
        }
        if (value == "X") {
            return { ...styles.box, backgroundColor: '#9ee493' }
        }
        return styles.box;
    }
    let colors = [
        "#f97068",
        "#d1d646",
        "#c1ff9b",
        "#ab87ff",
        "#7fc809",
        "#7ea172",
        "#f5ffc6",
        "#ebbe9b",
        "#b14669",
        "#a5e6ba",
        "#5b2a86",
        "#e84855",
        "#1b998b",
        "#fffd82",
        "#edf2ef",
    ];
    let groupsOfBox = [];
    let val = 0;
    for (const i in groups) {
        const g = groups[i];
        let iG = g.indexOf(index);

        if (iG >= 0) {
            groupsOfBox.push(colors[i]);
        }
    }
    if (groupsOfBox.length >= 1) val = 1;

    const cajita = (color, index) => {
        return <>
            <View style={{ ...styles.cajita, backgroundColor: color }} key={`${new Date()}${index}`}>

            </View>
        </>
    }


    return (
        <View style={{ ...getStyle(val) }}>
            {/*  <View>
                <Text style={styles.valueText}>{val}</Text>
            </View> */}
            <View>
                {
                    groupsOfBox.map((group, index) => cajita(group, index))
                }
            </View>
        </View >

    )
}


const styles = StyleSheet.create({
    cajita: {
        height: 25,
        width: 25,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "black",
        marginLeft: 2,
        marginTop: 2,
    },
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
        flexDirection: 'row',
        justifyContent: 'flex-start',
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