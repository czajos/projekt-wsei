import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { View, Button, Text, Dimensions, Platform, StyleSheet, Image, ScrollView, TouchableOpacity, SafeAreaView, ImageBackground } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { SwipeListView } from 'react-native-swipe-list-view'
import axios from 'axios'
import Icon from 'react-native-vector-icons/Ionicons'
// import FormData from 'form-data'
import { useIsFocused } from '@react-navigation/native';

export const AddMenu = ({ navigation }) => {
  const [image, setImage] = useState(null)
  const [data, setData] = useState([])
  const isFocused = useIsFocused();



  //AXIOS GET 
  useEffect(() => {
    getData()
    deleteItem()
    
  }, [isFocused])

  const getData = () => {
    axios
      .get('http://192.168.1.143:5000/restaurant/menu/get/93')

      .then(function (response) {
        // handle success
        // const data = response.data.data.menu
        // console.log(data)
        setData(response.data.data.menu)

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

  //Delete image


  const deleteItem = (item) => {
    // console.log(item)
    axios
      .delete(`http://192.168.1.143:5000/restaurant/menu/delete/${item}`)
      .then(response => {

      })
    getData()
  }

  //Dodaj zdjęcie menu
  const goToAdd = () => {
    navigation.navigate('Strona Menu')
  }

  const editItem=(item)=>{
    navigation.navigate('Edit Menu',{item})
  }



  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.imageStyleLogo} source={require('../../logodlafirm.png')}></Image>
      </View>
      <Text style={styles.txtStyle}>Dodaj lub edytuj Menu </Text>
      <SwipeListView
        style={{ marginBottom: 50 }}
        data={data}
        // renderHiddenItem={renderHiddenItem}
        // rightOpenValue={-145}
        keyExtractor={(item, index) => {
          return index.toString();
        }}
        renderItem={({ item }) => {
          console.log("item", item)

          return (
            <View>
              <View style={styles.item}>
                <TouchableOpacity style={{ width: '100%' }} >
                  <Image style={{ width: '100%', height: 300, resizeMode: 'contain', justifyContent: 'center', alignItems: 'center' }} source={{ uri: item.image_url }}></Image>
                </TouchableOpacity>
                <View style={{ flexDirection: 'column' }}>
                  <Text style={styles.txtStyleSite}>Strona numer</Text>
                  <Text style={styles.txtStyleSite}>{item.page.toString()}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <TouchableOpacity style={styles.deleteBottom} onPress={() => deleteItem(item.id)}>
                    <Text style={styles.txtDeleteBottom}>Usuń</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.deleteBottom} onPress={() => editItem(item.id)}>
                    <Text style={styles.txtDeleteBottom}>Edytuj</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )
        }}
      />
      <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', padding: 10, opacity: 1, backgroundColor: 'white' }}>
        <TouchableOpacity style={styles.btnFooterStyle} onPress={goToAdd}>
          <Text style={styles.txtStyleBottomSheet}>Dodaj obraz</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnFooterStyle} onPress={() => navigation.goBack()}>
          <Text style={styles.txtStyleBottomSheet}>Wyjdź</Text>
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
    height: 80
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
    backgroundColor: 'white',
    // borderColor: 'grey',
    //borderWidth: 1,
    padding: 10,
    marginVertical: 8,
    // marginHorizontal: 16,
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
    borderRadius: 10,
    width: 'auto'

  },
  deleteBottom: {
    marginTop: 10,
    backgroundColor: 'white',
    width: '30%',
    height: 35,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: '#1B92C4'
  },
  txtDeleteBottom: {
    color: '#1B92C4',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  txtStyleSite: {
    fontSize: 17,
    color: 'black',
    padding: 3,
    textAlign: 'center',
  },
})