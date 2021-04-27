import * as React from 'react';
import { useState, useCallback } from 'react'
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { Rating, AirbnbRating } from 'react-native-ratings';
import ImagePicker from 'react-native-image-crop-picker';




export function ProfilFirma({ navigation }) {
    const [image, setImage] = useState(null)
    const [data, setData] = useState({
        name: "",
        typrestauracji: '',
        nazwisko: '',
        adreslokalu: '',
        numertel: '',
        nip: '',
    })

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
            <View style={styles.header} >
                <TouchableOpacity style={styles.imageStyleLogo} onPress={() => choosePhotoFromLibrary()}>
                    <View >
                        <ImageBackground style={styles.imageStyleLogo} imageStyle={{ borderRadius: 100 }} onPress={() => choosePhotoFromLibrary()} source={{ uri: image }}></ImageBackground>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.nameRestaurant}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Nazwa restauracji</Text>
            </View>
            <View style={{ marginTop: 15 }}>
                <Text style={{ marginLeft: 10, fontSize: 16, color: 'grey' }}>Typ restauracji</Text>
                <View style={styles.boxInput}>
                    <TextInput
                        placeholder=""
                        style={styles.txtInput}
                    />
                    <Icon name="create-outline"
                        color={'black'}
                        size={25}
                        style={{ padding: 10 }}></Icon>
                </View>
            </View>
            <View style={{ marginTop: 15 }}>
                <Text style={{ marginLeft: 10, fontSize: 16, color: 'grey' }}>Adres lokalu</Text>
                <View style={styles.boxInput}>
                    <TextInput
                        placeholder=""
                        style={styles.txtInput}
                    />
                    <Icon name="create-outline"
                        color={'black'}
                        size={25}
                        style={{ padding: 10 }}></Icon>
                </View>
            </View>
            <View style={{ marginTop: 15 }}>
                <Text style={{ marginLeft: 10, fontSize: 16, color: 'grey' }}>Tel. kontaktowy</Text>
                <View style={styles.boxInput}>
                    <TextInput
                        placeholder=""
                        style={styles.txtInput}
                        keyboardType='numeric'
                    />
                    <Icon name="create-outline"
                        color={'black'}
                        size={25}
                        style={{ padding: 10 }}></Icon>
                </View>
            </View>

        </View>
    )
}
export default ProfilFirma;


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
    }

})