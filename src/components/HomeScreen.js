import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, ImageBackground, TouchableOpacity, Switch } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import SearchableDropdown from 'react-native-searchable-dropdown';
import RNPickerSelect from 'react-native-picker-select';
import { Picker } from '@react-native-picker/picker';


const city = [
  {
    label: "Kraków",
    value: "kraków",
    key: 1
  },
  {
    label: "Warszawa",
    value: "warszawa",
    key: 2
  },
  {
    label: "Poznań",
    value: "poznań",
    key: 3
  }
]


export function HomeScreen({ navigation }) {
  const [changeCity, setChangeCity] = useState()
  //const [city, setCity] = useState([])

  return (

    <ImageBackground style={styles.image} source={require('../../restable.jpg')}>

      <View style={styles.box1}>
        <Text style={styles.titleBox}>Znajdź restauracje w swoim mieście</Text>
        <View style={styles.container}>
          <View style={styles.txtInput} >
            <RNPickerSelect
              placeholder={{ label: "Lokalizacja" }}
              useNativeAndroidPickerStyle={false}
              onValueChange={value => setChangeCity(value)}
              useNativeAndroidPickerStyle={false}
              items={city}
              style={styles}
            >

            </RNPickerSelect>
          </View>
          <TouchableOpacity style={styles.search} onPress={() => navigation.navigate('Lista restauracji')}>
            <Text style={styles.txtSearch}>Szukaj</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.box2}>
        <Text style={styles.titleBox}>Wyszukaj wybraną restauracje</Text>
        <View style={styles.container}>
          <TextInput style={styles.txtInput} />
          <TouchableOpacity style={styles.search} onPress={() => navigation.navigate('')}>
            <Text style={styles.txtSearch}>Szukaj</Text>
          </TouchableOpacity>
        </View>
      </View>

    </ImageBackground>

  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {

    flexDirection: 'row',
    justifyContent: 'center',
    //alignItems: 'center',
  },
  image: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "space-around",
    width: '100%',

  },
  txtInput: {
    borderWidth: 1,
    width: 250,
    height: 50,
    textAlign: 'center',
    backgroundColor: 'white',
    borderRadius: 50,
    borderWidth: 0,
    color: 'black',

  },
  search: {
    width: '30%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5B9CE6',
    borderRadius: 50,
    marginLeft: 10,
  },
  txtSearch: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16
  },
  box1: {
    marginTop: 50

  },
  box2: {
    marginBottom: 100,

  },
  titleBox: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 30
  },
  inputAndroid: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center'

  },

})







