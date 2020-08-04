import React from 'react'
import { View, Text } from 'react-native'
import BoxGridShow from '../BoxGridShow'
import variablesStyles from './styles';

const styles = { ...variablesStyles };
export default function FiveVariablesShow({ values, groups }) {
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
                <BoxGridShow values={values} groups={groups} index={0} />
                <BoxGridShow values={values} groups={groups} index={1} />
                <BoxGridShow values={values} groups={groups} index={3} />
                <BoxGridShow values={values} groups={groups} index={2} />
                <BoxGridShow values={values} groups={groups} index={6} />
                <BoxGridShow values={values} groups={groups} index={7} />
                <BoxGridShow values={values} groups={groups} index={5} />
                <BoxGridShow values={values} groups={groups} index={4} />


            </View>
            <View style={styles.row}>
                <View style={styles.lefColumn} ><Text style={styles.varText}>A'B</Text></View>
                <BoxGridShow values={values} groups={groups} index={8} />
                <BoxGridShow values={values} groups={groups} index={9} />
                <BoxGridShow values={values} groups={groups} index={11} />
                <BoxGridShow values={values} groups={groups} index={10} />
                <BoxGridShow values={values} groups={groups} index={14} />
                <BoxGridShow values={values} groups={groups} index={15} />
                <BoxGridShow values={values} groups={groups} index={13} />
                <BoxGridShow values={values} groups={groups} index={12} />
            </View>
            <View style={styles.row}>
                <View style={styles.lefColumn} >
                    <Text style={styles.varText}>AB</Text></View>
                <BoxGridShow values={values} groups={groups} index={24} />
                <BoxGridShow values={values} groups={groups} index={25} />
                <BoxGridShow values={values} groups={groups} index={27} />
                <BoxGridShow values={values} groups={groups} index={26} />
                <BoxGridShow values={values} groups={groups} index={30} />
                <BoxGridShow values={values} groups={groups} index={31} />
                <BoxGridShow values={values} groups={groups} index={29} />
                <BoxGridShow values={values} groups={groups} index={28} />


            </View>
            <View style={styles.row}>
                <View style={styles.lefColumn} ><Text style={styles.varText}>AB'</Text></View>
                <BoxGridShow values={values} groups={groups} index={16} />
                <BoxGridShow values={values} groups={groups} index={17} />
                <BoxGridShow values={values} groups={groups} index={19} />
                <BoxGridShow values={values} groups={groups} index={18} />
                <BoxGridShow values={values} groups={groups} index={22} />
                <BoxGridShow values={values} groups={groups} index={23} />
                <BoxGridShow values={values} groups={groups} index={21} />
                <BoxGridShow values={values} groups={groups} index={20} />

            </View>
        </>
    )
}
