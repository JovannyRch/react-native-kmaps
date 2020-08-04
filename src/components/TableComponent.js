import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Table, Row, Rows } from 'react-native-table-component';
import { ScrollView } from 'react-native-gesture-handler';

const TableComponent = ({ header, data }) => {

    return (
        <ScrollView>
            <View style={styles.containerTable}>
                <Text style={styles.textTitle}>Tabla de Verdad</Text>
                <View style={{ height: 10, }}></View>
                <Table borderStyle={styles.table}>
                    <Row data={header} style={styles.head} textStyle={styles.headText} />
                    <Rows data={data} textStyle={styles.text} />
                </Table>
            </View>
            <View style={{ height: 200, }}>

            </View>

        </ScrollView>

    );
}

const styles = StyleSheet.create({
    textTitle: {
        fontSize: 20,
        textAlign: 'center',
        marginBottom: 10,
    },
    headText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    head: {
        height: 40,
        backgroundColor: '#2f4858'
    },
    text: {
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
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#3880ff',
        width: 200,
    },
    mainContainer: {
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    containerText: {
        textAlign: 'center',
        padding: 10,
        color: '#3880ff'
    },
    containerTable: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    }
})


export default React.memo(TableComponent);