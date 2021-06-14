import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import axios from 'axios'
import { SwipeListView } from 'react-native-swipe-list-view'
import { useIsFocused } from '@react-navigation/native';


export function CompanyUsers({ navigation }) {
    const [data, setData] = useState([])
    const isFocused = useIsFocused()

    useEffect(() => {
        getData()
    }, [isFocused])

    const getData=()=>{
        axios
        .get(`http://192.168.1.143:5000/admin/getAllRestaurant`)
        .then(response =>{
            setData(response.data.data)
        })
    }

    const deleteUser=()=>{
        axios
             .delete(``)
    }

    const info = (item) => {
        console.log(item)
        navigation.navigate('Info rest',{item})
    }

    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: 'green', padding: 5 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back-outline"
                        color={'white'}
                        size={30}></Icon>
                </TouchableOpacity>
                <View style={{ alignItems: 'center', marginTop: -10, padding: 10 }}>
                    <Text style={{ fontSize: 35, color: 'white', alignItems: 'center', fontWeight: 'bold' }}>Restauracje</Text>
                </View>
            </View>
            <View style={{ alignItems: 'center', marginTop: 20 }}>
                <SwipeListView
                    data={data}
                    keyExtractor={(item, index) => {
                        return index.toString()
                    }}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.item}>
                                <TouchableOpacity style={styles.styleInItem} onPress={()=>info(item.id)}>
                                    <Text style={styles.text}>{item.res_name}</Text>
                                    <TouchableOpacity style={{ backgroundColor: 'red', width: 150, padding: 5, borderRadius: 50, alignItems: 'center' }}>
                                        <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>Usuń użytkownika</Text>
                                    </TouchableOpacity>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />

            </View>
        </View>
    )
}
export default CompanyUsers;


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
        // alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0.5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1,

        elevation: 5,

    },
    styleInItem: {
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-between'
    }

})