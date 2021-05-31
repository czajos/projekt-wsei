import React, { useState, useMemo, useCallback } from 'react';
import { View, Button, Text, Dimensions, Platform, StyleSheet, Image, ScrollView, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { FlatList } from 'react-native-gesture-handler';
import { SwipeListView } from 'react-native-swipe-list-view'
import axios from 'axios';

export const AddMenu = () => {
  const [image, setImage] = useState(null)

  //Select image
  const choosePhotoFromLibrary = useCallback(() => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
    }).then(image => {
      setImage({
        image: {
          uri: image.path
        }
      })

    });

  });

//Delete image
  const deleteImage = () => {
    setImage(null)
    console.log(image)
  }

// Axios post
const datas = new FormData();

    datas.append('image', {
        uri: image,
        type: 'image/jpeg',
        name: 'image.jpg'
    });

    const sendMenu =()=>{
      axios
           .post('',datas)

           .then(function (response) {
            back()
            deleteData()
            // alert(JSON.stringify(response.data));
        })
        .catch(function (error) {
            alert(error.message);
        });
    }

    const back =()=>{
      navigation.goBack()
  }

  const renderItem = useCallback(({ image }) => {

    console.log(image)
    return (

      <View style={styles.item}>
        <Image style={{ width: '100%', height: '80%', resizeMode: 'contain', justifyContent: 'center', alignItems: 'center' }} source={image}></Image>
        <TouchableOpacity style={styles.deleteBottom}  onPress={deleteImage}>
          <Text style={styles.txtDeleteBottom}>Usuń</Text>
        </TouchableOpacity>
      </View>

    );

  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.imageStyleLogo} source={require('../../logodlafirm.png')}></Image>
      </View>
      <Text style={styles.txtStyle}>Dodaj lub edytuj Menu </Text>
      <ScrollView >
        {image ? renderItem(image) : null}
      </ScrollView>

      <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', padding: 10, opacity: 1, backgroundColor: 'white' }}>
        <TouchableOpacity style={styles.btnFooterStyle} onPress={() => choosePhotoFromLibrary()}>
          <Text style={styles.txtStyleBottomSheet}>Dodaj obraz</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnFooterStyle} onPress={sendMenu}>
          <Text style={styles.txtStyleBottomSheet}>Zapisz</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
AddMenu.navigationOptions = {
  headerShown: false,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',


    backgroundColor: 'white'
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'green',
    width: '100%',
    resizeMode: "contain",
    justifyContent: 'center',
    height:80
  },
  imageStyleLogo: {
    width: '80%',
    resizeMode: "contain",
    justifyContent: "center",
    height: 75


  },
  txtStyle: {
    padding: 15,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',

  },
  txtStyleBottomSheet: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    padding: 10,
    textAlign: 'center',
  },
  btnFooterStyle: {
    backgroundColor: '#1B92C4',
    width: '49%',
    height: 50,
    borderRadius: 50,
  },
  item: {
    width: '100%',
    height: 450,
    justifyContent:'center',
    alignItems:'center'
  },
  deleteBottom:{
    marginTop:10,
    backgroundColor: 'white',
    width: '30%',
    height: 35,
    borderRadius: 50,
    borderWidth:2,
    borderColor:'#1B92C4'
  },
  txtDeleteBottom:{
    color:'#1B92C4',
    fontSize:20,
    fontWeight:'bold',
    textAlign:'center'
  }
}) 