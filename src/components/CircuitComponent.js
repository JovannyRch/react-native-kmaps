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
    const step = 17;
    const stepy = 15;
    let decresingX = true;
    let middles = (n / 2) % 2 == 0 ? [n / 4, (n / 4) - 1] : [Math.floor(n / 4)];
    let incresingValue = (n / 3) * (step * 0.5);
    let initOrDx = incresingValue + 20;
    //Almacena las posiciones de las salidas de los ands, para unirlos con el OR
    let mapsXY = {};
    let color = "#2f4858";

    const setVariables = (vars, group, index) => {


        let formatGroup = group.split(' ').join('').split(".");

        let dx = 10;


        let initAnd = (n * step) + 40;

        let result = ``;
        for (let i = 0; i < n; i++) {
            let v = vars[i];
            // Lineas verticales que inician el circuito con las variables (1)
            result += `
                <div  style="position: absolute;top: ${dy}px;left:${dx}px;"><b>${v}</b></div>
                <div style="position: absolute;top: ${dy + stepy}px;left:${dx}px;width: 2px; height: ${height}px; background-color: ${color};"></div>
         `;

            //Lineas horizontales que van del inicio de las variables a la compuerta AND
            if (formatGroup.indexOf(v) >= 0) {
                result += `
                            <div style="position: absolute;top: ${dy + stepy + ((height / n) * i) + 7}px;left:${dx - 2}px;width: 10px; height: ${10}px; background-color: ${color};border-radius: 100px;"></div>
                            <div style="position: absolute;top: ${dy + stepy + ((height / n) * i) + 10}px;left:${dx}px;width: ${initAnd - dx}px; height: ${3}px; background-color: ${color};"></div>
                    `;
            }

            dx += step;
        }

        result +=
            `
              <div style="position: absolute;top: ${dy + stepy}px;left:${initAnd}px;width: ${height}px; height: ${height}px; background-color: ${color};border-top-right-radius: 50%;border-bottom-right-radius: 50%;z-index:2;"></div>
              <div style="position: absolute;top: ${(dy + stepy) + (height / 2)}px;left:${initAnd + height}px;width: ${incresingValue}px; height: 3px; background-color: ${color};"></div>
              `;
        mapsXY[index] = { x: initAnd + height + incresingValue, y: (dy + stepy) + (height / 2) };
        if (middles.indexOf(index) >= 0) {
            decresingX = false;
        }
        if (decresingX) {
            incresingValue -= step;
        }
        else {
            incresingValue += step;
        }

        initOr = initAnd + height * 0.6;
        result += ` `;
        dy += height + 40;
        return result;
    }


    let htmlContent = `<div style="position: relative;top: 0px;height: ${height * (n)};  overflow-x: scroll;">`;
    for (let i in groups) {
        let g = groups[i];
        htmlContent += setVariables(vars, g, parseInt(i));
    }
    let middleValueY = middles.length == 2 ? (mapsXY[middles[1]].y - mapsXY[middles[0]].y) / 2 : mapsXY[middles[0]].y;
    //htmlContent += `<div style="position: absolute; top: ${middleValueY}px;left:${initOr};background-color: ${color}; width: 100px; height: 3px;" ></div>`

    //Conectores de las salidas de la compuerta AND a la compuerta or
    let posXOr = -1;
    for (var key in mapsXY) {
        const y = mapsXY[key].y;
        const x = mapsXY[key].x;
        if (posXOr == -1) posXOr = x + (step * 2);
        if (y > middleValueY) {
            //Hacia arriba 
            htmlContent += `
            <div style="position: absolute; top: ${middleValueY + 10}px;left:${x};background-color: ${color}; width: 3px; height: ${y - middleValueY - 7}px;z-index: 3;" ></div>
            <div style="position: absolute; top: ${middleValueY + 10}px;left:${x};background-color: ${color}; width: ${posXOr - x + (height * .05)}px; height: ${3}px;z-index: 3;" ></div>
            `

        }
        else if (y < middleValueY) {
            //Hacia abajo
            htmlContent += `
            <div style="position: absolute; top: ${y}px;left:${x};background-color: ${color}; width: 3px; height: ${middleValueY - y - 9}px;z-index: 3;" ></div>
            <div style="position: absolute; top: ${middleValueY - 9}px;left:${x};background-color: ${color}; width: ${posXOr - x + (height * .05)}px; height: 3px;z-index: 3;" ></div>
            `

        }
        else {
            //Ahi quedate
            htmlContent += `
            <div style="position: absolute; top: ${y}px;left:${x};background-color: ${color}; width: ${posXOr - x + (height * .05)}px; height: 3px;z-index: 3;" ></div>
            `
        }
    }

    //OR OPERATOR
    let yOr;
    if (middles.length == 1) {
        yOr = mapsXY[middles[0]].y;
    } else if (middles.length == 2) {
        const y1 = mapsXY[middles[0]].y;
        const y2 = mapsXY[middles[1]].y;
        yOr = y1 + (y2 - y1) / 2;
    }
    //Dibujo del operador OR
    htmlContent +=
        `
        <div style="position: absolute;top: ${yOr - (height / 2)}px;left:${posXOr - (height / 1)}px;width: ${height * 1.05}px; height: ${height}px; background-color: #f0f2f2;border-radius: 40%;z-index: 1;"></div>                 
        <div style="position: absolute;top: ${yOr - (height / 2)}px;left:${posXOr - (height / 2)}px;width: ${height}px; height: ${height}px; background-color: ${color};border-top-right-radius: 100%;border-bottom-right-radius: 100%;z-index: -1;"></div>                  
        <div style="position: absolute;top: ${yOr}px;left:${posXOr + (height / 2)}px;width: ${height * 0.25}px; height: ${3}px; background-color: ${color};border-top-right-radius: 100%;border-bottom-right-radius: 100%;z-index: -1;"></div>                  
    `;


    htmlContent += `</div>`


    return (
        <View className={styles.circuitContainer}>
            <View >
                <Text styles={styles.text}>Circuito</Text>
            </View>
            <HTML html={htmlContent} />
        </View>
    )
}

const styles = StyleSheet.create({
    circuitContainer: {
        padding: 20,
    },
    text: {
        fontSize: 17,
        textAlign: 'center'
    }
})