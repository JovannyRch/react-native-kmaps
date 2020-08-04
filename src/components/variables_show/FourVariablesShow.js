import React from 'react'
import { View, Text } from 'react-native'
import variablesStyles from './styles';
import BoxGridShow from '../BoxGridShow';

export default function FourVariablesShow({ values, groups }) {
    return (
        <>
            <View style={variablesStyles.row}>
                <View style={variablesStyles.lefColumn}><Text style={variablesStyles.varText}></Text></View>
                <View style={variablesStyles.vars}><Text style={variablesStyles.varText}>C'D'</Text></View>
                <View style={variablesStyles.vars}><Text style={variablesStyles.varText}>C'D</Text></View>
                <View style={variablesStyles.vars}><Text style={variablesStyles.varText}>CD</Text></View>
                <View style={variablesStyles.vars}><Text style={variablesStyles.varText}>CD'</Text></View>
            </View>
            <View style={variablesStyles.row}>
                <View style={variablesStyles.lefColumn} >
                    <Text style={variablesStyles.varText}>A'B'</Text></View>
                <BoxGridShow values={values} groups={groups} index={0} />
                <BoxGridShow values={values} groups={groups} index={1} />
                <BoxGridShow values={values} groups={groups} index={3} />
                <BoxGridShow values={values} groups={groups} index={2} />

            </View>
            <View style={variablesStyles.row}>
                <View style={variablesStyles.lefColumn} ><Text style={variablesStyles.varText}>A'B</Text></View>
                <BoxGridShow values={values} groups={groups} index={4} />
                <BoxGridShow values={values} groups={groups} index={5} />
                <BoxGridShow values={values} groups={groups} index={7} />
                <BoxGridShow values={values} groups={groups} index={6} />

            </View>
            <View style={variablesStyles.row}>
                <View style={variablesStyles.lefColumn} >
                    <Text style={variablesStyles.varText}>AB</Text></View>
                <BoxGridShow values={values} groups={groups} index={12} />
                <BoxGridShow values={values} groups={groups} index={13} />
                <BoxGridShow values={values} groups={groups} index={15} />
                <BoxGridShow values={values} groups={groups} index={14} />

            </View>
            <View style={variablesStyles.row}>
                <View style={variablesStyles.lefColumn} ><Text style={variablesStyles.varText}>AB'</Text></View>
                <BoxGridShow values={values} groups={groups} index={8} />
                <BoxGridShow values={values} groups={groups} index={9} />
                <BoxGridShow values={values} groups={groups} index={11} />
                <BoxGridShow values={values} groups={groups} index={10} />
            </View>
        </>
    )
}
