import * as React from 'react';
import { View, Text,Button,StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
// import { createStackNavigator } from 'react-navigation-stack';



export  function RegisterScreen({ navigation }) {
    return (
      <View style={ styles.container }>
        <Text style={styles.txtStyle}>Sign up</Text>
        <TextInput 
        placeholder="username"
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
          title="Sign up"
          onPress={() => navigation.navigate('Register')}
        />
        <Text style={styles.txtStyle2}>Masz konto? <Text style={{fontSize:17, color:'blue',textDecorationLine:'underline'}} onPress={()=>navigation.navigate('Zaloguj się')}>Zaloguj się</Text></Text>
      </View>
    );
  }

  // export default RegisterScreen;

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
  }
    
      })