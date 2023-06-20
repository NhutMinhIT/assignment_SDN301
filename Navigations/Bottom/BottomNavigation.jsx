import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from '../../Components/HomeScreen'
import FavouriteScreen from '../../Components/FavouriteScreen'
import { Ionicons } from 'react-native-vector-icons';

const Bottom = createBottomTabNavigator()

const BottomNavigation = () => {
    return (
        <Bottom.Navigator>
            <Bottom.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} />
                    ),
                    headerShown: false
                }}
            />
            <Bottom.Screen
                name="Favourite"
                component={FavouriteScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="heart" color={color} size={size} />
                    ),
                    headerShown: false
                }}
            />
        </Bottom.Navigator>
    )
}

export default BottomNavigation

const styles = StyleSheet.create({})