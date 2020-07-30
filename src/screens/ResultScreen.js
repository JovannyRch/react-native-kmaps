import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Kmap } from '../clases/Kmap';
import { TablaVerdad } from '../clases/TruthTables';
import TableComponent from '../components/TableComponent';


const ResultScreen = ({ route }) => {

    const { mins, dc, vars } = route.params;
    const nameVars = "ABCDEFGHIJKLMNOPQRSTUVWXY";
    const calculator = new Kmap(mins, dc, nameVars);
    const result = calculator.suma;
    const nombresVariables = ["m"];
    for (let i = 0; i < vars; i++) {
        nombresVariables.push(nameVars[i]);
    }
    const truthTable = new TablaVerdad(result, vars, nombresVariables);



    nombresVariables.push("y");

    return (
        <View>
            <View style={styles.containerText}><Text style={styles.result}>y = {result}</Text></View>
            <TableComponent data={truthTable.tabla} header={nombresVariables} />
        </View>
    )
}

const styles = StyleSheet.create({
    result: {
        fontSize: 30,
        color: '#002d7a',
        textAlign: 'center',
    },
    containerText: {
        paddingTop: 10,
        justifyContent: 'center',
    },
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },

})





export default ResultScreen;

