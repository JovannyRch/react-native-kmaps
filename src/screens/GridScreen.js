import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BoxGrid from '../components/BoxGrid';
import ButtonGo from '../components/ButtonGo';

export default function GridScreen({ route, navigation }) {
    const { vars } = route.params;

    const [values, setValues] = useState([]);
    useEffect(() => {
        let values = [];
        for (let i = 0; i < Math.pow(2, vars); i++) {
            values.push("0");
        }
        setValues(values);

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

    const onClickGo = () => {
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
        navigation.push('Result', { mins, dc, vars });
    }

    return (
        <View style={styles.container}>
            {vars == 2 && <View style={styles.grid} >

                <View style={styles.row}>
                    <View style={styles.lefColumn}><Text style={styles.varText}></Text></View>
                    <View style={styles.vars}><Text style={styles.varText}>A'</Text></View>
                    <View style={styles.vars}><Text style={styles.varText}>A</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.lefColumn} >
                        <Text style={styles.varText}>B'</Text></View>
                    <BoxGrid total={vars} values={values} onPress={onPress} index={0} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={1} />

                </View>
                <View style={styles.row}>
                    <View style={styles.lefColumn} ><Text style={styles.varText}>B</Text></View>
                    <BoxGrid total={vars} values={values} onPress={onPress} index={2} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={3} />
                </View>
                <ButtonGo onPress={onClickGo} />
            </View>
            }

            {vars == 3 && <View style={styles.grid} >

                <View style={styles.row}>
                    <View style={styles.lefColumn}><Text style={styles.varText}></Text></View>
                    <View style={styles.vars}><Text style={styles.varText}>B'C'</Text></View>
                    <View style={styles.vars}><Text style={styles.varText}>B'C</Text></View>
                    <View style={styles.vars}><Text style={styles.varText}>BC</Text></View>
                    <View style={styles.vars}><Text style={styles.varText}>BC'</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.lefColumn} >
                        <Text style={styles.varText}>A'</Text></View>
                    <BoxGrid total={vars} values={values} onPress={onPress} index={0} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={1} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={3} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={2} />

                </View>
                <View style={styles.row}>
                    <View style={styles.lefColumn} ><Text style={styles.varText}>A</Text></View>
                    <BoxGrid total={vars} values={values} onPress={onPress} index={4} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={5} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={7} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={6} />
                </View>
                <ButtonGo onPress={onClickGo} />
            </View>
            }
            {vars == 4 && <View style={styles.grid} >

                <View style={styles.row}>
                    <View style={styles.lefColumn}><Text style={styles.varText}></Text></View>
                    <View style={styles.vars}><Text style={styles.varText}>C'D'</Text></View>
                    <View style={styles.vars}><Text style={styles.varText}>C'D</Text></View>
                    <View style={styles.vars}><Text style={styles.varText}>CD</Text></View>
                    <View style={styles.vars}><Text style={styles.varText}>CD'</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.lefColumn} >
                        <Text style={styles.varText}>A'B'</Text></View>
                    <BoxGrid total={vars} values={values} onPress={onPress} index={0} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={1} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={3} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={2} />

                </View>
                <View style={styles.row}>
                    <View style={styles.lefColumn} ><Text style={styles.varText}>A'B</Text></View>
                    <BoxGrid total={vars} values={values} onPress={onPress} index={4} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={5} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={7} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={6} />
                </View>
                <View style={styles.row}>
                    <View style={styles.lefColumn} >
                        <Text style={styles.varText}>AB</Text></View>
                    <BoxGrid total={vars} values={values} onPress={onPress} index={12} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={13} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={15} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={14} />

                </View>
                <View style={styles.row}>
                    <View style={styles.lefColumn} ><Text style={styles.varText}>AB'</Text></View>
                    <BoxGrid total={vars} values={values} onPress={onPress} index={8} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={9} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={11} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={10} />
                </View>
                <ButtonGo onPress={onClickGo} />
            </View>
            }
            {vars == 5 && <View style={styles.grid} >

                <View style={styles.row}>
                    <View style={styles.lefColumn}><Text style={styles.varText}></Text></View>
                    <View style={styles.vars5}><Text style={styles.varText5}>C'D'E'</Text></View>
                    <View style={styles.vars5}><Text style={styles.varText5}>C'D'E</Text></View>
                    <View style={styles.vars5}><Text style={styles.varText5}>C'DE</Text></View>
                    <View style={styles.vars5}><Text style={styles.varText5}>CD'E</Text></View>
                    <View style={styles.vars5}><Text style={styles.varText5}>C'D'E</Text></View>
                    <View style={styles.vars5}><Text style={styles.varText5}>C'D'E'</Text></View>
                    <View style={styles.vars5}><Text style={styles.varText5}>C'DE'</Text></View>
                    <View style={styles.vars5}><Text style={styles.varText5}>C'DE</Text></View>
                </View>
                <View style={styles.row}>
                    <View style={styles.lefColumn} >
                        <Text style={styles.varText}>A'B'</Text></View>
                    <BoxGrid total={vars} values={values} onPress={onPress} index={0} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={1} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={3} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={2} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={6} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={7} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={5} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={4} />

                </View>
                <View style={styles.row}>
                    <View style={styles.lefColumn} ><Text style={styles.varText}>A'B</Text></View>
                    <BoxGrid total={vars} values={values} onPress={onPress} index={8} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={9} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={11} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={10} />

                    <BoxGrid total={vars} values={values} onPress={onPress} index={14} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={15} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={13} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={12} />
                </View>
                <View style={styles.row}>
                    <View style={styles.lefColumn} >
                        <Text style={styles.varText}>AB</Text></View>
                    <BoxGrid total={vars} values={values} onPress={onPress} index={24} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={25} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={27} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={26} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={30} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={31} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={29} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={28} />

                </View>
                <View style={styles.row}>
                    <View style={styles.lefColumn} ><Text style={styles.varText}>AB'</Text></View>
                    <BoxGrid total={vars} values={values} onPress={onPress} index={16} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={17} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={19} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={18} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={22} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={23} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={21} />
                    <BoxGrid total={vars} values={values} onPress={onPress} index={20} />
                </View>
                <ButtonGo onPress={onClickGo} />
            </View>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
    },
    grid: {
        display: 'flex',
        flexDirection: 'column',
        padding: 10,
        flex: 1,
    },
    row: {
        display: 'flex',
        flexDirection: 'row',
    },

    vars: {
        flex: 1,
        height: 30,
    },
    vars5: {
        flex: 1,
        height: 10,
    },
    varText: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    varText5: {
        fontSize: 13,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    lefColumn: {
        width: 50,
        justifyContent: 'center',

    },

    leftColumnVars: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 5,
        borderRightWidth: 2,
        borderRightColor: 'black'
    }

});
