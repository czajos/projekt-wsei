import ImagePicker from 'react-native-image-crop-picker';
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import Animated, { onChange } from 'react-native-reanimated';
// import BottomSheet from 'reanimated-bottom-sheet'
// import Swipeout from 'react-native-swipeout'
import { SwipeListView } from 'react-native-swipe-list-view'
// import Icon from 'react-native-vector-icons/Ionicons'
import axios from 'axios'
// import FormData from 'form-data'

global.Buffer = global.Buffer || require('buffer').Buffer


export function ListAddTable({ navigation }) {
    const [bottomPanel, setBottomPanel] = useState(React.createRef())
    const [places, setPlaces] = useState()
    // const state = useMemo(() => ({ fileList }), [fileList]);
    const [image, setImage] = useState()
    const [numberTable, setNumberTable] = useState()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // imageGet()
        getData()
    }, [])

    const getData = () => {
        axios
            .get('http://192.168.1.143:5000/table/getAll/4')

            .then(function (response) {
                // handle success
                // const data = response.data.data.tables
                // console.log(data)
                setData(response.data.data.tables)
                // console.log(response.data.data.tables)
                // const img=data[0].image_url
                // console.log(img)
            
                // setImage({uri: img})
                setLoading(false)
                // imageGet()
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


    
    const imageGet = () => {
        axios
            .get('http://192.168.1.143:5000/table/getAll/4')
               
            .then(function (response) {
                const data = response.data.data.tables
                const img=data[0].image_url
                 Buffer.from(img, 'binary').toString('base64')
                 
                  console.log(img)
                // setImage(data[0].image_url)
                setImage(img)
            })
            .catch(function (error) {
                // handle error
                alert(error.message);
            })
            .finally(function () {
                // always executed
                alert('Finally called');
            });
    }
let img={uri: 'http://localhost:5000/2021-05-29T16-12-34.841Zimage.jpg'}


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.imageStyleLogo} source={require('../../logodlafirm.png')}></Image>
            </View>
            <View
                style={{ flex: 1 }}>
                <View style={styles.dodajStoliki}>
                    <Text style={styles.txtStyle1}>Lista twoich stolików</Text>
                </View>
            </View>
            {loading ?
                <View></View>
                : (
                    <FlatList
                        style={{ marginTop: 60 }}
                        data={data}
                        keyExtractor={(item, index) => {
                            return index.toString();
                        }}
                        renderItem={({ item }) => {
                            console.log("item", item)
                            return (
                                <>
                                    <View style={styles.item}>
                                        <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
                                            <Text style={styles.txtStyle1}>Stolik numer</Text>
                                            <TextInput
                                                style={styles.txtStyle1}
                                                keyboardType='numeric'
                                                // onChangeText={text => setNumberTable(text)}
                                                value={item.number_table.toString()}
                                            ></TextInput>

                                        </View>
                                        <TouchableOpacity style={{ width: '100%' }} >
                                            <Image style={{ width: '100%', height: 300, resizeMode: 'contain', justifyContent: 'center', alignItems: 'center' }} source={img} ></Image>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={styles.podajLiczbeMiejscStyle}>
                                        <Text style={styles.txtStyle1}
                                        // onChangeText={}
                                        >Liczba miejsc</Text>
                                        <TextInput
                                            style={styles.styleInput}
                                            //  keyboardType='text'
                                            type='number'
                                            // onChangeText={text => setPlaces(ftext)}
                                            value={item.numb_seats.toString()}
                                        ></TextInput>
                                    </View>
                                </>
                            )
                        }}
                    />

                )}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, opacity: 1, backgroundColor: 'white' }}>
                <TouchableOpacity style={styles.btnFooterStyle} >
                    <Text style={styles.txtStyleBottomSheet} onPress={() => navigation.navigate('Dodaj')}>+ Nowy stolik</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnFooterStyle} onPress={getData}>
                    <Text style={styles.txtStyleBottomSheet}>Zatwierdź</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}

const resizeMode = 'center';

ListAddTable.navigationOptions = {
    headerShown: false,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        width: '100%',
        borderWidth: 1,

    },
    header: {
        flexDirection: 'row',
        backgroundColor: 'green',
        width: '100%',
        resizeMode: "contain",
        justifyContent: "center",
        height: 80,

    },
    dodajStoliki: {
        backgroundColor: '#F0F0F0',
        margin: 5,
        
    },

    imageStyleLogo: {
        width: '80%',
        resizeMode: "contain",
        justifyContent: "center",
        alignItems: 'center',
        height: 75,
    },
    item: {
        backgroundColor: 'white',
        // borderColor: 'grey',
        //borderWidth: 1,
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        height: 'auto',
        alignItems: 'center',
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
    podajLiczbeMiejscStyle: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        height: 60,
        alignItems: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 0.5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1,
        marginTop: -5,
        marginBottom: 15,
        elevation: 5,
        borderRadius: 10
    },
    txtStyle1: {
        fontSize: 20,
        color: 'black',
        padding: 10,
        textAlign: 'center'
    },
    txtStyleBottomSheet: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'center',

    },
    txtStyleBottomSheetBack: {
        fontSize: 20,
        color: '#1B92C4',
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'center',

    },
    btnAddPhoto: {
        backgroundColor: '#1B92C4',
        alignItems: 'center',
        padding: 3,
        marginVertical: 22,
        marginHorizontal: '10%',
        borderRadius: 50
    },
    btnAddPhotoBack: {
        backgroundColor: 'white',
        alignItems: 'center',
        padding: 3,
        marginVertical: 22,
        marginHorizontal: '10%',
        borderRadius: 50,
        borderWidth: 4,
        borderColor: '#1B92C4'
    },
    btnFooterStyle: {
        backgroundColor: '#1B92C4',
        width: '49%',
        height: 50,
        borderRadius: 50,

    },
    styleInput: {
        width: 50,
        borderColor: 'green',
        borderWidth: 2,
        borderRadius: 100,
        backgroundColor: 'white',
        fontSize: 20,
        justifyContent: 'flex-end',
        height: 50,
        textAlign: 'center',
        color: 'red',
        // borderBottomColor: 'black',
        // borderBottomWidth: 2,


    },
    backRightBtnDelete: {
        backgroundColor: 'red',
        //right: 75,

    },
    backRightBtnEdit: {
        backgroundColor: 'blue',
        //right: 75,
        margin: 3
    },
    btnRgihtBtn: {
        bottom: 0,
        justifyContent: 'center',
        //position:'absolute',
        padding: 18,
        marginVertical: 8,
        height: 80,

        borderRadius: 20


    },
    rowBack: {
        alignItems: 'center',
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginHorizontal: 16,
        marginVertical: 8,

        //paddingLeft: 15,

    },
    delete: {
        height: 30,
        width: 30
    }
});