import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import { Rating, AirbnbRating } from 'react-native-ratings';
import { SwipeListView } from 'react-native-swipe-list-view'
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios'



export function ChoiceTable({route,navigation }) {
    const {item}=route.params
    const [data, setData] = useState([])
    const [secondData, setSecondData] = useState([])
    const [loading, setLoading] = useState(true)
    const [hour, setHour] = useState()
    const [minute, setMinute] = useState()
    const [year, setYear] = useState()
    const [month, setMonth] = useState()
    const [day, setDay] = useState()
    const [idTable, setIdTable] = useState()

    const isFocused = useIsFocused(); //odświeża stan ekranu po jego wyrenderowaniu
    useEffect(() => {
        getData()
    }, [isFocused])

    const getData = () => {
        axios
            .get(`http://192.168.1.143:5000/table/getAll/${item}`)

            .then(function (response) {
                // handle success
                setData(response.data.data.tables)
                console.log(item)
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

    // const datas = new FormData()
    // datas.append('id_rest', 1)
    // datas.append('id_table', idTable)
    // datas.append('hour', hour)
    // datas.append('min', minute)
    // datas.append('year', year)
    // datas.append('month', month)
    // datas.append('day', day)


    const submitPost = () => {
        axios
            .post("http://192.168.1.143:5000/reserwation/create", {
                id_restaurant:2,
                id_table:idTable,
                hour:hour,
                min:minute,
                year:year,
                month:month,
                day:day
            } )
                // name: nazwarestauracji,
                // category: typrestauracji,
                // city: adreslokalu,
                // phone: numertel,
                // description: description,
                // imageUrl:image,

                // headers: {
                //     // 'Content-Type': 'multipart/form-data',
                //     'Content-Type': `multipart/form-data; boundary=${datas._boundary}`,
                // }

            
            .then(function (response) {
                alert(JSON.stringify(response.data));
            })
            .catch(function (error) {
                alert(error.message);
            });
        load()
    }

    const choiceRest = (item) => {
        setIdTable(item)
        console.log(item)
        setLoading(false)
        //  navigation.navigate('Wybierz stolik')
    }

    const load = () => {
        setLoading(true)
    }

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
            {loading ?
                <>
                    <View style={styles.nameRestaurant}>
                        {/* <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{`${data ? secondData.name : ''}`}</Text> */}
                        <Rating
                            imageSize={20}
                            style={{ marginTop: 0 }}
                        />
                    </View>
                    <View style={styles.buttonArea}>
                        <TouchableOpacity style={styles.btn} onPress={getData}>
                            <Text style={{ color: 'white', fontSize: 15 }} >MENU</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={{ color: 'white', fontSize: 15 }}>Info</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn}>
                            <Text style={{ color: 'white', fontSize: 15 }}>Opinie</Text>
                        </TouchableOpacity>
                    </View>
                    <SwipeListView
                        // style={{ marginTop: 60 }}
                        data={data}
                        // renderHiddenItem={renderHiddenItem}
                        // rightOpenValue={-145}
                        keyExtractor={(item, index) => {
                            return index.toString();
                        }}
                        renderItem={({ item }) => {
                            console.log("item", item)

                            return (
                                <>
                                    <View style={styles.item}>
                                        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                                            <View style={{ flexDirection: 'row' }}>
                                                <Text style={styles.txtStyle1}>Stolik numer</Text>
                                                <TextInput
                                                    style={styles.txtStyle1}
                                                    keyboardType='numeric'
                                                    // onChangeText={text => setNumberTable(text)}
                                                    value={item.number_table.toString()}
                                                ></TextInput>
                                            </View>

                                        </View>


                                        <TouchableOpacity style={{ width: '100%' }} onPress={() => choiceRest(item.id)}>
                                            <Image style={{ width: '100%', height: 300, resizeMode: 'contain', justifyContent: 'center', alignItems: 'center' }} source={{ uri: item.image_url }}></Image>
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
                </>

                : (

                    <>
                        <View style={styles.container}>

                            <View style={styles.title}>
                                <Text style={styles.txtStyle1}>Rezerwacja</Text>

                            </View>
                            <ScrollView style={styles.datastyle}>

                                <View style={{ alignItems: 'center', marginTop: 20 }}>
                                    <Text style={styles.txtStyle1}>Stolik nr</Text>
                                    <View styele={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                        <Text
                                            style={styles.txt}
                                        // value={idTable}
                                        >{idTable}</Text>
                                    </View>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={styles.txtStyle1}>Godzina rezerwacji</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                        <TextInput
                                            placeholder="godz."
                                            style={styles.txtInput}
                                            onChangeText={text => setHour(text)}
                                            value={hour}
                                        />

                                        <TextInput
                                            placeholder="min."
                                            style={styles.txtInput}
                                            onChangeText={text => setMinute(text)}
                                            value={minute}
                                        />
                                    </View>
                                </View>
                                <View style={{ alignItems: 'center' }}>
                                    <Text style={styles.txtStyle1}>Data rezerwacji</Text>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                        <TextInput
                                            placeholder="rok"
                                            style={styles.txtInput}
                                            onChangeText={text => setYear(text)}
                                            value={year}
                                        />
                                        <TextInput
                                            placeholder="miesiąc"
                                            style={styles.txtInput}
                                            onChangeText={text => setMonth(text)}
                                            value={month}
                                        />
                                        <TextInput
                                            placeholder="dzień"
                                            style={styles.txtInput}
                                            onChangeText={text => setDay(text)}
                                            value={day}
                                        />
                                    </View>
                                </View>

                            </ScrollView>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom: 10, }}>

                                <TouchableOpacity style={styles.btnStyle} onPress={submitPost}>
                                    <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }} >Zarezerwuj</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </>


                )}
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
        height: 50

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
        marginTop: -25


    },
    nameRestaurant: {
        justifyContent: 'space-around',

        flexDirection: 'row',
        marginTop: 80
    },
    buttonArea: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        padding: 20
    },

    btn: {
        backgroundColor: '#3B9CE6',
        height: 40,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50
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
    btnStyle: {
        backgroundColor: '#5B9CE6',
        padding: 20,
        height: 30,
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50

    },
    txtInput: {
        alignSelf: 'stretch',
        width: 50,
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

})