import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const FavouriteScreen = ({ navigation }) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Home")
        }, 2000)
    })
    return (
        <View>
        </View>
    )
}

export default FavouriteScreen

const styles = StyleSheet.create({})