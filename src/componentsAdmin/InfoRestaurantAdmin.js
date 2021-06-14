import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios'
import { useIsFocused } from '@react-navigation/native';



export function InfoRestaurantAdmin({ route,navigation }) {

    const [data, setData] = useState([])
    const [idRest, setIdRest] = useState([])
    const isFocused = useIsFocused()
    const {item}=route.params

    useEffect(() => {
        getData()
    },[isFocused])

    const getData=()=>{
        axios
             .get(`http://192.168.1.143:5000/admin/getRestaurant/${item}`)
             .then(response =>{
                 setData(response.data.data)
                 setIdRest(response.data.data.rest_id)

             })
             .catch(function (error) {
                // handle error
                alert(error.message);
            })
            // .finally(function () {
            //     // always executed
            //     alert('Finally called');
            // });
    }

    const comments=()=>{
        console.log(idRest)
        navigation.navigate('Komentarze admin',{idRest})
    }
    const tables=()=>{
        console.log(idRest)
        navigation.navigate('Stoliki admin',{idRest})
    }

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
                        <Text style={styles.text}>Imie i nazwisko</Text>
                        <Text style={styles.text2}>{data.user_name}</Text>
                    </View>
                    <View style={styles.styleInItem}>
                        <Text style={styles.text}>Nazwa restauracji</Text>
                        <Text style={styles.text2}>{data.res_name}</Text>
                    </View>
                    <View style={styles.styleInItem}>
                        <Text style={styles.text}>Typ restauracji</Text>
                        <Text style={styles.text2}>{data.category}</Text>
                    </View>
                    <View style={styles.styleInItem}>
                        <Text style={styles.text}>Miasto</Text>
                        <Text style={styles.text2}>{data.city}</Text>
                    </View>
                    <View style={styles.styleInItem}>
                        <Text style={styles.text}>Adres restauracji</Text>
                        <Text style={styles.text2}>{data.street}</Text>
                    </View>
                   
                    <View style={styles.styleInItem}>
                        <Text style={styles.text}>Numer telefonu</Text>
                        <Text style={styles.text2}>{data.phone}</Text>
                    </View>
                </View>
                <TouchableOpacity style={{ marginTop: 40, backgroundColor: 'red', width: 150, padding: 5, borderRadius: 50, alignItems: 'center' }} onPress={() => navigation.goBack()}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Wróć</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 40, backgroundColor: 'red', width: 150, padding: 5, borderRadius: 50, alignItems: 'center' }} onPress={comments}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Komentarze</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ marginTop: 40, backgroundColor: 'red', width: 150, padding: 5, borderRadius: 50, alignItems: 'center' }} onPress={tables}>
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Stoliki</Text>
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