import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigation from './Drawer/DrawerNavigation';

import DetailScreen from '../Components/DetailScreen';

const Stack = createNativeStackNavigator()

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Drawer' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Drawer' component={DrawerNavigation} />
                <Stack.Screen name='Detail' component={DetailScreen} options={{ headerShown: true }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation

const styles = StyleSheet.create({})