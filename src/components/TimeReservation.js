import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { Rating, AirbnbRating } from 'react-native-ratings';
import { SwipeListView } from 'react-native-swipe-list-view'
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios'



export function TimeReservation({ route, navigation }) {
    const { item } = route.params
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [year, setYear] = useState()
    const [month, setMonth] = useState()
    const [day, setDay] = useState()

    const isFocused = useIsFocused(); //odświeża stan ekranu po jego wyrenderowaniu
    useEffect(() => {
        getData()
    }, [isFocused])
//Pobranie danych o restauracji (zdjęcie i nazwa)
    const getData = () => {
        axios
            .get(`http://192.168.1.143:5000/restaurant/getBasicInfo/${item}`)

            .then(function (response) {
                // handle success 

                console.log(response.data.data)
                setData(response.data.data)
            })
            .catch(function (error) {
                // handle error
                alert(error.message);
            })
            // .finally(function () {
            //     // always executed
            //     alert('Finally called');
            // });
    };

//Wysłanie daty 
    const getTime = () => {
        axios
            .post(`http://192.168.1.143:5000/table/getByDate/${item}`,{
                year:year,
                month:month,
                day:day
            })

            .then(function (response) {
                // handle success 

                console.log(response.data.data)
                setData(response.data.data)
            })
            .catch(function (error) {
                // handle error
                alert(error.message);
            })
            // .finally(function () {
            //     // always executed
            //     alert('Finally called');
            // });
            choiceTableToday()
    };

//Przkierowanie na restauracje z widokiem stolików
    const choiceTableNow = () => {
        navigation.navigate('Wybierz stolik', { item })
    }

const choiceTableToday =()=>{
    navigation.navigate('Wybierz stolik', { item })
    
}

    const load = () => {
        setLoading(false)
    }

    const loadBack = () => {
        setLoading(true)
    }

    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: 'green', padding: 5 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back-outline"
                        color={'white'}
                        size={30}></Icon>
                </TouchableOpacity>
            </View>
            <View style={styles.header} >
                <View style={styles.imageStyleLogo}></View>
                <Image style={styles.imageStyleLogo} source={{uri: data.image_url}}></Image>
            </View>
            <View style={{ marginTop: 70 }}>
                <Text style={styles.txtStyleName}>{`${data ? data.name : ''}`}</Text>
            </View>
            {loading ?
                <>
                    <View style={styles.nameRestaurant}>
                        <Text style={styles.txtStyle1}>Kiedy chcesz zarezerwować stolik ?</Text>
                    </View>
                    <View style={styles.buttonArea}>
                        <TouchableOpacity style={styles.btn} onPress={choiceTableNow}>
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }} >Dziś</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn} onPress={load}>
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>W inny dzień</Text>
                        </TouchableOpacity>
                    </View>
                </>
                : (
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.txtStyle1}>Data rezerwacji</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                            <TextInput
                                placeholder="rok /"
                                style={styles.txtInput}
                                onChangeText={text => setYear(text)}
                                value={year}
                                keyboardType='numeric'
                            />
                            <TextInput
                                placeholder="mies /"
                                style={styles.txtInput}
                                onChangeText={text => setMonth(text)}
                                value={month}
                                keyboardType='numeric'
                            />
                            <TextInput
                                placeholder="dzień"
                                style={styles.txtInput}
                                onChangeText={text => setDay(text)}
                                value={day}
                                keyboardType='numeric'
                            />
                        </View>
                        <View style={{flexDirection:'row'}}>
                        <TouchableOpacity style={{ marginTop: 20, backgroundColor: '#5B9CE6', width: 150, padding: 5, borderRadius: 50, alignItems: 'center' }} onPress={loadBack}>
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Wróć</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginTop: 20, backgroundColor: '#5B9CE6', width: 150, padding: 5, borderRadius: 50, alignItems: 'center' }} onPress={getTime}>
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Szukaj</Text>
                        </TouchableOpacity>
                        </View>
                    </View>

                )}
        </View>
    )
}
export default TimeReservation;


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
        justifyContent: 'center',
        height: 50

    },
    imageStyleLogo: {
        position: 'absolute',
        width: 150,
        height: 150,
        backgroundColor: 'white',
        borderRadius: 100,
        shadowOffset: {
            width: 0,
            height: 0.5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        elevation: 4,
        marginTop: -25


    },
    nameRestaurant: {
        justifyContent: 'space-around',

        flexDirection: 'row',
        marginTop: 80
    },
    buttonArea: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        padding: 10
    },

    btn: {
        backgroundColor: '#3B9CE6',
        height: 60,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
    },

    txtStyle1: {
        fontSize: 30,
        color: 'black',
        padding: 10,
        textAlign: 'center',
        // fontWeight:'bold'
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
    txtStyleName: {
        fontSize: 20,
        color: 'black',
        padding: 10,
        textAlign: 'center',
        // fontWeight:'bold'
    },
    txtInput: {
        alignSelf: 'stretch',
        width: 60,
        height: 50,
        fontSize: 17,
        borderRadius: 3,
        alignItems: 'center',
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        marginBottom: 10
    },


})