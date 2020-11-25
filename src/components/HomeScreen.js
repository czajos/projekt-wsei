import * as React from 'react';
import { View,Button, Text,StyleSheet, ImageBackground } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
// import { TextInput } from 'react-native-gesture-handler';
// import { createStackNavigator } from 'react-navigation-stack';



export function HomeScreen({ navigation }) {
  return (
 
    <ImageBackground style={styles.image} source={require('../../restable.jpg')}>
    
    <View style={styles.container}>
    
    <TextInput style={styles.txtInput}/>
      <Button
        onPress={() => navigation.navigate('')}
        title="Szukaj"
      />
      </View>
      <View style={styles.container}>
      <TextInput style={styles.txtInput} />
      <Button
        onPress={() => navigation.navigate('')}
        title="Szukaj"
      />
      </View>
    </ImageBackground>
    
  );
}

// export default class HomeScreen extends React.Component{
//   render(){
//     let {container,image}=styles
//     return(

//       <View style={container}>
//       <ImageBackground source={require('../../restable.jpg')} style={image}>
        
//          <Text>Homeee</Text>
//         </ImageBackground>
//       </View>
//     );
//   }
// }

const styles=StyleSheet.create({
  container: {
    flex:1,
      flexDirection:'row',
      justifyContent:'space-around',
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
    width:200,
    height:40,
    textAlign:"center",
    backgroundColor:'white',
    marginTop:20
    
  }
    })







// import * as React from 'react';
// import { View, Text,Button,StyleSheet, ImageBackground } from 'react-native';

// export  function HomeScreen({ navigation }) {
//   let {container,image}=styles
//     return (
//       <View style={container}>
//       <ImageBackground source={require('../../restable.jpg')} style={image}>
        
//         <Button
//           title="Localization"
//           onPress={() => navigation.navigate('Register')}   //przycisk prowadzący do componetu details 
//         />
//         </ImageBackground>
//       </View>
//     );
//   }

//   const styles=StyleSheet.create({
// container: {
//   flex:1,
//     flexDirection:'column',
//     justifyContent:'center',
//     alignItems:'center',
// },
// image:{
//   flex: 1,
//   resizeMode: "contain",
//   justifyContent: "center",
//   width:'100%'
// }
//   })