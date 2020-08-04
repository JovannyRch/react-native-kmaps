import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import TreeVariablesShow from './variables_show/TreeVariablesShow';
import TwoVariablesShow from './variables_show/TwoVariablesShow';
import FourVariablesShow from './variables_show/FourVariablesShow';
import FiveVariablesShow from './variables_show/FiveVariablesShow';

export const GroupsComponent = ({ data, vars, values }) => {


    return (
        <View style={styles.container}>

            {vars == 2 && <View style={styles.grid} >
                <TwoVariablesShow onPress={() => { }} values={values} vars={vars} groups={data} />

            </View>
            }

            {vars == 3 && <View style={styles.grid} >

                <TreeVariablesShow onPress={() => { }} values={values} vars={vars} groups={data} />

            </View>
            }
            {vars == 4 && <View style={styles.grid} >

                <FourVariablesShow onPress={() => { }} values={values} vars={vars} groups={data} />

            </View>
            }
            {vars == 5 && <View style={styles.grid} >

                <FiveVariablesShow onPress={() => { }} values={values} vars={vars} groups={data} />

            </View>
            }
        </View>
    )
}


const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
    },
    table: {
        borderWidth: 1,
        borderColor: '#2f4858',
    },
    textTable: {
        margin: 6,
        textAlign: 'center',
        color: '#2f4858',
        fontSize: 20,
    },
    table: {
        borderWidth: 1,
        borderColor: '#2f4858',
    },
    container: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
    },
    grid: {
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
        flex: 1,
    },
})
