import React from 'react'
import { View, Text } from 'react-native'
import BoxGrid from '../BoxGrid'
import variablesStyles from './styles'

export default function TwoVariables({ onPress, values, vars }) {
    return (
        <>
            <View style={variablesStyles.row}>
                <View style={variablesStyles.lefColumn}><Text style={variablesStyles.varText}></Text></View>
                <View style={variablesStyles.vars}><Text style={variablesStyles.varText}>A'</Text></View>
                <View style={variablesStyles.vars}><Text style={variablesStyles.varText}>A</Text></View>
            </View>
            <View style={variablesStyles.row}>
                <View style={variablesStyles.lefColumn} >
                    <Text style={variablesStyles.varText}>B'</Text></View>
                <BoxGrid total={vars} values={values} onPress={onPress} index={0} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={1} />

            </View>
            <View style={variablesStyles.row}>
                <View style={variablesStyles.lefColumn} ><Text style={variablesStyles.varText}>B</Text></View>
                <BoxGrid total={vars} values={values} onPress={onPress} index={2} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={3} />
            </View>
        </>
    )
}
