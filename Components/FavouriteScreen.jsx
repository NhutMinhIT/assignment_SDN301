import React, { useState, useEffect, useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Text, Button, Pressable, StyleSheet, TouchableOpacity, Image, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import flowers from '../data';
import { MaterialIcons } from '@expo/vector-icons';

import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const FavouriteScreen = () => {
    const navigation = useNavigation();

    const [wishlists, setWishlists] = useState([]);

    const getFlower = async () => {
        try {
            const jsonWishlist = await AsyncStorage.getItem('flowers');
            if (jsonWishlist !== null) {
                const parsedWishlist = JSON.parse(jsonWishlist);
                setWishlists(parsedWishlist);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getFlower();
    }, []);

    useFocusEffect(
        useCallback(() => {
            getFlower();
        }, [])
    );

    const handleFavourite = async (flower) => {
        try {
            const updatedFlowersData = wishlists.map((item) => {
                if (item.id === flower.id) {
                    return {
                        ...item,
                        favourite: !item.favourite,
                    };
                }
                return item;
            });
            setWishlists(updatedFlowersData);
            await AsyncStorage.setItem('flowers', JSON.stringify(updatedFlowersData));
        } catch (error) {
            console.log(error);
        }
    };

    const clearWishlist = async () => {
        try {
            Alert.alert(
                'Xác Nhận',
                'Bạn Muốn Xóa Toàn Bộ Danh Sách Yêu Thích ? Bạn Chắc Chưa?',
                [
                    {
                        text: 'Hủy',
                        style: 'cancel'
                    },
                    {
                        text: 'Xác Nhận',
                        style: 'destructive',
                        onPress: () => {
                            AsyncStorage.removeItem('flowers');
                            setWishlists([]);
                        }
                    }
                ]
            );
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <ScrollView style={styles.containerBtn}>
            <TouchableOpacity style={styles.btn} onPress={clearWishlist}>
                <MaterialIcons name="delete-sweep" size={27} color="red" />
            </TouchableOpacity>

            <View style={styles.container}>
                {wishlists.map(wishlist => (
                    (wishlist && wishlist.favourite === true) && (
                        <TouchableOpacity style={styles.card} key={wishlist.id} onPress={() => { navigation.navigate('Detail', { flowerDetail: wishlist }) }} >
                            <Pressable style={styles.iconContainer} onPress={() => handleFavourite(wishlist)}>
                                <Ionicons name="heart" size={24} color='red' />
                            </Pressable>
                            <Image style={styles.image} source={wishlist.image} />
                            <Text style={styles.text}>{wishlist.name}</Text>
                        </TouchableOpacity>
                    )
                ))}
            </View>
        </ScrollView>
    );
};

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
        marginTop: 20,
        paddingBottom: 25
    },
    card: {
        width: '45%',
        height: 200,
        marginBottom: 25,
        alignContent: 'center',
        alignItems: 'center',
        marginTop: 5,
        backgroundColor: '#f7eba8',
        marginLeft: 10,
        borderRadius: 10,
        shadowColor: '#fcd7d4',
        shadowOffset: {
            width: 10,
            height: 20,
        },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    iconContainer: {
        position: 'absolute',
        bottom: 10,
        right: 4,
        zIndex: 1,
    },
    image: {
        borderRadius: 80,
        width: '60%',
        height: '60%',
        resizeMode: 'contain',
        marginBottom: 20,
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '500'
    },
});

export default FavouriteScreen;
