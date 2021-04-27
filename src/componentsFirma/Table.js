import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { FlatList } from 'react-native-gesture-handler';
import BottomSheet from 'reanimated-bottom-sheet'
import ImagePicker from 'react-native-image-crop-picker';


export default function Table({ text }) {

    const item = {
        id: index,
        url: source,
        text: "",
        input: ""
    };
    return (
        <View style={styles.item}>
            <View>
                <Text style={styles.txtStyle1}>{item.text}</Text>
            </View>
            <TouchableOpacity style={{ width: '100%' }} >
                <Image style={{ width: '100%', height: '80%', resizeMode: 'contain', justifyContent: 'center', alignItems: 'center' }} source={item.url}></Image>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', marginTop: -30 }}>
                <Text style={styles.txtStyle1}>Podaj liczbę miejsc</Text>
                <TextInput style={styles.styleInput}></TextInput>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
   
    header: {
        flexDirection: 'row',
        backgroundColor: 'green',
        width: '100%',
        resizeMode: "contain",
        justifyContent: "center",

    },

    image: {
        width: '80%',
        resizeMode: "contain",
        justifyContent: "center",
        alignItems: 'center'
    },
    item: {
        // backgroundColor: 'white',
        borderColor: 'grey',
        borderWidth: 2,
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        height: 400,
        alignItems: 'center'

    },
    txtStyle1: {
        fontSize: 22,
        color: 'black',
        padding: 10,
        textAlign: 'center'
    },
    txtStyleBottomSheet: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold',
        padding: 10,
        textAlign: 'center'
    },
    btnAddPhoto: {
        backgroundColor: '#1B92C4',
        alignItems: 'center',
        padding: 5,
        marginVertical: 22,
        marginHorizontal: '10%',
        borderRadius: 10
    },
    btnFooterStyle: {
        backgroundColor: '#1B92C4',
        width: '49%',
        height: 50
    },
    styleInput: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 10,
        marginLeft: 25,
        textAlign: 'center'

    }
});