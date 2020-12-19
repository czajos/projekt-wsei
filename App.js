import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {HomeScreen} from './src/components/HomeScreen'
import {RegisterScreen} from './src/components/RegisterScreen'
import {LogScreen} from './src/components/LogScreen'
import {HomeFirma} from './src/componentsFirma/HomeFirma'
import {DrawerContent} from './src/components/DrawerContent'
import { RegisterFirma } from './src/componentsFirma/RegisterFirma';
import { formFirma } from './src/componentsFirma/formFirma';
import { LogFirma } from './src/componentsFirma/LogFirma';
import { AddTable } from './src/componentsFirma/AddTable';
import {View,ActivityIndicator} from 'react-native'

import {AuthContext} from './src/componentsFirma/AuthContext'
import RootTagContext from 'react-native/Libraries/ReactNative/RootTagContext';
 import RootScreen from './src/components/RootScreen'   
import { HeaderTitle } from '@react-navigation/stack';
import { MenuPanel } from './src/componentsFirma/MenuPanel'


const Drawer=createDrawerNavigator();

export default function App(){
const [isLoading,setIsLoading]=React.useState(true)
const [userToken,setUserToken]=React.useState(null)
const aContext=React.useMemo(()=>({
  signIn:()=>{
    setUserToken('x')
    setIsLoading(false)
  },
  signUp:()=>{
    setUserToken('x')
    setIsLoading(false)
  },
  signOut:()=>{
    setUserToken(null)
    setIsLoading(false)
  },
}))

React.useEffect(()=>{
setTimeout(()=>{
  setIsLoading(false)
},1000)
},[])

if(isLoading){
  return(
<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
  <ActivityIndicator size="large"/>
</View>
  )
}

  return(
    <AuthContext.Provider value={aContext}>
    <NavigationContainer>
    
      <Drawer.Navigator  drawerContent={props => <DrawerContent {...props}/>}>
          <Drawer.Screen name="Home" component={HomeScreen}  options={{ headerStyle: {
          backgroundColor:'green',
        }}}/> 
         <Drawer.Screen name="Zarejestruj się" component={RegisterScreen} options={{headerShown:false}}/>
        <Drawer.Screen name="Zaloguj się" component={LogScreen} options={{headerShown:false}} /> 
         <Drawer.Screen name="Dla firm" component={HomeFirma}   options={{headerStyle: {
          backgroundColor:'green',  elevation:0, },headerTitle:null}}/>  
        <Drawer.Screen  name="Załóż konto" component={RegisterFirma} options={{headerShown:false}}/>
        <Drawer.Screen name="Zaloguj się jako firma" component={LogFirma} options={{headerShown:false}}/>
         <Drawer.Screen name="Idź dalej" component={formFirma} options={{headerShown:false}}  />      
         <Drawer.Screen name="Dodaj stolik" component={AddTable} options={{headerShown:false}}  />  
         <Drawer.Screen name="Menu panel" component={MenuPanel} options={{headerShown:false}}  /> 


         </Drawer.Navigator>
        
        
         
    
    </NavigationContainer>
    </AuthContext.Provider>
  )

}
