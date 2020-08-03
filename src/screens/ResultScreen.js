import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

import { Kmap } from '../clases/Kmap';
import { TablaVerdad } from '../clases/TruthTables';
import TableComponent from '../components/TableComponent';
import { ScrollView } from 'react-native-gesture-handler';

import { GroupsComponent } from '../components/GroupsComponent';
import { CircuitComponent } from '../components/CircuitComponent';
import QuineMcCluskey from '../clases/quinemccluskey';




const ResultScreen = ({ route }) => {

    const { mins, dc, vars } = route.params;
    const nameVars = "ABCDEFGHIJKLMNOPQRSTUVWXY";

    const nombresVariables = ["m"];
    let isMaxiterm = true;
    let f = new QuineMcCluskey(nameVars.substr(0, vars), mins, dc);
    let result = f.getFunctionFormat(isMaxiterm);

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
            {/*  {
                (!truthTable.isContradiccion) && <GroupsComponent data={calculator.groups.map(row => [row.toString()])} />
            } */}
            {
                (!truthTable.isContradiccion && !truthTable.isTautologia) && <CircuitComponent variables={nameVars.substr(0, vars)} initGroups={result} isMaxiterm={isMaxiterm} />
            }
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

