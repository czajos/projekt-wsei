import * as React from 'react';
import { View, Text,Button,StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
// import { createStackNavigator } from 'react-navigation-stack';



export  function formFirma({ navigation }) {
    return (
      <View style={ styles.container }>
        <Text style={styles.txtStyle1}>Wypełnij dane</Text>
        <Text style={styles.txtStyle2}>aby przejść dalej</Text>

        <TextInput 
        placeholder="Nazwa restauracji"
         style={styles.txtInput}
          />
         <TextInput 
        placeholder="Typ restauracji"
         style={styles.txtInput} />
         <TextInput 
        placeholder="Adres lokalu"
         style={styles.txtInput} />
        <TextInput 
         placeholder="Numer telefonu"
        style={styles.txtInput} />
        <TextInput 
         placeholder="NIP"
        style={styles.txtInput}
         />
        
        <Button
          title="Idź dalej"
          onPress={() => navigation.navigate('')}
        />
      </View>
    );
  }

  const styles=StyleSheet.create({
    container: {
      flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'flex-start',
        backgroundColor:'white'
    },
    
    txtInput:{
      
      width:"80%",
      height:50,
      fontSize:17,
      borderRadius:3,
      margin:10,
      borderBottomColor:'black',
      borderEndWidth:5,
      marginBottom:10
      
      
    },
    txtStyle1:{
        fontSize:40,
        fontWeight:'bold',
        color:'black',
        marginLeft:10
    },
    txtStyle2:{
        fontSize:18,
        
        color:'black',
        marginLeft:10
    },
    btnStyle:{
fontSize:30,
color:'black',
padding:20,
margin:15
    }
      })