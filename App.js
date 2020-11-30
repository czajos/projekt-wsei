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


  

const Drawer=createDrawerNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator  drawerContent={props => <DrawerContent {...props}/>}>
        <Drawer.Screen name="Home" component={HomeScreen}  />
        <Drawer.Screen name="Zarejestruj się" component={RegisterScreen} />
        <Drawer.Screen name="Zaloguj się" component={LogScreen} />
        <Drawer.Screen name="Dla firm" component={HomeFirma} />
        <Drawer.Screen  name="Załóż konto" component={RegisterFirma} />
        <Drawer.Screen name="Zaloguj się jako firma" component={LogFirma} />
        <Drawer.Screen name="Idź dalej" component={formFirma} />



      </Drawer.Navigator>
    </NavigationContainer>
  )
}