import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Table, Row, Rows } from 'react-native-table-component';

import { Kmap } from '../clases/Kmap';
import { TablaVerdad } from '../clases/TruthTables';


const ResultScreen = ({ route }) => {

    const { mins, dc } = route.params;
    const calculator = new Kmap(mins, dc, "ABCDEFGHIJKLMNOPQRSTUVWXY");
    const result = calculator.suma;
    const truthTable = new TablaVerdad(result);
    console.log(truthTable.tabla);
    console.log(truthTable.variables);
    return (
        <View>
            <View style={styles.containerText}><Text style={styles.result}>{result}</Text></View>
            <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                {/*  <Row data={tableHead} style={styles.head} textStyle={styles.text} /> */}
                <Rows data={truthTable.tabla} textStyle={styles.text} />
            </Table>
        </View>
    )
}

const styles = StyleSheet.create({
    result: {
        fontSize: 30,
        color: 'black',
        textAlign: 'center',
    },
    containerText: {
        paddingTop: 10,
        justifyContent: 'center',
    },
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6, textAlign: 'center', color: 'black' }
})





export default ResultScreen;

