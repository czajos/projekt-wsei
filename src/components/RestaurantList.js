import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import ComponentRest from './ComponentRest'
import Icon from 'react-native-vector-icons/Ionicons'
import { SwipeListView } from 'react-native-swipe-list-view'
import axios from 'axios'


export function RestaurantList({ navigation }) {
    const [city, setCity] = useState()
    const [loading, setLoading] = useState(true)
    const [data, setData] = useState()
    const [idRest,setIdRest]=useState()

    // const dupa =()=>{
    //     setLoading(false)
    // }

    const getData = () => {
        axios
            .get(`http://192.168.1.143:5000/restaurant/getByCity/${city}`)

            .then(function (response) {
                // handle success
                const data = response.data.data.tables
                // console.log(data)
                setData(response.data.data.restaurant)
                // setImage({uri: img})
                setLoading(false)

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
const choiceRest=(item)=>{
     setIdRest(item)
     console.log(item)

     navigation.navigate('Czas rezerwacji',{item}) //Przekazanie parametru id restauracji do następnego komponentu 
}
    

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
            <View style={styles.box2}>

                <View style={styles.container2}>
                    <TextInput
                        style={styles.txtInput}
                        onChangeText={text => setCity(text)}
                        value={city}
                    />
                    <TouchableOpacity style={styles.search} onPress={getData}>
                        <Text style={styles.txtSearch}>Szukaj</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {loading ?
                <View></View>
                : (<FlatList
                    style={{ padding:10 }}
                    // contentContainerStyle={{ 
                    //     flexDirection: 'row',
                    //     justifyContent: 'space-around',
                    //     flexWrap:'wrap' 

                    //     //Needed for wrapping for the items
                    // }}
                    data={data}
                    keyExtractor={(item, index) => {
                        return index.toString();
                    }}
                    renderItem={({ item }) => {
                        console.log("item", item)

                        return (

                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                                <TouchableOpacity onPress={()=>choiceRest(item.id)}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                                            <TouchableOpacity style={styles.logoRestStyles}>
                                                <Image style={{ width: 150, height: 150 }} source={{ uri: item.image_url }}></Image>
                                            </TouchableOpacity>
                                            <Text
                                                style={styles.nameRestStyles}>{item.name}</Text>

                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>

                        )
                    }}
                />
                )}

        </View>
    )
}
export default RestaurantList;


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

    box1: {
        // marginTop: 50

    },
    box2: {
        marginTop: 20,

    },
    titleBox: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        marginBottom: 30
    },
    inputAndroid: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center'

    },
    container2: {

        flexDirection: 'row',
        justifyContent: 'center',
        //alignItems: 'center',
    },
    txtInput: {
        borderWidth: 1,
        width: 250,
        height: 50,
        textAlign: 'center',
        backgroundColor: 'white',
        borderRadius: 50,
        borderWidth: 0,
        color: 'black',
        shadowOffset: {
            width: 0,
            height: 0.5,
        },
        shadowOpacity: 0.8,
        shadowRadius: 0.5,
        elevation: 8,
        fontSize: 16

    },
    search: {
        width: '30%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#5B9CE6',
        borderRadius: 50,
        marginLeft: 10,
        elevation: 8,
    },
    logoRestStyles: {

        backgroundColor: 'white',
        color: 'white',
        height: 150,
        width: 150,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        shadowOffset: {
            width: 0,
            height: 0.5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1,

        elevation: 5,
        borderRadius: 10
    },
    nameRestStyles: {
        backgroundColor: 'white',
        color: 'black',
        textAlign: 'center',
        height: 50,
        width: 150,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',

        shadowOffset: {
            width: 0,
            height: 0.5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1,

        elevation: 5,
        borderRadius: 10,
        fontSize:20,
        
    },
    txtSearch: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16
    },
})

// <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
// <TouchableOpacity onPress={() => navigation.navigate('Wybierz stolik')}>
//     <ComponentRest >
//         {/* <ImageBackground source={require('../../restable.jpg')} style={{width:150,height:150}}></ImageBackground> */}
//     </ComponentRest>
// </TouchableOpacity>
// <ComponentRest ></ComponentRest>
// </View>