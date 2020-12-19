
import * as React from 'react';
import { View, Text,Button,StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export  function LogScreen({ navigation }) {
  
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'green' }}>
        <Text style={styles.txtStyle}>Sign in</Text>
        <TextInput 
         placeholder="username"
        style={styles.txtInput}
        secureTextEntry={true}
        />
        <TextInput 
         placeholder="password"
        style={styles.txtInput}
        secureTextEntry={true}
        />

        <Button
           
          title="Login"
          onPress={() => navigation.navigate('Zaloguj się') }
          
        />
         <Text style={styles.txtStyle2}>Nie masz konta? <Text style={{fontSize:17, color:'blue',textDecorationLine:'underline'}} onPress={()=>navigation.navigate('Zarejestruj się')}>Zarejestruj się</Text></Text>
      </View>
    );
  }
  // export default LogScreen;

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
  }
    
      })
  