import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Pressable, TouchableOpacity } from 'react-native';
import flowers from '../data';
import { Ionicons } from 'react-native-vector-icons';
import FilterCategory from './FilterCategory';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

const Product = () => {

    const navigation = useNavigation();

    const [filteredCategory, setFilteredCategory] = useState([]);
    const [flowerAlbum, setFlowerAlbum] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    useFocusEffect(
        React.useCallback(() => {
            loadFlowers();
        }, [])
    );

    const loadFlowers = async () => {
        try {
            const storedFlowers = await AsyncStorage.getItem('flowers');
            if (storedFlowers) {
                const parsedFlowers = JSON.parse(storedFlowers);
                setFlowerAlbum(parsedFlowers);
                applyFilter(parsedFlowers, selectedCategory);
            } else {
                setFlowerAlbum(flowers);
                applyFilter(flowers, selectedCategory);
            }
        } catch (error) {
            console.log('Error retrieving flowers from AsyncStorage:', error);
        }
    };

    useEffect(() => {
        loadFlowers();
    }, []);

    useEffect(() => {
        const saveFlowers = async () => {
            try {
                await AsyncStorage.setItem('flowers', JSON.stringify(flowerAlbum));
            } catch (error) {
                console.log('Error saving flowers to AsyncStorage:', error);
            }
        };

        saveFlowers();
    }, [flowerAlbum]);

    const applyFilter = (flowers, category) => {
        let filteredFlowers = flowers;
        if (category !== 'All') {
            filteredFlowers = flowers.filter((flower) => flower.category === category);
        }
        setFilteredCategory(filteredFlowers);
    };

    const handleFilterCategory = (category) => {
        setSelectedCategory(category);
        applyFilter(flowerAlbum, category);
    };

    const handleFavourite = (flower) => {
        const updatedFlowerAlbum = flowerAlbum.map((item) => {
            if (item.id === flower.id) {
                return { ...item, favourite: !item.favourite };
            }
            return item;
        });

        setFlowerAlbum(updatedFlowerAlbum);
        applyFilter(updatedFlowerAlbum, selectedCategory)
    };

    return (
        <ScrollView>
            <FilterCategory onCheckFilter={handleFilterCategory} />
            <View style={styles.container}>
                {filteredCategory.length > 0 ? (
                    filteredCategory.map((flower) => (
                        <TouchableOpacity
                            style={styles.card}
                            key={flower.id}
                            onPress={() => {
                                navigation.navigate('Detail', { flowerDetail: flower });
                            }}
                        >
                            <Pressable style={styles.iconContainer} onPress={() => handleFavourite(flower)}>
                                {flower.favourite === true ? (
                                    <Ionicons name="heart" size={24} color="#fa1905" />
                                ) : (
                                    <Ionicons name="heart-outline" size={24} color="black" />
                                )}
                            </Pressable>
                            <Image style={styles.image} source={flower.image} />
                            <Text style={styles.name}>{flower.name}</Text>
                        </TouchableOpacity>
                    ))
                ) : (
                    <Text>No flowers found.</Text>
                )}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingTop: 20,
        paddingBottom: 25,
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
        borderRadius: 100,
        width: '60%',
        height: '60%',
        resizeMode: 'contain',
        marginBottom: 20,
    },
    name: {
        fontSize: 16,
        textAlign: 'center',
        fontWeight: '700',
    },
});

export default Product;
