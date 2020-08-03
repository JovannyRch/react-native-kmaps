import React from 'react'
import { View, Text } from 'react-native'
import BoxGrid from '../BoxGrid'
import variablesStyles from './styles';

const styles = { ...variablesStyles };
export default function FiveVariablesShow({ onPress, values, vars }) {
    return (
        <>
            <View style={styles.row}>
                <View style={styles.lefColumn}><Text style={styles.varText}></Text></View>
                <View style={styles.vars5}><Text style={styles.varText5}>C'D'E'</Text></View>
                <View style={styles.vars5}><Text style={styles.varText5}>C'D'E</Text></View>
                <View style={styles.vars5}><Text style={styles.varText5}>C'DE</Text></View>
                <View style={styles.vars5}><Text style={styles.varText5}>CD'E</Text></View>
                <View style={styles.vars5}><Text style={styles.varText5}>C'D'E</Text></View>
                <View style={styles.vars5}><Text style={styles.varText5}>C'D'E'</Text></View>
                <View style={styles.vars5}><Text style={styles.varText5}>C'DE'</Text></View>
                <View style={styles.vars5}><Text style={styles.varText5}>C'DE</Text></View>
            </View>
            <View style={styles.row}>
                <View style={styles.lefColumn} >
                    <Text style={styles.varText}>A'B'</Text></View>
                <BoxGrid total={vars} values={values} onPress={onPress} index={0} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={1} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={3} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={2} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={6} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={7} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={5} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={4} />

            </View>
            <View style={styles.row}>
                <View style={styles.lefColumn} ><Text style={styles.varText}>A'B</Text></View>
                <BoxGrid total={vars} values={values} onPress={onPress} index={8} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={9} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={11} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={10} />

                <BoxGrid total={vars} values={values} onPress={onPress} index={14} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={15} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={13} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={12} />
            </View>
            <View style={styles.row}>
                <View style={styles.lefColumn} >
                    <Text style={styles.varText}>AB</Text></View>
                <BoxGrid total={vars} values={values} onPress={onPress} index={24} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={25} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={27} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={26} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={30} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={31} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={29} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={28} />

            </View>
            <View style={styles.row}>
                <View style={styles.lefColumn} ><Text style={styles.varText}>AB'</Text></View>
                <BoxGrid total={vars} values={values} onPress={onPress} index={16} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={17} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={19} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={18} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={22} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={23} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={21} />
                <BoxGrid total={vars} values={values} onPress={onPress} index={20} />
            </View>
        </>
    )
}
