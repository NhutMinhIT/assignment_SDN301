import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, Button, Pressable, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native'
import { Ionicons } from 'react-native-vector-icons'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'

const FavouriteScreen = () => {
    const navigation = useNavigation()
    return (
        <ScrollView style={styles.containerBtn}>
            <Pressable style={styles.btn}>
                <Text style={styles.btnText}>Clear All</Text>
            </Pressable>
            <View style={styles.container}>
                <React.Fragment>
                    <TouchableOpacity style={styles.card} onPress={() => { navigation.navigate('Detail') }} >
                        <Pressable style={styles.iconContainer}>
                            <Ionicons name="heart" size={24} color='red' />
                        </Pressable>
                        <Image
                            style={styles.image}
                        />
                        <Text style={styles.text}></Text>
                    </TouchableOpacity>
                </React.Fragment>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    containerBtn: {
        margin: 12,
    },
    btn: {
        padding: 10,
    },
    btnText: {
        color: 'red',
        fontWeight: '500',
        fontSize: 17
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 5,
        paddingBottom: 25
    },
    card: {
        width: '46%',
        height: 220,
        marginBottom: 15,
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        backgroundColor: '#b7ede6',
        marginLeft: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    iconContainer: {
        position: 'absolute',
        top: 10,
        left: 4,
        zIndex: 1,
    },
    image: {
        width: '80%',
        height: '80%',
        resizeMode: 'contain',
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '500'
    },
})

export default FavouriteScreen