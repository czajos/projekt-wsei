import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from 'react-navigation-stack';
import { View, Text,StyleSheet, ImageBackground,SafeAreaView, ScrollView } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createAppContainer} from '@react-navigation/native';
import {HomeScreen} from './src/components/HomeScreen'
import {RegisterScreen} from './src/components/RegisterScreen'
import {LogScreen} from './src/components/LogScreen'

  
// const HomeStack=createStackNavigator();
// const DetailsStack=createStackNavigator();
const Drawer=createDrawerNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="" >
        <Drawer.Screen name="Home" component={HomeScreen}  options={{drawerBarLabel:false}}/>
        <Drawer.Screen name="Register" component={RegisterScreen} />
        <Drawer.Screen name="Zaloguj się" component={LogScreen} />

      </Drawer.Navigator>
    </NavigationContainer>
  )
}

// const Stack = createStackNavigator();  // funkcja która zwraca obiekt zawierający 2 właściwości :Screen and Navigator

// function  App ()  {

//   return (
//     //komponent który zarządza drzewem nawigacji 
//     <NavigationContainer>   
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Home" component={HomeScreen}  />
//         <Stack.Screen name="Details" component={RegisterScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );

// }
// export default App;

