import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'

import { TablaVerdad } from '../clases/TruthTables';
import TableComponent from '../components/TableComponent';
import { ScrollView } from 'react-native-gesture-handler';

import { GroupsComponent } from '../components/GroupsComponent';
import { CircuitComponent } from '../components/CircuitComponent';
import QuineMcCluskey from '../clases/quinemccluskey';

import Swiper from 'react-native-swiper';



const ResultScreen = ({ route }) => {

    const { mins, dc, vars, isMaxiterm, values } = route.params;
    const nameVars = "ABCDEFGHIJKLMNOPQRSTUVWXY";

    const nombresVariables = ["m"];
    let varsUsed = nameVars.substr(0, vars);
    let f = new QuineMcCluskey(varsUsed, mins, dc);
    let result = f.getFunctionFormat(isMaxiterm);
    let groups = f.groups;
    let title = !isMaxiterm ? "Suma de productos" : "Producto de sumas";
    nombresVariables.push(varsUsed);
    nombresVariables.push("y");
    const truthTable = new TablaVerdad(result, vars, varsUsed);

    const head = <>
        <View style={styles.containerText}>
            <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 10, }}>{title}</Text>
            <Text style={styles.result}>y = {result}</Text>
        </View>
    </>;

    return (

        <Swiper style={{ ...styles.wrapper }} showsButtons={false}>
            {
                (!truthTable.isContradiccion && !truthTable.isTautologia) &&
                <View style={styles.slide3}>
                    {head}
                    <GroupsComponent data={groups} vars={varsUsed.length} values={values} />
                </View>
            }
            {
                (!truthTable.isContradiccion && !truthTable.isTautologia) && <View style={styles.slide1}>
                    {head}
                    <CircuitComponent variables={varsUsed} initGroups={result} isMaxiterm={isMaxiterm} />
                </View>
            }
            <View style={styles.slide2}>
                {head}
                <TableComponent data={truthTable.tabla} header={nombresVariables} />
            </View>

        </Swiper>
    )
}

/*

<ScrollView>

            <View style={styles.containerText}>
                <Text>Suma de productos</Text>
                <Text style={styles.result}>y = {result}</Text>
            </View>
            {
                (!truthTable.isContradiccion && !truthTable.isTautologia) && <CircuitComponent variables={varsUsed} initGroups={result} isMaxiterm={isMaxiterm} />
            }
            <TableComponent data={truthTable.tabla} header={nombresVariables} />
            {
                (!result == "0") && <GroupsComponent data={groups.map(row => [row.toString()])} />
            }

        </ScrollView>

*/

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
        marginBottom: 20,
    },
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    circuitContainer: {
        padding: 10,
    },
    wrapper: {

    },
    slide1: {
        flex: 1,

    },
    slide2: {
        flex: 1,

    },
    slide3: {
        flex: 1,

    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    }

})





export default ResultScreen;

