import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BoxGrid from '../components/BoxGrid';
import ButtonGo from '../components/ButtonGo';
import TwoVariables from '../components/variables/TwoVariables';
import TreeVariables from '../components/variables/TreeVariables';
import FourVariables from '../components/variables/FourVariables';
import FiveVariables from '../components/variables/FiveVariables';

export default function GridScreen({ route, navigation }) {
    const { vars, initialValues } = route.params;

    const [values, setValues] = useState([...initialValues]);
    useEffect(() => {
        setValues(initialValues);

    }, [])

    const nextState = (state) => {
        if (state == "0") return "1";
        if (state == "1") return "X";
        if (state == "X") return "0";
    }

    const onPress = (index) => {

        setValues(state => {
            const list = state.map((item, i) => {
                if (i == index) item = nextState(item);
                return item;
            });

            return list;
        }
        )
    }

    const onClickGo = (isMaxiterm = false) => {
        let mins = [];
        let dc = [];
        for (let i = 0; i < values.length; i++) {
            const val = values[i];
            if (val == "1") {
                mins.push(i);
            }
            else if (val == 'X') {
                dc.push(i);
            }
        }
        const params = { mins, dc, vars, isMaxiterm, values };

        navigation.push('Result', params);
    }

    return (
        <View style={styles.container}>

            {vars == 2 && <View style={styles.grid} >
                <TwoVariables onPress={onPress} values={values} vars={vars} />
                <ButtonGo onPress1={() => onClickGo(false)} onPress2={() => onClickGo(true)} />
            </View>
            }

            {vars == 3 && <View style={styles.grid} >

                <TreeVariables onPress={onPress} values={values} vars={vars} />
                <ButtonGo onPress1={() => onClickGo(false)} onPress2={() => onClickGo(true)} />
            </View>
            }
            {vars == 4 && <View style={styles.grid} >

                <FourVariables onPress={onPress} values={values} vars={vars} />
                <ButtonGo onPress1={() => onClickGo(false)} onPress2={() => onClickGo(true)} />
            </View>
            }
            {vars == 5 && <View style={styles.grid} >

                <FiveVariables onPress={onPress} values={values} vars={vars} />
                <ButtonGo onPress1={() => onClickGo(false)} onPress2={() => onClickGo(true)} />
            </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
    },
    grid: {
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
        flex: 1,
    },

});
