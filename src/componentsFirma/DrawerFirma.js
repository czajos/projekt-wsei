import * as React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import { Title, Switch, Drawer } from 'react-native-paper';
import { AuthContext } from './AuthContext';

import Icon from 'react-native-vector-icons/Ionicons'
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-community/google-signin';
 import LogFirma from './LogFirma';
import axios from 'axios'


export function DrawerFirma(props) {

    // const  signOut  = React.useContext(AuthContext)

    const signOut = async () => {

        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
        
          // test2() // Remember to remove the user from your app's state as well
        } catch (error) {
          console.error(error);
        }
      };

    const logout = async () => {
        axios
          .delete("http://192.168.1.143:5000/google/api/v1/auth/logout")
          .then(function (response) {
            // handle success
            console.log(response.data)
    
          })
          .catch(function (error) {
            // handle error
            alert(error.message);
          })
          .finally(function () {
            // always executed
            // alert('Finally called');
          });
          signOut()
      }

    const logoutUser=()=>{
        logout()
        props.navigation.navigate('Home_')
        
    }

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <Drawer.Section>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon name="home-outline"
                                color={color}
                                size={size}></Icon>)}
                        label="Mój profil"
                        onPress={() => { props.navigation.navigate('Menu panel') }}
                    ></DrawerItem>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon name="log-in-outline"
                                color={color}
                                size={size}></Icon>)}
                              
                        label="Edytuj/dodaj stolik"
                        onPress={() => { props.navigation.navigate('Dodaj stolik') }}
                    ></DrawerItem>
                    <DrawerItem
                    icon={({ color, size }) => (
                            <Icon name="newspaper-outline"
                                color={color}
                                size={size}></Icon>)}
                        label="MENU Restauracji"
                        onPress={() => { props.navigation.navigate('Dodaj menu') }}
                    ></DrawerItem>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon name="business-outline"
                                color={color}
                                size={size}></Icon>)}
                        label="Rezerwacje"
                        onPress={() => { props.navigation.navigate('') }}
                    ></DrawerItem>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon name="business-outline"
                                color={color}
                                size={size}></Icon>)}
                        label="Home"
                        onPress={() => { props.navigation.navigate('Home_') }}
                    ></DrawerItem>

                </Drawer.Section>

            </DrawerContentScrollView>
            <Drawer.Section >
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon name="log-out-outline"
                            color={color}
                            size={size}></Icon>)}
                    label="Wyloguj się"
                    onPress={logoutUser}
                ></DrawerItem>
            </Drawer.Section>
        </View>
    )
}

