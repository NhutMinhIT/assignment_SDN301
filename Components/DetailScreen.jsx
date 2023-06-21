import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Ionicons } from 'react-native-vector-icons';
import { TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DetailScreen = ({ route }) => {
    const { flowerDetail } = route.params;
    const [isFavourite, setIsFavourite] = useState(flowerDetail.favourite);

    useEffect(() => {
        const getFavouriteStatus = async () => {
            try {
                const storedFlowers = await AsyncStorage.getItem('flowers');
                if (storedFlowers) {
                    const parsedFlowers = JSON.parse(storedFlowers);
                    const flower = parsedFlowers.find(item => item.id === flowerDetail.id);
                    if (flower) {
                        setIsFavourite(flower.favourite);
                    }
                }
            } catch (error) {
                console.log('Error retrieving flowers from AsyncStorage:', error);
            }
        };

        getFavouriteStatus();
    }, []);

    const updateFavouriteStatus = async () => {
        const updatedFlower = { ...flowerDetail, favourite: !isFavourite };
        try {
            const storedFlowers = await AsyncStorage.getItem('flowers');
            if (storedFlowers) {
                const parsedFlowers = JSON.parse(storedFlowers);
                const updatedFlowers = parsedFlowers.map(item => {
                    if (item.id === updatedFlower.id) {
                        return updatedFlower;
                    }
                    return item;
                });
                await AsyncStorage.setItem('flowers', JSON.stringify(updatedFlowers));
                setIsFavourite(!isFavourite);
            }
        } catch (error) {
            console.log('Error updating flowers in AsyncStorage:', error);
        }
    };
    console.log(isFavourite)

    useEffect(() => {
        const saveFavouriteStatus = async () => {
            const storedFlowers = await AsyncStorage.getItem('flowers');
            if (storedFlowers) {
                const parsedFlowers = JSON.parse(storedFlowers);
                const updatedFlowers = parsedFlowers.map(item => {
                    if (item.id === flowerDetail.id) {
                        return { ...item, favourite: isFavourite };
                    }
                    return item;
                });
                await AsyncStorage.setItem('flowers', JSON.stringify(updatedFlowers));
            }
        };

        saveFavouriteStatus();
    }, [isFavourite]);

    return (
        <>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.tilteDetail}>Flower Detail</Text>

                </View>
                <TouchableOpacity onPress={updateFavouriteStatus}>
                    {isFavourite === true ? (
                        <Ionicons name="heart" size={24} color="#fa1905" />
                    ) : (
                        <Ionicons name="heart-outline" size={24} color="black" />
                    )}
                </TouchableOpacity>
                <Image source={flowerDetail.image} style={styles.imgDetail} />
                <View>
                    <Text style={styles.name}>{flowerDetail.name}</Text>
                    <Text style={styles.description}>{flowerDetail.description}</Text>
                </View>
            </View>
        </>
    );
};
export default DetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        marginRight: 20,
        marginLeft: 10,
    },
    title: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    tilteDetail: {
        fontSize: 25,
        fontWeight: '700',
        flex: 1,
    },
    imgDetail: {
        borderRadius: 100,
        width: '50%',
        height: 200,
        marginBottom: 20,
        alignSelf: 'center',
    },
    name: {
        fontSize: 25,
        fontWeight: 700,
        color: '#fa6a16',
    },
    description: {
        marginTop: 20,
        textAlign: 'justify',
        fontWeight: '400',
        fontStyle: 'italic',
    },
});