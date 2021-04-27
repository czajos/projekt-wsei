import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
// import HomeScreen from './HomeScreen'
// import LogScreen from './LogScreen'
// import RegisterScreen from './LogScreen'
import ChoiceTable from './ChoiceTable'
import RestaurantList from './RestaurantList'
import UserProfil from './UserProfil'
import LogFirma from '../componentsFirma/LogFirma'
import DrawerContent from './DrawerContent'



const RootStack=createStackNavigator();


const RootScreen=()=>(
<RootStack.Navigator headerMode='none'>
    <RootStack.Screen name="Wybierz stolik" component={ChoiceTable}></RootStack.Screen>
    <RootStack.Screen name="Lista restauracji" component={RestaurantList}></RootStack.Screen> 
    <RootStack.Screen name="Profil użytkownika" component={UserProfil}></RootStack.Screen> 
</RootStack.Navigator>
);



export default ()=> (
    <NavigationContainer>
        <RootScreen/>
    </NavigationContainer>
);

