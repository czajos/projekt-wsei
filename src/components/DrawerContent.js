import * as React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { DrawerContentScrollView, DrawerItem, createDrawerNavigator } from '@react-navigation/drawer';
import { Title, Switch, Drawer } from 'react-native-paper';
import { AuthContext } from '../componentsFirma/AuthContext';
import Icon from 'react-native-vector-icons/Ionicons'

export function DrawerContent(props) {

    const { signOut } = React.useContext(AuthContext)

    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <Drawer.Section>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon name="home-outline"
                                color={color}
                                size={size}></Icon>)}
                        label="Home"
                        onPress={() => { props.navigation.navigate('Home') }}
                    ></DrawerItem>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon name="log-in-outline"
                                color={color}
                                size={size}></Icon>)}
                              
                        label="Zaloguj się"
                        onPress={() => { props.navigation.navigate('Zaloguj się') }}
                    ></DrawerItem>
                    <DrawerItem
                    icon={({ color, size }) => (
                            <Icon name="newspaper-outline"
                                color={color}
                                size={size}></Icon>)}
                        label="Zarejestruj się"
                        onPress={() => { props.navigation.navigate('Zarejestruj się') }}
                    ></DrawerItem>
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Icon name="business-outline"
                                color={color}
                                size={size}></Icon>)}
                        label="Dla firm"
                        onPress={() => { props.navigation.navigate('Dla firm') }}
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

