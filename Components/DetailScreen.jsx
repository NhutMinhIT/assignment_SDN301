import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from 'react-native-vector-icons'
import { TouchableOpacity } from 'react-native';

const DetailScreen = ({ route }) => {
    const { flowerDetail } = route.params
    return (
        <>
            <View style={styles.container}>
                <View style={styles.title}>
                    <Text style={styles.tilteDetail}>Flower Detail</Text>
                    <TouchableOpacity>
                        <Pressable>
                            <MaterialIcons name="delete-sweep" size={27} color="red" />
                        </Pressable>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Pressable>
                        {flowerDetail.favourite === true ? (
                            <Ionicons name="heart" size={24} color="#fa1905" />
                        ) : (
                            <Ionicons name="heart-outline" size={24} color="black" />
                        )}
                    </Pressable>
                </TouchableOpacity>
                <Image
                    source={flowerDetail.image}
                    style={styles.imgDetail}
                />
                <View>

                    <Text style={styles.name}>{flowerDetail.name}</Text>
                    <Text style={styles.description}>{flowerDetail.description}</Text>
                </View>
            </View>
        </>
    )
}

export default DetailScreen


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        marginRight: 20,
        marginLeft: 10
    },
    title: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    tilteDetail: {
        fontSize: 25,
        fontWeight: '700',
        flex: 1
    },
    imgDetail: {
        borderRadius: 100,
        width: "50%",
        height: 200,
        marginBottom: 20,
        alignSelf: 'center'
    },
    name: {
        fontSize: 25,
        fontWeight: 700,
        color: '#fa6a16'
    },
    description: {
        marginTop: 20,
        textAlign: 'justify',
        fontWeight: '400',
        fontStyle: 'italic'
    }


});

