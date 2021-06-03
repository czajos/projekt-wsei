import React, { useState, useEffect } from 'react';

import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { Rating, AirbnbRating } from 'react-native-ratings';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios'




export function EditProfilUser({ navigation }) {
    const [image, setImage] = useState(null)
    const [nazwarestauracji, setNazwaRestauracji] = useState('')
    const [name, setName] = useState()
    const [lastName, setLastName] = useState()
    const [numertel, setNumerTel] = useState()
    const [data, setData] = useState([])
    const [data2, setData2] = useState([])

    const [loading, setLoading] = useState(true)



    useEffect(() => {
        getData()
    }, [])


    const getData = () => {
        axios
            .get('http://192.168.1.143:5000/login/me')

            .then(function (response) {
                // handle success
                // const data = response.data.data.restaurant
                console.log(response.data)

                setData2(response.data)

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

    // const pullData = () => {
    //     axios
    //         .post('http://192.168.1.143:5000/restaurant/update', {
    //             category: typrestauracji,
    //             params: {
    //                 user_id: 1
    //             }
    //         }
    //         )
    // }
    const pullData = () => {
        axios
            .put('http://192.168.1.143:5000/login/update', {
                phone: data2.phone,
            })
            .then(function (response) {
                // setTypRestauracji({ category: response.data.data })
                // console.log(data.category)
                alert(JSON.stringify(response.data));
            })
            .catch(function (error) {
                alert(error.message);
            });
    }




    const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: true
        }).then(image => {

            console.log(image)
            setImage(image.path)
        });
    };

    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: 'green', padding: 5 }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back-outline"
                        color={'white'}
                        size={30}></Icon>
                </TouchableOpacity>
            </View>


            <ScrollView>

                <View style={{ marginTop: 100 }}>
                    <Text style={{ marginLeft: 10, fontSize: 16, color: 'grey' }}>Imie i nazwisko</Text>
                    <View style={styles.boxInput}>

                        <TextInput

                            style={styles.txtInput}
                            type="text"
                            // onChangeText={text => setData({ ...data, category: text })}
                            autoCorrect={false}
                            value={`${data ? data2.name : ''}`}

                        />
                        <TouchableOpacity>
                            <Icon name="create-outline"
                                color={'white'}
                                size={20}
                                style={{ padding: 10, backgroundColor: '#3B9CE6', borderRadius: 10 }}></Icon>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ marginTop: 15 }}>
                    <Text style={{ marginLeft: 10, fontSize: 16, color: 'grey' }}>Tel. kontaktowy</Text>
                    <View style={styles.boxInput}>
                        <TextInput
                            placeholder=""
                            style={styles.txtInput}
                            keyboardType='numeric'
                            onChangeText={text => setData2({ ...data2, phone: text })}
                            autoCorrect={false}
                            value={`${data2 ? data2.phone : ''}`}

                        />
                        <TouchableOpacity>
                            <Icon name="create-outline"
                                color={'white'}
                                size={20}
                                style={{ padding: 10, backgroundColor: '#3B9CE6', borderRadius: 10 }}></Icon>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ alignItems: 'center', flexDirection: 'column', justifyContent: 'center', padding: 12 }}>
                    <TouchableOpacity style={styles.btnStyle} onPress={pullData}>
                        <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }} >Zapisz</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>
    )
}
export default EditProfilUser;


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
        resizeMode: 'cover'

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
    txtInput: {

        width: '80%',
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
    btnStyle: {
        backgroundColor: '#5B9CE6',
        padding: 20,
        height: 30,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50

    }

})