import React, { useState, useEffect, componentDidMount } from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-crop-picker';
import Icon from 'react-native-vector-icons/Ionicons'


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
  const [nazwarestauracji, setNazwaRestauracji] = useState()
  const [typrestauracji, setTypRestauracji] = useState()
  const [adreslokalu, setAdresResturacji] = useState()
  const [numertel, setNumerTel] = useState()
  const [nip, setNip] = useState()
  const [description, setDescription] = useState()
  const [image, setImage] = useState(null)

  //  useEffect(()=>{
  // submitPost()
  // })

  const submitPost = () => {
    axios
      .post("http://192.168.1.143:5000/restaurant/create", {
        name: nazwarestauracji,
        category: typrestauracji,
        city: adreslokalu,
        phone: numertel,
        description: description,
        imageUrl:image

      })
      .then(function (response) {
        alert(JSON.stringify(response.data));
      })
      .catch(function (error) {
        alert(error.message);
      });
  }

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
          type="text"
          onChangeText={text => setNazwaRestauracji(text)}
          value={nazwarestauracji}
        />
        <TextInput
          placeholder="Typ restauracji"
          style={styles.txtInput}
          onChangeText={text => setTypRestauracji(text)}
          value={typrestauracji}
        />
        <TextInput
          placeholder="Adres lokalu"
          style={styles.txtInput}
          type="number"
          onChangeText={text => setAdresResturacji(text)}
          value={adreslokalu}
        />
        <TextInput
          placeholder="Numer telefonu"
          style={styles.txtInput}
          onChangeText={text => setNumerTel(text)}
          value={numertel}
          keyboardType='numeric'
        />
        {/* <TextInput
          placeholder="Numer telefonu"
          style={styles.txtInput} 
          onChangeText={text=>setData({numertel:text})}
          value={numertel}
          keyboardType='numeric'
          /> */}

        <TextInput
          placeholder="Opis"
          style={styles.txtInput}
          onChangeText={text => setDescription(text)}
          value={description}
        />
        <View style={styles.viewAddImage}>
        <Text style={styles.txtStyle3}>Dodaj swoje logo</Text>
        <TouchableOpacity style={styles.imageStyleLogo} onPress={() => choosePhotoFromLibrary()}>
          <View >
            <ImageBackground style={styles.imageStyleLogo} imageStyle={{ borderRadius: 100 }} onPress={() => choosePhotoFromLibrary()} source={{ uri: image }} >
            </ImageBackground>
          </View>
        </TouchableOpacity>
       </View>
      </ScrollView>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginBottom: 10, }}>
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
  txtStyle3: {
    fontSize: 18,
    fontWeight:'bold',
    color: 'grey',
    marginLeft: 10,
    marginBottom: 13,
    marginTop:10
    
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
  imageStyleLogo: {

    width: 150,
    height: 150,
    backgroundColor: 'white',
    borderRadius: 100,
    shadowOffset: {
        width: 0,
        height: 0.5,
    },
    shadowOpacity: 0.1,
    shadowRadius: 0.5,
    elevation: 2,
    resizeMode: 'cover',
    marginBottom: 15,
    alignItems: 'center',


  },
  viewAddImage:{
    justifyContent:'center',
    alignItems:'center'
  }
})