import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { Rating, AirbnbRating } from 'react-native-ratings';
import ImagePicker from 'react-native-image-crop-picker';
import axios from 'axios'
import { FlatList } from 'react-native-gesture-handler';
import { SwipeListView } from 'react-native-swipe-list-view'
import { useIsFocused } from '@react-navigation/native';






export function DeleteComments({ route, navigation }) {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    // const { item } = route.params
    const isFocused = useIsFocused()

    useEffect(() => {
        getData()
    }, [isFocused])

  

    const getData = () => {
        axios
            .get(`http://192.168.1.143:5000/comment/getAll`)
            .then(function (response) {
                // alert(JSON.stringify(response.data));
                setData(response.data.data.comment)
            })
            .catch(function (error) {
                alert(error.message);
            });
    }

    const deleteComment=(item)=>{
        axios  
             .delete(`http://192.168.1.143:5000/comment/delete/${item}`)

             getData()
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back-outline"
                        color={'white'}
                        size={30}></Icon>
                </TouchableOpacity>
                <Image style={styles.imageStyleLogo} source={require('../../logodlafirm.png')}></Image>
            </View>
            <View style={{ alignItems: 'center', marginTop: 10 }}>
                <View >
                    <Text style={styles.textOpinie}>Opinie o mojej restauracji</Text>
                </View>
                <SwipeListView
                    style={{ width: '100%',marginBottom:100 }}
                    data={data}
                    keyExtractor={(item, index) => {
                        return index.toString();
                    }}
                    renderItem={({ item }) => {
                        console.log("item", item)

                        return (
                            <View style={styles.item}>
                                <View style={styles.styleInItem}>
                                    <Text style={styles.text}>Users</Text>
                                    {/* <Text style={styles.text2}>Data</Text> */}
                                    <Rating
                                        imageSize={18}
                                        startingValue={item.rating}
                                        style={{ marginTop: 0 }}
                                        ratingCount={5}
                                        showRating

                                    // onFinishRating={ratingCompleted}
                                    />
                                </View>
                                <View style={styles.styleInItem}>
                                    <Text style={styles.text}>{item.comment}</Text>
                                </View>
                                <TouchableOpacity style={styles.deleteBtn} onPress={()=>deleteComment(item.id)}>
                                    <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>Usuń komentarz</Text>
                                </TouchableOpacity>
                            </View>
                        )
                    }}
                />
            </View>
        </View>
    )
}
export default DeleteComments;


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
        fontSize: 17,
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
        marginTop: 20,
        marginBottom: 20,


    },
    styleInItem: {
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-between'
    },
    image: {
        width: '80%',
        resizeMode: "contain",
        justifyContent: "center",
        alignItems: 'center'

    },
    deleteBtn:{
        marginTop: 20, 
        backgroundColor: 'red',
         width: 150, 
         padding: 5, 
         borderRadius: 50, 
         alignItems: 'center'
    }

})