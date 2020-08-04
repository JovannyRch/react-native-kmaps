import React from 'react'
import { View, Text } from 'react-native'
import BoxGrid from '../BoxGrid'
import variablesStyles from './styles'
import BoxGridShow from '../BoxGridShow'

export default function TreeVariablesShow({ values, groups }) {

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
                <BoxGridShow values={values} groups={groups} index={0} />
                <BoxGridShow values={values} groups={groups} index={1} />
                <BoxGridShow values={values} groups={groups} index={3} />
                <BoxGridShow values={values} groups={groups} index={2} />

            </View>
            <View style={variablesStyles.row}>
                <View style={variablesStyles.lefColumn} ><Text style={variablesStyles.varText}>A</Text></View>
                <BoxGridShow values={values} groups={groups} index={4} />
                <BoxGridShow values={values} groups={groups} index={5} />
                <BoxGridShow values={values} groups={groups} index={7} />
                <BoxGridShow values={values} groups={groups} index={6} />
            </View>
        </>
    )
}
