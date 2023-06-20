import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Product from './Product';
import { color } from 'react-native-reanimated';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Flowers Album</Text>
            <Product />
        </View>
    );
}

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
        backgroundColor: '#ccf5bc',

    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: 'italic',
        color: '#966202'
    }
});
