import React from 'react'
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import HTML from 'react-native-render-html';
import { ScrollView } from 'react-native-gesture-handler';

export const CircuitComponent = ({ variables, initGroups }) => {
    const addNegations = (vars) => {
        let result = [];
        for (let v of vars) {
            result.push(v);
            result.push(v + "'");
        }

        return result;

    }
    let vars = addNegations(variables);
    const n = vars.length;
    let height = n * 15;
    let groups = initGroups.split("+");
    let dy = 0;
    let middle = (height) * n / 2;
    let initOr = 0;

    let decresingX = true;
    let middles = n % 2 == 0 ? [n / 2, (n / 2) - 1] : [Math.floor(n / 2)];
    console.log(middles);
    const setVariables = (vars, group, index) => {


        let formatGroup = group.split(' ').join('').split(".");

        let dx = 10;
        const step = 20;
        const stepy = 15;
        let initAnd = (n * step) + 40;

        let result = ``;
        for (let i = 0; i < n; i++) {
            let v = vars[i];
            // Lineas verticales que inician el circuito con las variables (1)
            result += `
                <div  style="position: absolute;top: ${dy}px;left:${dx}px;"><b>${v}</b></div>
                <div style="position: absolute;top: ${dy + stepy}px;left:${dx}px;width: 2px; height: ${height}px; background-color: black;"></div>
         `;

            //Lineas horizontales que van del inicio de las variables a la compuerta AND
            if (formatGroup.indexOf(v) >= 0) {
                result += `
                            <div style="position: absolute;top: ${dy + stepy + ((height / n) * i) + 7}px;left:${dx - 2}px;width: 10px; height: ${10}px; background-color: black;border-radius: 100px;"></div>
                            <div style="position: absolute;top: ${dy + stepy + ((height / n) * i) + 10}px;left:${dx}px;width: ${initAnd - dx}px; height: ${3}px; background-color: black;"></div>
                    `;
            }

            dx += step;
        }
        result +=
            `
              <div style="position: absolute;top: ${dy + stepy}px;left:${initAnd}px;width: ${height}px; height: ${height}px; background-color: black;border-top-right-radius: 50%;border-bottom-right-radius: 50%;"></div>
              <div style="position: absolute;top: ${(dy + stepy) + (height / 2)}px;left:${initAnd + height}px;width: ${step * 2}px; height: 3px; background-color: black;"></div>
              `;
        initOr = initAnd + height + (step * 2);
        result += ` `;
        dy += height + 40;
        return result;
    }


    let htmlContent = `<div style="position: relative;top: 0px;height: ${height * (n)};  overflow-x: scroll;">`;
    for (let i in groups) {
        let g = groups[i];
        htmlContent += setVariables(vars, g, i);
    }
    htmlContent += `<div style="position: absolute; top: ${dy / 2}px;left:${initOr};background-color: black; width: 100px; height: 3px;" ></div>`
    htmlContent += `</div>`


    return (
        <View className={styles.circuitContainer}>
            <Text></Text>
            <HTML html={htmlContent} />
        </View>
    )
}

const styles = StyleSheet.create({
    circuitContainer: {
        padding: 20,
    }
})