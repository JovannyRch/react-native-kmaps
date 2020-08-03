import React from 'react'
import { View, Text } from 'react-native'
import BoxGrid from '../BoxGrid'
import variablesStyles from './styles';

export default function FourVariablesShow({ onPress, values, vars }) {
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
                <BoxGrid total={vars} values={values} onPress={onPress} index={0} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={1} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={3} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={2} />

            </View>
            <View style={variablesStyles.row}>
                <View style={variablesStyles.lefColumn} ><Text style={variablesStyles.varText}>A'B</Text></View>
                <BoxGrid total={vars} values={values} onPress={onPress} index={4} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={5} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={7} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={6} />
            </View>
            <View style={variablesStyles.row}>
                <View style={variablesStyles.lefColumn} >
                    <Text style={variablesStyles.varText}>AB</Text></View>
                <BoxGrid total={vars} values={values} onPress={onPress} index={12} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={13} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={15} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={14} />

            </View>
            <View style={variablesStyles.row}>
                <View style={variablesStyles.lefColumn} ><Text style={variablesStyles.varText}>AB'</Text></View>
                <BoxGrid total={vars} values={values} onPress={onPress} index={8} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={9} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={11} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={10} />
            </View>
        </>
    )
}
