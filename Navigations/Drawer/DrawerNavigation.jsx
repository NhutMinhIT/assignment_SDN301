import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import BottomNavigation from '../Bottom/BottomNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => {
    const [searchText, setSearchText] = useState('');

    return (
        <Drawer.Navigator
            initialRouteName='Album'
            screenOptions={{
                headerShown: true,
                drawerStyle: styles.drawer,
                headerStyle: styles.header,
                headerTintColor: '#fff',
                headerTitleStyle: styles.headerTitle,
            }}
        >
            <Drawer.Screen
                name='Album'
                component={BottomNavigation}
                options={{
                    headerRight: () => (
                        <View style={styles.searchContainer}>
                            <TextInput
                                style={styles.searchInput}
                                placeholder='Search...'
                                onChangeText={text => setSearchText(text)}
                                value={searchText}
                            />
                            <TouchableOpacity style={styles.searchButton}>
                                <Ionicons name='search' size={24} color='#fff' />
                            </TouchableOpacity>
                        </View>
                    ),
                }}
            />
            <Drawer.Screen name='Setting' component={BottomNavigation} />
        </Drawer.Navigator>
    );
};

const styles = StyleSheet.create({
    drawer: {
        backgroundColor: '#f0f0f0',
    },
    header: {
        backgroundColor: '#f7ba07',
    },
    headerTitle: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 10,
    },
    searchInput: {
        backgroundColor: '#fff',
        padding: 8,
        borderRadius: 8,
        width: 200,
    },
    searchButton: {
        marginLeft: 8,
        padding: 8,
        backgroundColor: '#ccc',
        borderRadius: 8,
    },
});

export default DrawerNavigation;
