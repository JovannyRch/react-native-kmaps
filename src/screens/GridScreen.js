import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BoxGrid from '../components/BoxGrid';

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

    const onPress = (index) => {
        console.log(index);
        setValues(state => {
            const list = state.map((item, i) => {
                if (i == index) item = item == "1" ? "0" : "1";
                return item;
            });

            return list;
        }
        )
    }
    return (
        <View style={styles.grid} >
            <View style={styles.row}>
                <View style={styles.lefColumn}><Text style={styles.varText}></Text></View>
                <View style={styles.vars}><Text style={styles.varText}>0</Text></View>
                <View style={styles.vars}><Text style={styles.varText}>1</Text></View>
            </View>
            <View style={styles.row}>
                <View style={styles.lefColumn} ><Text style={styles.varText}>0</Text></View>
                <BoxGrid value={values[0]} onPress={onPress} index={0} />
                <BoxGrid value={values[1]} onPress={onPress} index={1} />

            </View>
            <View style={styles.row}>
                <View style={styles.lefColumn} ><Text style={styles.varText}> 1</Text></View>
                <BoxGrid value={values[2]} onPress={onPress} index={2} />
                <BoxGrid value={values[3]} onPress={onPress} index={3} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    grid: {
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
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
    },
    lefColumn: {
        width: 50,
    },

});
