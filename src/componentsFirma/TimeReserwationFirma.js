import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, ImageBackground, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { Rating, AirbnbRating } from 'react-native-ratings';
import { SwipeListView } from 'react-native-swipe-list-view'
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios'



export function TimeReserwationFirma({ route, navigation }) {
    // const { item } = route.params
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [loading2, setLoading2] = useState(true)
    const [year, setYear] = useState()
    const [month, setMonth] = useState()
    const [day, setDay] = useState()
    const [respo, setRespo] = useState([])
    const [responseTime, setResponseTime] = useState([])
    const [press, setPress] = useState(false)

    const isFocused = useIsFocused(); //odświeża stan ekranu po jego wyrenderowaniu
    useEffect(() => {
        getData()
        // getTime()
    }, [isFocused])

    //Pobranie danych o restauracji (zdjęcie i nazwa)
    const getData = () => {
        axios
            .get(`http://192.168.1.143:5000/restaurant/getBasicInfo`)

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
        // if(respo!=null){
        //     choiceTableOtherDay()
        // }
        // choiceTableOtherDay()
    };

    //Wysłanie daty 
    const getTime = () => {
        axios
            .post(`http://192.168.1.143:5000/table/getByDate/${6}`, {
                year: year,
                month: month,
                day: day
            })

            .then(function (response) {
                // handle success 
                setRespo(response.data.data.tables)
                console.log("kupa", response.data.data.tables)
                console.log('data', response.data.date_booking)
                setResponseTime(response.data.date_booking)

                // setData(response.data.data)
                // choiceTableOtherDay()

            })
            .catch(function (error) {
                // handle error
                alert(error.message);
            })
        // .finally(function () {
        //     // always executed
        //     alert('Finally called');
        // });

        //Zmiana koloru zatwierdzenia daty
        setPress(true)

    };

    //Przkierowanie na restauracje z widokiem stolików
    const choiceTableNow = () => {
        navigation.navigate('Zarezerwuj na dziś')
    }

    const choiceTableOtherDay = () => {

        navigation.navigate('Zarezerwuj na inny dzień', { respo, responseTime })
        //Zmiana koloru zatwierdzenia daty
        setPress(false)


    }

    const load = () => {
        setLoading(false)
    }

    const loadBack = () => {
        setLoading(true)
    }

    //Zmiana koloru po zatwierdzeniu daty
    const changeColor = {
        style: press ? styles.iconStylePress : styles.iconStyle,
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
                <Image style={styles.imageStyleLogo} source={{ uri: data.image_url }}></Image>
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
                            <TouchableOpacity   onPress={getTime}>
                                <Icon name="checkmark-circle-outline"
                                    {...changeColor}
                                    color={'white'}
                                    size={25}
                                ></Icon>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ margin: 10 }}>
                                <TouchableOpacity style={styles.btnStyle} onPress={loadBack}>
                                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Wróć</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ margin: 10 }}>
                                <TouchableOpacity style={styles.btnStyle} onPress={choiceTableOtherDay}>
                                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Szukaj</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                )}
        </View>
    )
}
export default TimeReserwationFirma;


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
        marginTop: 20,
        backgroundColor: '#5B9CE6',
        width: 150, padding: 5,
        borderRadius: 50,
        alignItems: 'center'

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
    iconStyle: {
        padding: 10,
        backgroundColor: 'red',
        borderRadius: 100,
        height: 45
    },
    iconStylePress: {
        padding: 10,
        backgroundColor: 'green',
        borderRadius: 100,
        height: 45

    }

})