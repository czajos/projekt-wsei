import ImagePicker from 'react-native-image-crop-picker';
import React, { useState, useMemo, useCallback } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Animated, { onChange } from 'react-native-reanimated';
// import { FlatList } from 'react-native-gesture-handler';
import BottomSheet from 'reanimated-bottom-sheet'
// import Swipeout from 'react-native-swipeout'
import { SwipeListView } from 'react-native-swipe-list-view'
import Icon from 'react-native-vector-icons/Ionicons'
import axios from 'axios'
import FormData from 'form-data'
// import EditTable from './EditTable'
// import { createStackNavigator } from '@react-navigation/stack';



export function AddOneTable({ navigation }) {
    const [bottomPanel, setBottomPanel] = useState(React.createRef())
    const [places, setPlaces] = useState()
    const [image, setImage] = useState(null)
    const [numberTable, setNumberTable] = useState()


    const clickImage = () => {
        bottomPanel.current.snapTo(0)
    }
    const fall = new Animated.Value(1)

    const takePhotoFromCamera = useCallback(() => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
        }).then(image => {
            // selectImage(image);
            setImage(image.path)
            console.log(image);
        });
    });

    const choosePhotoFromLibrary = useCallback(() => {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
        }).then(image => {
            // selectImage(image);
            setImage(image.path)
            console.log(image);

        });
    });


    renderSheet = () => (
        <View style={{ backgroundColor: 'white' }}>
            <TouchableOpacity style={styles.btnAddPhoto} onPress={() => choosePhotoFromLibrary()}>
                <Text style={styles.txtStyleBottomSheet} >Dodaj zdjęcie z galeri</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnAddPhoto} onPress={() => takePhotoFromCamera()}>
                <Text style={styles.txtStyleBottomSheet} >Zrób zdjęcie</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnAddPhotoBack}>
                <Text style={styles.txtStyleBottomSheetBack} onPress={() => bottomPanel.current.snapTo(1)}>Wróć</Text>
            </TouchableOpacity>
        </View>
    )
    //renderowanie nagłowka w dolnym akruszu
    renderHeader = () => (
        <View style={{
            backgroundColor: 'white', height: 45, justifyContent: 'center', alignItems: 'center', borderTopColor: 'lightgrey',
            borderTopWidth: 2,
        }}>
            <View style={{ height: 10, backgroundColor: 'grey', width: '30%', borderRadius: 10 }}></View>
        </View>
    )


    // WYSYŁKA DO BACKEND
    const datas = new FormData();

    datas.append('image', {
        uri: image,
        type: 'image/jpeg',
        name: 'image.jpg'
    });
    datas.append('numb_seats', places)
    datas.append('number_table', numberTable)
    datas.append('id_rest', 4)


    const sendTable = () => {
        axios
            .post("http://192.168.1.143:5000/table/create", datas, {
                // headers: {
                //     // 'accept': 'application/json',
                //     // 'Accept-Language': 'en-US,en;q=0.8',
                //     'Content-Type': `multipart/form-data; boundary=${datas._boundary}`,
                // },
            })
            .then(function (response) {
                back()
                // alert(JSON.stringify(response.data));
            })
            .catch(function (error) {
                alert(error.message);
            });
    }

    const back =()=>{
        navigation.goBack()
    }

    return (
        <View style={styles.container}>
            <BottomSheet
                ref={bottomPanel}
                snapPoints={[330, 0]}
                initialSnap={1}
                callbackNode={fall}
                enabledGestureInteraction={true}
                renderContent={renderSheet}
                renderHeader={renderHeader}
            >
            </BottomSheet>

            <View style={styles.header}>
                <TouchableOpacity style={{ marginLeft: -20 }} onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back-outline"
                        color={'white'}
                        size={30}></Icon>
                </TouchableOpacity>
                <Image style={styles.imageStyleLogo} source={require('../../logodlafirm.png')}></Image>
            </View>

            <Animated.View
                style={{ flex: 1, opacity: Animated.add(1, Animated.multiply(fall, 0.8)) }}>
                <View style={styles.dodajStoliki}>
                    <Text style={styles.txtStyle1}>Utwórz stolik</Text>
                </View>
                <View>
                    <View style={styles.item}>
                        <View style={{ justifyContent: 'space-around', flexDirection: 'row' }}>
                            <Text style={styles.txtStyle1}>Stolik numer</Text>
                            <TextInput
                                style={styles.txtStyle1}
                                onChangeText={text => setNumberTable(text)}
                                value={numberTable}
                            ></TextInput>

                        </View>
                        <TouchableOpacity style={{ width: '100%' }} onPress={clickImage}>
                            <Image style={{ width: '100%', height: 300, resizeMode: 'contain', justifyContent: 'center', alignItems: 'center' }} source={{ uri: image }}></Image>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.podajLiczbeMiejscStyle}>
                        <Text style={styles.txtStyle1}
                        // onChangeText={}
                        >Liczba miejsc</Text>
                        <TextInput
                            style={styles.styleInput}
                            keyboardType='numeric'
                            onChangeText={text => setPlaces(text)}
                            value={places}
                        ></TextInput>
                    </View>
                </View>
            </Animated.View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 10, opacity: 1, backgroundColor: 'white' }}>

                <TouchableOpacity style={styles.btnFooterStyle} onPress={sendTable}>
                    <Text style={styles.txtStyleBottomSheet}>Zatwierdź</Text>
                </TouchableOpacity>
            </View>
        </View>
    );

}

const resizeMode = 'center';

AddOneTable.navigationOptions = {
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
        margin: 5
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