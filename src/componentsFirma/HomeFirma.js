import * as React from 'react';
import { View, Button, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
// import { TextInput } from 'react-native-gesture-handler';
// import { createStackNavigator } from 'react-navigation-stack';




export function HomeFirma({ navigation }) {
  return (

    <ImageBackground style={styles.image} source={require('../../restable.jpg')}>
      <View style={styles.header}>
        <Image style={styles.image2} source={require('../../logodlafirm.png')}></Image>
      </View>
      <View style={styles.container}>

        <TouchableOpacity style={styles.zalogujStyle} onPress={() => navigation.navigate('Zaloguj się jako firma')}>
          <Text
            style={{ color: '#5B9CE6', fontSize: 20, fontWeight: 'bold' }}
          >Zaloguj się</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.zarejestrujStyle} onPress={() => navigation.navigate('Załóż konto')}>
          <Text
            style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}
          >Załóż konto</Text>
        </TouchableOpacity> */}
      </View>
    </ImageBackground>

  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',


  },
  image: {
    flex: 1,
    resizeMode: "contain",
    justifyContent: "center",
    width: '100%',

  },
  zalogujStyle: {
    backgroundColor: 'white',
    color: '#5B9CE6',
    fontSize: 12,
    height: 60,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:50,
    borderWidth:3,
    borderColor:'#5B9CE6'

  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'green',
    width: '100%',
    resizeMode: "contain",
    justifyContent: "center",


  },
  image2: {
    // width: '80%',
    // resizeMode: "contain",
    // justifyContent: "center",
    // alignItems: 'center',
    // marginTop: -30
    width: '80%',
    resizeMode: "contain",
    justifyContent: "center",
    alignItems: 'center',
    height: 100

  },
  zarejestrujStyle: {
    backgroundColor: '#5B9CE6',
    color: 'white',
    fontSize: 12,
    height: 60,
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:50
    
  }
})







