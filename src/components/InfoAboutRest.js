import React, { useState, useEffect } from 'react';

import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { Rating, AirbnbRating } from 'react-native-ratings';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios'
import { FlatList } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';






export function InfoAboutRest({ route, navigation }) {
    const { item } = route.params
    const [nazwarestauracji, setNazwaRestauracji] = useState('')
    const [data, setData] = useState([])




    const isFocused = useIsFocused(); //odświeża stan ekranu po jego wyrenderowaniu
    useEffect(() => {
        getData()
        // getDataRest()
    }, [isFocused])

    const getData = () => {
        axios
            .get(`http://192.168.1.143:5000/restaurant/getInfo/${item}`)

            .then(function (response) {
                // handle success
                const data = response.data.data.restaurant
                console.log(data)
                setData(response.data.data.restaurant)
            })
            .catch(function (error) {
                // handle error
                alert(error.message);
            })
            .finally(function () {
                // always executed
                alert('Finally called');
            });
    };

    

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back-outline"
                        color={'white'}
                        size={30}></Icon>
                </TouchableOpacity>
                <Image style={styles.imageStyleLogo} source={require('../../logo.png')}></Image>
            </View>
            <View style={{ alignItems: 'center', marginTop: 10 }}>
                <View >
                    <Text style={styles.textOpinie}>Informacje o restauracji</Text>
                </View>
                
                    <View style={styles.styleInItem}>
                        
                      
                        <ScrollView>

                            <View style={{ marginTop: 15 }}>
                                <Text style={{ marginLeft: 10, fontSize: 16, color: 'grey' }}>Typ restauracji</Text>
                                <View style={styles.boxInput}>

                                    <Text style={styles.txtInput}>{`${data ? data.category : ''}`}</Text>

                                </View>
                            </View>
                            <View style={{ marginTop: 15 }}>
                                <Text style={{ marginLeft: 10, fontSize: 16, color: 'grey' }}>Miasto</Text>
                                <View style={styles.boxInput}>

                                    <Text style={styles.txtInput}>{`${data ? data.city : ''}`}</Text>

                                </View>
                            </View>

                            <View style={{ marginTop: 15 }}>
                                <Text style={{ marginLeft: 10, fontSize: 16, color: 'grey' }}>Adres lokalu</Text>
                                <View style={styles.boxInput}>
                                    <Text style={styles.txtInput}>{`${data ? data.street : ''}`}</Text>

                                </View>
                            </View>
                            <View style={{ marginTop: 15 }}>
                                <Text style={{ marginLeft: 10, fontSize: 16, color: 'grey' }}>Tel. kontaktowy</Text>
                                <View style={styles.boxInput}>
                                    <Text style={styles.txtInput}>{`${data ? data.phone : ''}`}</Text>

                                </View>
                            </View>

                            <View style={{ marginTop: 15 }}>
                                <Text style={{ marginLeft: 10, fontSize: 16, color: 'grey' }}>Opis</Text>
                                <View style={styles.boxInput}>
                                 <Text style={styles.txtInput}>{`${data ? data.description : ''}`}</Text>

                                </View>
                            </View>
                            <View style={{ alignItems: 'center', flexDirection: 'column', justifyContent: 'center', padding: 12 }}>
                                <TouchableOpacity style={styles.btnStyle} onPress={() => navigation.goBack()}>
                                    <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }} >Wróć</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                
            </View>
        </View>
    )
}
export default InfoAboutRest;


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

    textOpinie: {
        fontSize: 22,
        color: 'black',
        fontWeight: 'bold'
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
        borderRadius: 10,
        marginTop: 20
    },
    styleInItem: {
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-between'
    },
    txtInput: {

       
        height: 50,
        fontSize: 17,
        // borderBottomColor: 'black',
        // borderBottomWidth: 1,
        color: 'black'
    },

    boxInput: {
        flexDirection: 'row',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: '80%',
        justifyContent: 'center',
        marginLeft: 10
    },

})