import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import BoxGridShow from '../BoxGridShow'
import BoxGrid from '../BoxGrid'
import variablesStyles from './styles'

export default function TwoVariablesShow({ values, groups }) {
    return (
        <>
            <View style={variablesStyles.row}>
                <View style={variablesStyles.lefColumn}><Text style={variablesStyles.varText}></Text></View>
                <View style={variablesStyles.vars}><Text style={variablesStyles.varText}>A'</Text></View>
                <View style={variablesStyles.vars}><Text style={variablesStyles.varText}>A</Text></View>
            </View>
            <View style={variablesStyles.row}>
                <View style={variablesStyles.lefColumn} >
                    <Text style={variablesStyles.varText}>B'</Text>
                </View>
                <BoxGridShow values={values} groups={groups} index={0} />
                <BoxGridShow values={values} groups={groups} index={1} />


            </View>
            <View style={variablesStyles.row}>
                <View style={variablesStyles.lefColumn} ><Text style={variablesStyles.varText}>B</Text></View>
                <BoxGridShow values={values} groups={groups} index={2} />
                <BoxGridShow values={values} groups={groups} index={3} />
            </View>
        </>
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
