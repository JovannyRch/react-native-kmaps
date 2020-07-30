import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default function TableScreen({ route, navigation }) {
    const { vars } = route.params;
    const nameVars = "ABCDEFGHIJKLMNOP";
    const [rows, setRows] = useState([]);
    const [tableHead, setTableHead] = useState([]);

    const tableData = [
        ['1', '2', '3', '4'],
        ['a', 'b', 'c', 'd'],
        ['1', '2', '3', '456\n789'],
        ['a', 'b', 'c', 'd']
    ];

    const formatBin = (bin) => {
        while (bin.length < vars) {
            bin = "0" + bin;
        }
        return bin;
    }

    const updateRows = (n) => {

        let names = [];
        names.push("m");
        for (let i = 0; i < n; i++) {
            names.push(nameVars[i]);
        }
        names.push("0");
        names.push("1");
        names.push("X");


        setTableHead(names);
        let newRows = [];
        for (let i = 0; i < Math.pow(2, n); i++) {
            let bin = i.toString(2);
            let row = [];
            bin = formatBin(bin);
            row.push(i);
            for (const n of bin) {
                row.push(n);
            }
            row.push("0");
            row.push("1");
            row.push("X");
            newRows.push(row);
        }
        setRows(newRows);
    }

    useEffect(() => {
        updateRows(vars);
    }, [])

    return (
        <View style={styles.container}>
            <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                <Row data={tableHead} style={styles.head} textStyle={styles.text} />
                <Rows data={rows} textStyle={styles.text} />
            </Table>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: { margin: 6 }
});
