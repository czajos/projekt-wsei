import React, { useState, useEffect, componentDidMount } from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/Ionicons'


// import { createStackNavigator } from 'react-navigation-stack';
import axios from 'axios'




export const RezerwTable = ({ navigation }) => {
    // const [datas, setData] = React.useState({
    //   nazwarestauracji: "",
    //   typrestauracji: '',

    //   adreslokalu: '',
    //   numertel: '',
    //   nip: '',
    //   check_textInputChange: false,
    //   secureTextEntry: true

    // })
    const [nazwarestauracji, setNazwaRestauracji] = useState()
    const [typrestauracji, setTypRestauracji] = useState()
    const [adreslokalu, setAdresResturacji] = useState()
    const [city, setCity] = useState()
    const [numertel, setNumerTel] = useState()
    const [nip, setNip] = useState()
    const [description, setDescription] = useState()
    const [image, setImage] = useState(null)
    const [loading, setLoading] = useState(true)



    return (
        <View style={styles.container}>

            <View style={styles.title}>
                <Text style={styles.txtStyle1}>Rezerwacja</Text>

            </View>
            <ScrollView style={styles.datastyle}>

                <View style={{ alignItems: 'center' }}>
                    <Text>Stolik nr</Text>
                    <Text
                        style={styles.txt}
                        value={nazwarestauracji}
                    />
                </View>
                <View style={{ alignItems: 'center' }}>
                    <Text>Godzina rezerwacji</Text>
                    <TextInput
                        placeholder="Opis"
                        style={styles.txtInput}
                    //   onChangeText={text => setDescription(text)}
                    //   value={description}
                    />
                </View>

            </ScrollView>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom: 10, }}>

                <TouchableOpacity style={styles.btnStyle} >
                    <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }} >Zarezerwuj</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default RezerwTable;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',

        backgroundColor: 'white'
    },

    header: {
        flexDirection: 'row',
        backgroundColor: 'green',
        width: '100%',
        resizeMode: "contain",
        justifyContent: "center",

    },


    title: {
        padding: 8,
        resizeMode: "contain",
        alignItems: 'center',
        width: '100%',

    },

    datastyle: {

        width: '100%',
        borderRadius: 10,
    },

    txtInput: {
        alignSelf: 'stretch',
        width: "80%",
        height: 50,
        fontSize: 17,
        borderRadius: 3,
        alignItems: 'center',
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        marginBottom: 10
    },
    txt: {
        alignSelf: 'stretch',
        width: "30%",
        height: 50,
        fontSize: 17,
        borderRadius: 3,
        alignItems: 'center',
        borderBottomColor: 'lightgrey',
        borderBottomWidth: 1,
        marginBottom: 10
    },

    txtStyle1: {
        fontSize: 40,
        color: 'black',
        marginLeft: 10
    },

    txtStyle2: {
        fontSize: 18,
        color: 'grey',
        marginLeft: 10,
        marginBottom: 10
    },
    txtStyle3: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'grey',
        marginLeft: 10,
        marginBottom: 13,
        marginTop: 10

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


})