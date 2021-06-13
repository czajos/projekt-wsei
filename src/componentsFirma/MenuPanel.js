import * as React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { AddTable } from './AddTable'

export function MenuPanel({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.imageStyleLogo} source={require('../../logodlafirm.png')}></Image>

      </View>
      <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
        <View style={{ flex: 2, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
          <TouchableOpacity style={styles.btnStyles}>
            <Text style={styles.txtStyle} onPress={() => navigation.navigate('Dodaj menu')}>Menu restauracji</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnStyles}>
            <Text style={styles.txtStyle} onPress={() => navigation.navigate('Dodaj stolik')}>Edytuj stoliki</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnStyles} onPress={()=>navigation.navigate('Profil firmy')}>
            <Text style={styles.txtStyle} >Edytuj profil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnStyles}>
            <Text style={styles.txtStyle} onPress={() => navigation.navigate('Edytuj godziny')}>Godziny otwarcia</Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 2, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
          
          <TouchableOpacity style={styles.btnStyles} onPress={()=>navigation.navigate('Rezerwacje')}>
            <Text style={styles.txtStyle}>Rezerwacje</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnStyles}>
            <Text style={styles.txtStyle} onPress={() => navigation.navigate('Usuń komentarze')}>Komentarze</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnStyles}>
            <Text style={styles.txtStyle} onPress={() => navigation.navigate('Dodaj menu')}>Zrób rezerwacje</Text>
          </TouchableOpacity>
          
         
        </View>
      </View>
    </View>
  )
}
export default MenuPanel;


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
    alignItems: 'center',
    height:75

  },
  btnStyles: {
    backgroundColor: '#5B9CE6',
    color: 'white',
    height: 60,
    width: '90%',
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius: 50
  },
  txtStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',

  }

}) 