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
    const [secondData, setSecondData] = useState([])
    const [loading, setLoading] = useState(true)
    const [hour, setHour] = useState()
    const [minute, setMinute] = useState()
    const [year, setYear] = useState()
    const [month, setMonth] = useState()
    const [day, setDay] = useState()
    const [idTable, setIdTable] = useState()

    const isFocused = useIsFocused(); //odświeża stan ekranu po jego wyrenderowaniu
    useEffect(() => {
        getData()
        // getDataRest()
    }, [isFocused])

    const getData = () => {
        axios
            .get(`http://192.168.1.143:5000/restaurant/getByCity/${item}`)

            .then(function (response) {
                // handle success
                
                // console.log(data)
                setData(response.data.data.restaurant)
                console.log(item)


                // setImage({uri: img})
                // setLoading(false)

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


    const choiceRest = (item) => {
        setIdTable(item)
        console.log(item)
        setLoading(false)
        //  navigation.navigate('Wybierz stolik')
    }

    const load = () => {
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
                {/* <Image style={styles.imageStyleLogo} source={require('../../logo.png')}></Image> */}
            </View>
            <View style={{marginTop:70}}>
                    <Text style={styles.txtStyleName}>{`${data ? data.name : ''}`}</Text>
                </View>
                <View style={styles.nameRestaurant}>
                    <Text style={styles.txtStyle1}>Kiedy chcesz zarezerwować stolik ?</Text>
                </View>
                <View style={styles.buttonArea}>
                    <TouchableOpacity style={styles.btn} onPress={getData}>
                        <Text style={{ color: 'white', fontSize: 18,fontWeight:'bold' }} >Teraz</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={{ color: 'white', fontSize: 18,fontWeight:'bold' }}>Dziś</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={{ color: 'white', fontSize: 18,fontWeight:'bold' }}>W inny dzień</Text>
                    </TouchableOpacity>
                </View>
         
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
    
    

})