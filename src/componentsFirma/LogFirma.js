
import { Link } from '@react-navigation/native';
import * as React from 'react';
import { View, Text,Button,StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export  function LogFirma({ navigation }) {
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'green' }}>
        <Text style={styles.txtStyle}>Sign in</Text>
        <TextInput 
         placeholder="Adres e-mail"
        style={styles.txtInput}
        
        />
        <TextInput 
         placeholder="password"
        style={styles.txtInput}
        secureTextEntry={true}
        />

        <Button
           
          title="Login"
          onPress={() => navigation.navigate('Zaloguj się jako firma') }
          
        />
        <Text style={styles.txtStyle2}>Nie masz konta? <Text style={{fontSize:17, color:'blue',textDecorationLine:'underline'}} onPress={()=>navigation.navigate('Załóż konto')}>Zarejestruj się</Text></Text>
      </View>
    );
  }

  const styles=StyleSheet.create({
    container: {
      flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
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
  