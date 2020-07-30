import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Table, Row, Rows } from 'react-native-table-component';
import { TouchableOpacity } from 'react-native-gesture-handler';

const TableComponent = ({ header, data }) => {
    const [showTable, setShowTable] = useState(false)

    return (
        <View >
            {
                showTable ?
                    <View style={styles.containerTable}>
                        <Text style={{ fontSize: 17, textAlign: 'center' }}>Tabla de Verdad</Text>
                        <View style={{ height: 10, }}></View>
                        <Table borderStyle={styles.table}>
                            <Row data={header} style={styles.head} textStyle={styles.headText} />
                            <Rows data={data} textStyle={styles.text} />
                        </Table>
                    </View> :
                    <View style={styles.mainContainer}>
                        <TouchableOpacity style={styles.container} onPress={() => { setShowTable(true) }}>
                            <Text style={styles.containerText}>Mostrar tabla de verdad</Text>
                        </TouchableOpacity>
                    </View>

            }
        </View>
    );
}

const styles = StyleSheet.create({
    headText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    head: {
        height: 40,
        backgroundColor: '#3880ff'
    },
    text: {
        margin: 6,
        textAlign: 'center',
        color: '#002d7a',
        fontSize: 20,
    },
    table: {
        borderWidth: 1,
        borderColor: '#70a5ff',
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


export default TableComponent;