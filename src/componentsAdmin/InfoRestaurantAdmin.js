import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { Rating, AirbnbRating } from 'react-native-ratings';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios'
import { FlatList } from 'react-native-gesture-handler';



export function InfoRestaurantAdmin({ navigation }) {

    const [data, setData] = useState([])

    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: 'green', padding: 5 }}>
                
                <View style={{ alignItems: 'center', marginTop: -10, padding: 10 }}>
                    <Text style={{ fontSize: 35, color: 'white', alignItems: 'center', fontWeight: 'bold' }}>Inforamcje o restauracji</Text>
                </View>
            </View>
            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <View style={styles.item}>
                    <View style={styles.styleInItem}>
                        <Text style={styles.text}>Nazwa restauracji</Text>
                        <Text style={styles.text2}>Dane</Text>
                    </View>
                    <View style={styles.styleInItem}>
                        <Text style={styles.text}>Typ restauracji</Text>
                        <Text style={styles.text2}>Dane</Text>
                    </View>
                    <View style={styles.styleInItem}>
                        <Text style={styles.text}>Miasto</Text>
                        <Text style={styles.text2}>Dane</Text>
                    </View>
                    <View style={styles.styleInItem}>
                        <Text style={styles.text}>Adres restauracji</Text>
                        <Text style={styles.text2}>Dane</Text>
                    </View>
                   
                    <View style={styles.styleInItem}>
                        <Text style={styles.text}>Numer telefonu</Text>
                        <Text style={styles.text2}>Dane</Text>
                    </View>
                </View>
                <TouchableOpacity style={{ marginTop: 40, backgroundColor: 'red', width: 150, padding: 5, borderRadius: 50, alignItems: 'center' }} onPress={() => navigation.goBack()}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Wróć</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default InfoRestaurantAdmin;


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
        height: 70

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
        width: '100%',
        padding: 10,
        // marginVertical: 8,
        marginHorizontal: 16,


    },
    styleInItem: {
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-between'
    }

})