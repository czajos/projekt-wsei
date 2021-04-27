import * as React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';


export function ComponentRest({ navigation }) {
    return (
      
            <View style={{  flexDirection: 'row', alignItems: 'center' }}>
                <View style={{  flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>
                    <TouchableOpacity style={styles.logoRestStyles} >
                    </TouchableOpacity>
                    <Text style={styles.nameRestStyles}>
                    </Text>
                </View>
            </View>
            
        
    )
}
export default ComponentRest;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },

    logoRestStyles: {
       
        backgroundColor: 'white',
        color: 'white',
        height: 150,
        width: 150,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        shadowOffset: {
            width: 0,
            height: 0.5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1,

        elevation: 5,
        borderRadius: 10
    },
    nameRestStyles: {
        backgroundColor: 'white',
        color: 'black',
        textAlign:'center',
        height: 50,
        width: 150,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        
        shadowOffset: {
            width: 0,
            height: 0.5,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1,

        elevation: 5,
        borderRadius: 10
    },
    txtStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',

    }

})