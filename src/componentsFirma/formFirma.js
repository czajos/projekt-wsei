import React, { useState, useEffect,componentDidMount } from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
// import { createStackNavigator } from 'react-navigation-stack';
import axios from 'axios'



export const formFirma = ({ navigation }) => {
  // const [datas, setData] = React.useState({
  //   nazwarestauracji: "",
  //   typrestauracji: '',
    
  //   adreslokalu: '',
  //   numertel: '',
  //   nip: '',
  //   check_textInputChange: false,
  //   secureTextEntry: true

  // })
const [nazwarestauracji,setNazwaRestauracji]=useState()
const [typrestauracji,setTypRestauracji]=useState()
const [adreslokalu,setAdresResturacji]=useState()
const [numertel,setNumerTel]=useState()

 useEffect(()=>{
submitPost()
})

  const submitPost =()=>{
    axios
    .post("http://192.168.1.143:5000/restaurant/create/create",{
      name:nazwarestauracji,
      category:typrestauracji,
      city:adreslokalu,
      phone:numertel
      
    })
    .then(function (response) {
      alert(JSON.stringify(response.data));
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
        <Text style={styles.txtStyle1}>Wypełnij dane</Text>
        <Text style={styles.txtStyle2}>aby przejść dalej</Text>
      </View>
      <ScrollView style={styles.datastyle}>

        <TextInput
          placeholder="Nazwa restauracji"
          style={styles.txtInput}
          onChangeText={text=>setNazwaRestauracji(text)}
          value={nazwarestauracji}
        />
        <TextInput
          placeholder="Typ restauracji"
          style={styles.txtInput} 
          onChangeText={text=>setTypRestauracji(text)}
          value={typrestauracji}
          />
        <TextInput
          placeholder="Adres lokalu"
          style={styles.txtInput}
          onChangeText={text=>setAdresResturacji(text)}
          value={adreslokalu}
           />
        {/* <TextInput
          placeholder="Numer telefonu"
          style={styles.txtInput} 
          onChangeText={text=>setData({numertel:text})}
          value={numertel}
          keyboardType='numeric'
          /> */}
        <TextInput
          placeholder="NIP"
          style={styles.txtInput}
        />

      </ScrollView>
      <View style={{ flexDirection:'row',justifyContent: 'space-around', alignItems: 'center', marginBottom: 10,}}>
        <TouchableOpacity style={styles.btnStyle} onPress={() => navigation.navigate('Dodaj stolik')}>
          <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }} >Idź dalej</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnStyle} >
          <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }} onPress={submitPost}>Zapisz</Text>
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
    paddingLeft: 10,
    width: '100%',
    borderRadius: 10
  },

  txtInput: {
    alignSelf: 'stretch',
    width: "80%",
    height: 50,
    fontSize: 17,
    borderRadius: 3,
    margin: 10,
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

  btnStyle: {
    backgroundColor: '#5B9CE6',
    padding: 20,
    height: 30,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50

  }
})