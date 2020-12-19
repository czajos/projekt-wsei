import * as React from 'react';
import { View,Button, Text,StyleSheet, ImageBackground,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
// import { TextInput } from 'react-native-gesture-handler';
// import { createStackNavigator } from 'react-navigation-stack';



export function HomeScreen({ navigation }) {
  return (
 
    <ImageBackground style={styles.image} source={require('../../restable.jpg')}>
    
    <View style={styles.container}>
    
    <TextInput style={styles.txtInput}/>
    <TouchableOpacity  style={styles.search}   onPress={() => navigation.navigate('')}>
      <Text style={{color:'white',fontWeight:'bold',fontSize:14}}>Szukaj</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.container}>
      <TextInput style={styles.txtInput} />
      <TouchableOpacity  style={styles.search}   onPress={() => navigation.navigate('')}>
      <Text style={{color:'white',fontWeight:'bold',fontSize:14}}>Szukaj</Text>
      </TouchableOpacity>
      </View>
    </ImageBackground>
    
  );
}

export default HomeScreen;

const styles=StyleSheet.create({
  container: {
    flex:1,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
  },
  image:{
    flex: 1,
    resizeMode: "contain",
    justifyContent: "space-between",
    width:'100%',

  },
  txtInput:{
    borderWidth:1,
    width:"60%",
    height:50,
    textAlign:'center',
    backgroundColor:'white',
    
    
  },
  search:{
    width:'30%',
    height:50,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#5B9CE6',
  }
    })







