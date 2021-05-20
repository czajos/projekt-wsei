import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity,ImageBackground } from 'react-native';
import ComponentRest from './ComponentRest'
import Icon from 'react-native-vector-icons/Ionicons'

export function RestaurantList({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back-outline"
                        color={'white'}
                        size={30}></Icon>
                </TouchableOpacity>
                <Image style={styles.imageStyleLogo} source={require('../../logo.png')}></Image>
                
            </View>
            
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            <TouchableOpacity  onPress={() => navigation.navigate('Wybierz stolik')}>
              <ComponentRest >
              {/* <ImageBackground source={require('../../restable.jpg')} style={{width:150,height:150}}></ImageBackground> */}
              </ComponentRest>
              </TouchableOpacity>
              <ComponentRest ></ComponentRest>
            </View>
        </View>
    )
}
export default RestaurantList;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column',
        backgroundColor: 'white',
        
    },
    header: {
        flexDirection: 'row',
        backgroundColor: 'green',
        width: '100%',
        resizeMode: "contain",
        justifyContent: 'flex-start',
        height: 80

    },
    imageStyleLogo: {
        width: '80%',
        resizeMode: "contain",
        justifyContent: "center",
        alignItems: 'center',
        height: 75,
        marginLeft:25  

    },


})