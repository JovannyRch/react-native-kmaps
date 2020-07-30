import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import { Table, Rows } from 'react-native-table-component';

export const GroupsComponent = ({ data }) => {
    return (
        <View style={{ paddingHorizontal: 10, marginTop: 10, }}>
            <Text style={styles.text}>Grupos</Text>
            <Table borderStyle={styles.table}>
                <Rows data={data} textStyle={styles.textTable} />
            </Table>
        </View>
    )
}


const styles = StyleSheet.create({
    text: {
        fontSize: 17,
        textAlign: 'center',
    },
    table: {
        borderWidth: 1,
        borderColor: '#70a5ff',
    },
    textTable: {
        margin: 6,
        textAlign: 'center',
        color: '#002d7a',
        fontSize: 20,
    },
    table: {
        borderWidth: 1,
        borderColor: '#70a5ff',
    },
})
