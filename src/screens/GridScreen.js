import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BoxGrid from '../components/BoxGrid';
import ButtonGo from '../components/ButtonGo';

export default function GridScreen({ route, navigation }) {
    const { vars } = route.params;

    const [values, setValues] = useState([]);
    useEffect(() => {
        let values = [];
        for (let i = 0; i < Math.pow(2, vars); i++) {
            values.push("0");
        }
        setValues(values);
        return () => {
        }
    }, [])

    const nextState = (state) => {
        if (state == "0") return "1";
        if (state == "1") return "X";
        if (state == "X") return "0";
    }

    const onPress = (index) => {

        setValues(state => {
            const list = state.map((item, i) => {
                if (i == index) item = nextState(item);
                return item;
            });

            return list;
        }
        )
    }

    const onClickGo = () => {
        let mins = [];
        let dc = [];
        for (let i = 0; i < values.length; i++) {
            const val = values[i];
            if (val == "1") {
                mins.push(i);
            }
            else if (val == 'X') {
                dc.push(i);
            }
        }
        navigation.push('Result', { mins, dc });
    }

    return (
        <View style={styles.container}>

            <View style={styles.grid} >

                <View style={styles.row}>
                    <View style={styles.lefColumn}><Text style={styles.varText}></Text></View>
                    <View style={styles.vars}><Text style={styles.varText}>A</Text></View>
                    <View style={styles.vars}><Text style={styles.varText}>'A</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.lefColumn} >
                        <Text style={styles.varText}>B</Text></View>
                    <BoxGrid total={vars} value={values[0]} onPress={onPress} index={0} />
                    <BoxGrid total={vars} value={values[1]} onPress={onPress} index={1} />

                </View>
                <View style={styles.row}>
                    <View style={styles.lefColumn} ><Text style={styles.varText}>'B</Text></View>
                    <BoxGrid total={vars} value={values[2]} onPress={onPress} index={2} />
                    <BoxGrid total={vars} value={values[3]} onPress={onPress} index={3} />
                </View>
                <ButtonGo onPress={onClickGo} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
    },
    grid: {
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
        flex: 1,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },

    vars: {
        flex: 1,
        height: 30,
    },
    varText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    lefColumn: {
        width: 50,
        justifyContent: 'center',

    },

    leftColumnVars: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        borderRightWidth: 2,
        borderRightColor: 'black'
    }

});
