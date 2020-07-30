import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

import { Kmap } from '../clases/Kmap';
import { TablaVerdad } from '../clases/TruthTables';
import TableComponent from '../components/TableComponent';
import { ScrollView } from 'react-native-gesture-handler';


const ResultScreen = ({ route }) => {

    const { mins, dc, vars } = route.params;
    const nameVars = "ABCDEFGHIJKLMNOPQRSTUVWXY";
    const calculator = new Kmap(mins, dc, nameVars);
    let result = calculator.suma;
    const nombresVariables = ["m"];

    nombresVariables.push(nameVars.substr(0, vars));
    nombresVariables.push("y");
    const truthTable = new TablaVerdad(result, vars, nameVars.substr(0, vars));
    if (truthTable.isTautologia) {
        result = "1";
    }
    else if (truthTable.isContradiccion) {
        result = "0";
    }




    return (
        <ScrollView>
            <View style={styles.containerText}><Text style={styles.result}>y = {result}</Text></View>
            <TableComponent data={truthTable.tabla} header={nombresVariables} />
        </ScrollView>
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
        paddingHorizontal: 15,
        justifyContent: 'center',
    },
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },

})





export default ResultScreen;

