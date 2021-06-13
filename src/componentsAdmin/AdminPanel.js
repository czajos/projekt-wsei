import * as React from 'react';
import { View, Text, Button, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
// import { AddTable } from './AddTable'

export function AdminPanel({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={{ textAlign: 'center', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={styles.txtHeader}>Panel administratora</Text>
                </View>
            </View>
            <Text style={styles.txtTitle}>Zarządzaj wybranym typem użytkowników</Text>
            <View style={styles.buttonArea}>

                <TouchableOpacity style={styles.btnStyles}>
                    <Text style={styles.txtStyle} onPress={() => navigation.navigate('Users')}>Goście</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnStyles} onPress={() => navigation.navigate('Company users')}>
                    <Text style={styles.txtStyle}>Restauracje</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}
export default AdminPanel;


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',


        backgroundColor: 'white'
    },
    header: {
        flexDirection: 'row',
        backgroundColor: 'green',
        width: '100%',
        resizeMode: "contain",
        justifyContent: 'center',
        height: 80,


    },
    imageStyleLogo: {
        width: '80%',
        resizeMode: "contain",
        justifyContent: "center",
        alignItems: 'center',
        height: 75

    },
    btnStyles: {
        backgroundColor: '#5B9CE6',
        color: 'white',
        height: 60,
        width: '40%',
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        borderRadius: 50
    },
    txtStyle: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center',

    },
    txtHeader: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 23,
        textAlign: 'center',

    },
    txtTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 50
    },
    buttonArea: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 100,
        justifyContent: 'space-around'
    }

})