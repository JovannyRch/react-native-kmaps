import React from 'react'
import { View, Text } from 'react-native'
import BoxGrid from '../BoxGrid'
import variablesStyles from './styles'

export default function TreeVariablesShow({ onPress, values, vars, groups = [], colors = [] }) {

    const getStyle = () => {
        if (groups.length) {

        }
        return {};
    }

    return (
        <>
            <View style={variablesStyles.row}>
                <View style={variablesStyles.lefColumn}><Text style={variablesStyles.varText}></Text></View>
                <View style={variablesStyles.vars}><Text style={variablesStyles.varText}>B'C'</Text></View>
                <View style={variablesStyles.vars}><Text style={variablesStyles.varText}>B'C</Text></View>
                <View style={variablesStyles.vars}><Text style={variablesStyles.varText}>BC</Text></View>
                <View style={variablesStyles.vars}><Text style={variablesStyles.varText}>BC'</Text></View>
            </View>
            <View style={variablesStyles.row}>
                <View style={variablesStyles.lefColumn} >
                    <Text style={variablesStyles.varText}>A'</Text></View>
                <BoxGrid total={vars} values={values} onPress={onPress} allLight={true} index={0} />
                <BoxGrid total={vars} values={values} onPress={onPress} allLight={true} index={1} />
                <BoxGrid total={vars} values={values} onPress={onPress} allLight={true} index={3} />
                <BoxGrid total={vars} values={values} onPress={onPress} allLight={true} index={2} />

            </View>
            <View style={variablesStyles.row}>
                <View style={variablesStyles.lefColumn} ><Text style={variablesStyles.varText}>A</Text></View>
                <BoxGrid total={vars} values={values} onPress={onPress} allLight={true} index={4} />
                <BoxGrid total={vars} values={values} onPress={onPress} allLight={true} index={5} />
                <BoxGrid total={vars} values={values} onPress={onPress} allLight={true} index={7} />
                <BoxGrid total={vars} values={values} onPress={onPress} allLight={true} index={6} />
            </View>
        </>
    )
}
