import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity,ImageBackground } from 'react-native';
import ComponentRest from './ComponentRest'

export function RestaurantList({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.imageStyleLogo} source={require('../../logo.png')}></Image>
            </View>
            
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
              <ComponentRest onPress={() => navigation.navigate('Wybierz stolik')}>
              {/* <ImageBackground source={require('../../restable.jpg')} style={{width:150,height:150}}></ImageBackground> */}
              </ComponentRest>
              <ComponentRest></ComponentRest>
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
        justifyContent: 'center',
        height: 80

    },
    imageStyleLogo: {
        width: '80%',
        resizeMode: "contain",
        justifyContent: "center",
        alignItems: 'center',
        height: 75

    },


})