// import * as React from 'react';
// import { View, Text,StyleSheet, ImageBackground } from 'react-native';


// export default class RegisterScreen extends React.Component{
//   render(){
//     let {container,image}=styles
//     return(

//       <View style={container}>
//       <ImageBackground source={require('../../restable.jpg')} style={image}>
        
//          <Text>Register</Text>
//         </ImageBackground>
//       </View>
//     );
//   }
// }

// const styles=StyleSheet.create({
//   container: {
//     flex:1,
//       flexDirection:'column',
//       justifyContent:'center',
//       alignItems:'center',
//   },
//   image:{
//     flex: 1,
//     resizeMode: "contain",
//     justifyContent: "center",
//     width:'100%'
//   }
//     })



import * as React from 'react';
import { View, Text,Button,StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
// import { createStackNavigator } from 'react-navigation-stack';



export  function RegisterScreen({ navigation }) {
    return (
      <View style={ styles.container }>
        <Text style={styles.txtStyle}>Sign up</Text>
        <TextInput style={styles.txtInput} />
        <TextInput style={styles.txtInput} />
        <TextInput style={styles.txtInput} />
        <TextInput style={styles.txtInput} />
        <Button
          title="Sign up"
          onPress={() => navigation.navigate('Register')}
        />
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
    btnStyle:{
fontSize:30,
color:'black',
padding:20,
margin:15
    }
      })