import * as React from 'react';
import { View, Text,Button,StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
// import { createStackNavigator } from 'react-navigation-stack';



export  function RegisterFirma({ navigation }) {
    return (
      <View style={ styles.container }>
        <Text style={styles.txtStyle}>Sign up</Text>
        <TextInput 
        placeholder="username"
         style={styles.txtInput} />
         <TextInput 
        placeholder="Imię"
         style={styles.txtInput} />
         <TextInput 
        placeholder="Nazwisko"
         style={styles.txtInput} />
        <TextInput 
         placeholder="e-mail adress"
        style={styles.txtInput} />
        <TextInput 
         placeholder="password"
        style={styles.txtInput}
        secureTextEntry={true} />
        <TextInput
         placeholder="confirm password"
         style={styles.txtInput} 
         secureTextEntry={true}
         />
        <Button
          title="Dalej"
          onPress={() => navigation.navigate('Idź dalej')}
        />
         <Text style={styles.txtStyle2}>Masz konto? <Text style={{fontSize:17, color:'blue',textDecorationLine:'underline'}} onPress={()=>navigation.navigate('Zaloguj się jako firma')}>Zaloguj się</Text></Text>
      </View>
    );
  }

  const styles=StyleSheet.create({
    container: {
      flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'green'
    },
    
    txtInput:{
      
      width:"60%",
      height:40,
      textAlign:"center",
      backgroundColor:'lightgrey',
      margin:10,
      
      
    },
    txtStyle:{
        fontSize:40,
        fontWeight:'bold',
        color:'white'
    },
    txtStyle2:{
      marginTop:10,
      fontSize:16,
      
      color:'white'
  },
    btnStyle:{
fontSize:30,
color:'black',
padding:20,
margin:15
    }
      })