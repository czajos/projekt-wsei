import * as React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import { Title, Switch, Drawer } from 'react-native-paper';
// import { AuthContext } from './AuthContext';

import Icon from 'react-native-vector-icons/Ionicons'
import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
  } from '@react-native-community/google-signin';
//  import LogFirma from './LogFirma';

export function DrawerAdmin(props) {

    // const  signOut  = React.useContext(AuthContext)

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
                        onPress={() => { props.navigation.navigate('Admin panel') }}
                    ></DrawerItem>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon name="log-in-outline"
                                color={color}
                                size={size}></Icon>)}
                              
                        label="Goście"
                        onPress={() => { props.navigation.navigate('Users') }}
                    ></DrawerItem>
                    <DrawerItem
                    icon={({ color, size }) => (
                            <Icon name="newspaper-outline"
                                color={color}
                                size={size}></Icon>)}
                        label="Restauracje"
                        onPress={() => { props.navigation.navigate('Company users') }}
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
                    onPress={() => { signOut(console.log('wylogowany')) }}
                ></DrawerItem>
            </Drawer.Section>
        </View>
    )
}

