import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { Rating, AirbnbRating } from 'react-native-ratings';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios'
import { FlatList } from 'react-native-gesture-handler';
import { SwipeListView } from 'react-native-swipe-list-view'
import { useIsFocused } from '@react-navigation/native';




export function Rezerwation({ navigation }) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const isFocused=useIsFocused()

    useEffect(()=>{
// getData()
    },[isFocused])

    const getData=()=>{
        axios
            .get(`http://192.168.1.143:5000/reserwation/get/${2}`)
            .then(function (response) {
                // alert(JSON.stringify(response.data));
                setData(response.data.data)
            })
            .catch(function (error) {
                alert(error.message);
            });
    }

    const deleteRezerwation=()=>{
        axios
             .delete(``)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back-outline"
                        color={'white'}
                        size={30}></Icon>
                </TouchableOpacity>
                <Image style={styles.imageStyleLogo} source={require('../../logodlafirm.png')}></Image>
            </View>
            <View >
                <Text style={styles.textRezerwation}>Rezerwacje</Text>
            </View>
            <SwipeListView
                data={data}
                keyExtractor={(item, index) => {
                    return index.toString()
                }}
                renderItem={({ item }) => {
                    console.log('item', item)
                    return (
                        <View style={{ alignItems: 'center', marginTop: 20 }}>
                            <View style={styles.item}>
                                <View style={styles.styleInItem}>
                                    <Text style={styles.text}>Numer stolika:</Text>
                                    <Text style={styles.text2}>Dane..</Text>
                                </View>
                                <View style={styles.styleInItem}>
                                    <Text style={styles.text}>Data:</Text>
                                    <Text style={styles.text2}>Godzina:</Text>
                                </View>
                                <View style={styles.styleInItem}>
                                    <Text style={styles.text}>Godzina:</Text>
                                    <Text style={styles.text2}>Godzina:</Text>
                                </View>
                                <TouchableOpacity style={{ marginTop: 20, backgroundColor: 'red', width: 150, padding: 5, borderRadius: 50, alignItems: 'center' }}>
                                    <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>Anuluj rezerwacje</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                    )
                }}
            />

        </View>
    )
}
export default Rezerwation;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',


    },
    header: {
        flexDirection: 'row',
        backgroundColor: 'green',
        width: '100%',
        resizeMode: "contain",
        justifyContent: 'flex-start',
        height: 80

    },
    imageStyleLogo: {
        width: '80%',
        resizeMode: "contain",
        justifyContent: "center",
        alignItems: 'center',
        height: 75,
        marginLeft: 25

    },

    nameRestaurant: {
        justifyContent: 'space-around',

        flexDirection: 'row',
        marginTop: 100
    },
    buttonArea: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        padding: 40
    },

    btn: {
        backgroundColor: '#3B9CE6',
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },
    text: {
        fontSize: 17,
        color: 'black'
    },
    text2: {
        fontSize: 17,
        color: 'green'
    },

    boxInput: {
        flexDirection: 'row',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '80%',
        justifyContent: 'center',
        marginLeft: 10
    },
    btnStyle: {
        backgroundColor: '#5B9CE6',
        padding: 20,
        height: 30,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50

    },
    item: {
        backgroundColor: 'white',
        height: 'auto',
        width: '80%',
        padding: 10,
        // marginVertical: 8,
        marginHorizontal: 16,
        // alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0.5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1,

        elevation: 5,
        borderRadius: 10
    },
    styleInItem: {
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-between'
    },
    textRezerwation: {
        fontSize: 22,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center'
    },

})