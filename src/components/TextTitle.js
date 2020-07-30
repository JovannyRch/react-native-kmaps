import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Title = () => {
    return (
        <View>
            <Text style={styles.text}>Mapas de Karnaugh</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 40,
        color: '#3880ff',
        fontWeight: 'bold',
        marginBottom: 40,
    }
})

export default Title;