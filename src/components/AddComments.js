import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { Rating, AirbnbRating } from 'react-native-ratings';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios'
import { FlatList } from 'react-native-gesture-handler';
import FormData from 'form-data'


export function AddComments({ route, navigation }) {
    const [data, setData] = useState([])
    const [ratingg, setRatingg] = useState()
    const [ratingValue, setRatingValue] = useState(3)
    const [loading, setLoading] = useState(true)
    const [comment, setComment] = useState()
    const { item } = route.params

    const ratingCompleted = (rating) => {
        // console.log("Rating is: " + rating)
        setRatingValue(rating)

    }
    
    const check = () => {
        console.log(ratingValue)
        console.log(item)
    }
    //Wysyłga backend
    const datas = new FormData()
    datas.append('commnet', comment)
    datas.append('rating', ratingValue)

    const submitComment = () => {
        axios
            .post(`http://192.168.1.143:5000/comment/add/${item}`,  {
                 comment:comment,
                 rating:ratingValue
            })
            .then(function (response) {
                alert(JSON.stringify(response.data));
            })
            .catch(function (error) {
                alert(error.message);
            });
            back()
    }

    const back=()=>{
        navigation.goBack()
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
            <View style={{ alignItems: 'center', marginTop: 10 }}>
                <View >
                    <Text style={styles.textOpinie}>Dodaj opinie</Text>
                </View>

                <View style={styles.item}>
                    <View style={styles.styleInItem}>
                        <Text style={styles.text}>Users</Text>
                        <Rating
                            imageSize={18}
                            startingValue={0}
                            style={{ marginTop: 0 }}
                            ratingCount={5}
                            showRating
                           

                            onFinishRating={ratingCompleted}
                        />

                    </View>
                    <View style={styles.styleInItem}>
                        <TextInput
                            multiline={true}
                            numberOfLines={3}
                            placeholder='Dodaj komentarz'
                            style={styles.textComment}
                            onChangeText={text => setComment(text)}
                            value={comment}
                        ></TextInput>

                    </View>
                    <TouchableOpacity style={{ marginTop: 20, backgroundColor: 'green', width: 150, padding: 5, borderRadius: 50, alignItems: 'center' }} onPress={submitComment}>
                        <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold' }}>Dodaj</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    )
}
export default AddComments;


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
        color: 'grey'
    },
    text2: {
        fontSize: 17,
        color: 'grey'
    },
    textOpinie: {
        fontSize: 22,
        color: 'black',
        fontWeight: 'bold'
    },
    textComment: {
        fontSize: 18,
        color: 'black',

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
        width: '80%',
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
        borderRadius: 10,
        marginTop: 20
    },
    styleInItem: {
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-between'
    }

})