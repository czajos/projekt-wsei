import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { Rating, AirbnbRating } from 'react-native-ratings';



export function ChoiceTable({ navigation }) {


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
                <View style={styles.imageStyleLogo}></View>
                {/* <Image style={styles.imageStyleLogo} source={require('../../logo.png')}></Image> */}
            </View>
            <View style={styles.nameRestaurant}>
                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Nazwa restauracji</Text>

                <Rating
                    imageSize={20}
                    style={{ marginTop: 0 }}
                    
                />

            </View>
            <View style={styles.buttonArea}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{ color: 'white', fontSize: 15 }}>MENU</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{ color: 'white', fontSize: 15 }}>Info</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{ color: 'white', fontSize: 15 }}>Opinie</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default ChoiceTable;


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
    }

})