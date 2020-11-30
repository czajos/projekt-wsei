import * as React from 'react';
import { View,Button, Text,StyleSheet} from 'react-native';
import {DrawerContentScrollView,DrawerItem,createDrawerNavigator} from '@react-navigation/drawer';
 import {Title,Switch,Drawer} from 'react-native-paper';


export  function DrawerContent(props){
    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
               <Drawer.Section>
                   <DrawerItem 
                   label="Home"
                   onPress={()=>{props.navigation.navigate('Home')}}
                   ></DrawerItem>
                   <DrawerItem 
                   label="Zaloguj się"
                   onPress={()=>{props.navigation.navigate('Zaloguj się')}}
                   ></DrawerItem>
                   <DrawerItem 
                   label="Zarejestruj się"
                   onPress={()=>{props.navigation.navigate('Zarejestruj się')}}
                   ></DrawerItem>
                    <DrawerItem 
                   label="Dla firm"
                   onPress={()=>{props.navigation.navigate('Dla firm')}}
                   ></DrawerItem>
               </Drawer.Section>
            </DrawerContentScrollView>
        </View>
    )
}