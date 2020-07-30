import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

import { Kmap } from '../clases/Kmap';
import { TablaVerdad } from '../clases/TruthTables';
import TableComponent from '../components/TableComponent';
import { ScrollView } from 'react-native-gesture-handler';
import { Table, Row, Rows } from 'react-native-table-component';

import HTML from 'react-native-render-html';
import { GroupsComponent } from '../components/GroupsComponent';

const htmlContent = `
    <h2>Oval CSS</h2>
    <div style="height: 50px;
    width: 100px;
    background-color: #555;
    border-radius: 50%;"></div>
`;



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
    console.log(calculator.groups);



    return (
        <ScrollView>
            <View style={styles.containerText}><Text style={styles.result}>y = {result}</Text></View>
            <TableComponent data={truthTable.tabla} header={nombresVariables} />
            <GroupsComponent data={calculator.groups.map(row => [row.toString()])} />
            <View className={styles.circuitContainer}>
                <HTML html={htmlContent} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    result: {
        fontSize: 30,
        color: '#2f4858',
        fontWeight: "100",
        letterSpacing: 1,
        textAlign: 'center',
    },
    containerText: {
        paddingTop: 10,
        paddingHorizontal: 15,
        justifyContent: 'center',
    },
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    circuitContainer: {
        padding: 10,
    }

})





export default ResultScreen;

