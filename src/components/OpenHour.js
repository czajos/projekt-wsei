import React, { useState, useEffect} from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import axios from 'axios'
import { useIsFocused } from '@react-navigation/native';



export const OpenHour = ({ route,navigation }) => {
  
  const[data,setData]=useState([])
  const {item}=route.params
  const isFocused=useIsFocused()

  useEffect(()=>{
   getData()
  },[isFocused])
 
  const getData = () => {
    axios
      .get(`http://192.168.1.143:5000/restaurant/openTime/get/${1}`, {
        
      })
      .then(function (response) {
        setData(response.data.data.time)
      })
      .catch(function (error) {
        alert(error.message);
      });
  }

 


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={require('../../logodlafirm.png')}></Image>
      </View>
      <View style={styles.title}>
        <Text style={styles.txtStyle1}>Edytuj godziny otwarcia restauracji</Text>
      </View>
      <ScrollView style={styles.datastyle}>
        <View style={styles.addHoursStyle}>
          <Text style={styles.txtStyle2}>Day</Text>
          <Text style={styles.openStyle}>Open</Text>
          <Text style={styles.closeStyle}>Close</Text>

        </View>
        <View style={styles.addHoursStyle}>
          <Text style={styles.txtStyle2}>Poniedziałek</Text>
          <TextInput
            placeholder="godz : min"
            keyboardType='numeric'
            style={styles.txtInputOpen}
            // type="text"
            onChangeText={text => setData({...data, mon_open: text})}
            value={`${data? data.mon_open : ''}`}
          />
          <TextInput
            placeholder="godz : min"
            keyboardType='numeric'
            style={styles.txtInput}
            type="text"
            onChangeText={text => setData({...data, mon_close : text})}
            value={data.mon_close}
          />
        </View>

        <View style={styles.addHoursStyle}>
          <Text style={styles.txtStyle2}>Wtorek</Text>
          <TextInput
            placeholder="godz : min"
            keyboardType='numeric'
            style={styles.txtInputOpen}
            type="text"
            onChangeText={text => setData({...data, tue_open: text})}
            value={data.tue_open}
          />
          <TextInput
            placeholder="godz : min"
            keyboardType='numeric'
            style={styles.txtInput}
            type="text"
            onChangeText={text => setData({...data, tue_close: text})}
            value={data.tue_close}
          />
        </View>

        <View style={styles.addHoursStyle}>
          <Text style={styles.txtStyle2}>Środa</Text>
          <TextInput
            placeholder="godz : min"
            keyboardType='numeric'
            style={styles.txtInputOpen}
            type="text"
            onChangeText={text => setData({...data, wed_open: text})}
            value={data.wed_open}
          />
          <TextInput
            placeholder="godz : min"
            keyboardType='numeric'
            style={styles.txtInput}
            type="text"
            onChangeText={text => setData({...data, wed_close: text})}
            value={data.wed_close}
          />
        </View>

        <View style={styles.addHoursStyle}>
          <Text style={styles.txtStyle2}>Czwartek</Text>
          <TextInput
            placeholder="godz : min"
            keyboardType='numeric'
            style={styles.txtInputOpen}
            type="text"
            onChangeText={text => setData({...data, thu_open:text})}
            value={data.thu_open}
          />
          <TextInput
            placeholder="godz : min"
            keyboardType='numeric'
            style={styles.txtInput}
            type="text"
            onChangeText={text => setData({...data, thu_close:text})}

            value={data.thu_close}
          />
        </View>

        <View style={styles.addHoursStyle}>
          <Text style={styles.txtStyle2}>Piątek</Text>
          <TextInput
            placeholder="godz : min"
            keyboardType='numeric'
            style={styles.txtInputOpen}
            type="text"
            onChangeText={text => setData({...data, fri_open:text})}

            value={data.fri_open}
          />
          <TextInput
            placeholder="godz : min"
            keyboardType='numeric'
            style={styles.txtInput}
            type="text"
            onChangeText={text => setData({...data, fri_close:text})}

            value={data.fri_close}
          />
        </View>

        <View style={styles.addHoursStyle}>
          <Text style={styles.txtStyle2}>Sobota</Text>
          <TextInput
            placeholder="godz : min"
            keyboardType='numeric'
            style={styles.txtInputOpen}
            type="text"
            onChangeText={text => setData({...data, sat_open:text})}

            value={data.sat_open}
          />
          <TextInput
            placeholder="godz : min"
            keyboardType='numeric'
            style={styles.txtInput}
            type="text"
            onChangeText={text => setData({...data, sat_close:text})}
            value={data.sat_close}
          />
        </View>

        <View style={styles.addHoursStyle}>
          <Text style={styles.txtStyle2}>Niedziela</Text>
          <TextInput
            placeholder="godz : min"
            keyboardType='numeric'
            style={styles.txtInputOpen}
            type="text"
            onChangeText={text => setData({...data, sun_open:text})}
            value={data.sun_open}
          />
          <TextInput
            placeholder="godz : min"
            keyboardType='numeric'
            style={styles.txtInput}
            type="text"
            onChangeText={text => setData({...data, sun_close:text})}
            value={data.sun_close}
          />
        </View>
      </ScrollView>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom: 10, }}>
        <TouchableOpacity style={styles.btnStyle} onPress={() => navigation.goBack()}>
          <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }} >Wróć</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

//export default formFirma;
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

  image: {
    width: '80%',
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: 'center'

  },

  title: {
    padding: 8,
    resizeMode: "contain",
    justifyContent: "center",
    width: '100%',
    justifyContent: 'flex-end',

  },

  datastyle: {
    padding: 10,
    width: '100%',
  },

  txtInput: {
    // alignSelf: 'stretch',
    fontSize: 18,
    // margin: 10,
    borderBottomColor: 'lightgrey',
    // borderBottomWidth: 1,
    textAlign: 'center',
    color: 'red'
  },
  txtInputOpen: {
    // alignSelf: 'stretch',
    fontSize: 18,
    // margin: 10,
    borderBottomColor: 'lightgrey',
    // borderBottomWidth: 1,
    textAlign: 'center',
    color: 'green'

  },

  txtStyle1: {
    fontSize: 28,
    color: 'black',
    marginLeft: 10
  },

  txtStyle2: {
    fontSize: 18,
    width: "30%",
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  openStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 10,

    width: "30%",
    textAlign: 'center'

  },
  closeStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 10,
    width: "30%",
    textAlign: 'center'

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

  addHoursStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  }
})