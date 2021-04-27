import * as React from 'react';
import { View, Text, Button, StyleSheet,TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

import { AuthContext } from './AuthContext'


export function RegisterFirma({ navigation }) {

  const [data, setData] = React.useState({
    username: '',
    imie: '',
    nazwisko: '',
    mail: '',
    password: '',
    confirmpassword: '',
    check_textInputChange: false,
    secureTextEntry: true

  })

  const { signUp } = React.useContext(AuthContext)

  // state = {
  //   username:'',
  //   imię:'',
  //   nazwisko:'',
  //   mail:'',
  //   password:'',
  //   confirmpassword:'',
  //   check_textInputChange: false,
  //   secureTextEntry: true,
  //   wasUserCreated: false
  // }

  // handleFormChange = (e) => {
  //   const { name, value } = e.target;
  //   this.setState({
  //       [name]: value
  //   })
  // }
  const textInputChange = (e) => {
    if (e.length != 0) {
      setData({
        ...data,
        username: e,
        imie: e,
        nazwisko: e,
        mail: e,
        check_textInputChange: true,
        secureTextEntry: true,
        confirm_secureTextEntry: true

      })
    }
    else {
      setData({
        ...data,
        mail: e,
        check_textInputChange: true
      })
    }
  }
  const handlePasswordChange = (e) => {
    setData({
      ...data,
      password: e,

    })
  }

  const handleConfirmPasswordChange = (e) => {
    setData({
      ...data,
      confirmpassword: e,

    })
  }
  const confirmPassword = (e) => {
    setData({
      ...data,
      confirmpassword: !data.confirm_secureTextEntry

    })
  }
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    })
  }
  return (
    <View style={styles.container}>
      <Text style={styles.txtStyle}>Sign up</Text>

      <TextInput

        placeholder="Imię"
        style={styles.txtInput}
        onChangeText={(e) => textInputChange(e)} />
      <TextInput
        placeholder="Nazwisko"
        style={styles.txtInput}
        onChangeText={(e) => textInputChange(e)} />
      <TextInput
        placeholder="e-mail adress"
        keyboardType='email-address'
        style={styles.txtInput}
        onChangeText={(e) => textInputChange(e)} />
      <TextInput
        placeholder="password"
        style={styles.txtInput}
        secureTextEntry={true}
        onChangeText={(e) => handlePasswordChange(e)} />
      <TextInput
        placeholder="confirm password"
        style={styles.txtInput}
        secureTextEntry={true}
        onChangeText={(e) => handleConfirmPasswordChange(e)}
      />
      <TouchableOpacity style={styles.zarejestrujStyle} onPress={() => { navigation.navigate('Idź dalej') }}>
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Dalej</Text>
      </TouchableOpacity>

      <Text style={styles.txtStyle2}>Masz konto? <Text style={{ fontSize: 17, color: 'blue', textDecorationLine: 'underline' }} onPress={() => navigation.navigate('Zaloguj się jako firma')}>Zaloguj się</Text></Text>
    </View>
  );
}

export default RegisterFirma;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green'
  },

  txtInput: {

    width: "60%",
    height: 40,
    textAlign: "center",
    backgroundColor: 'lightgrey',
    margin: 10,
    borderRadius: 50


  },
  txtStyle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white'
  },
  txtStyle2: {
    marginTop: 10,
    fontSize: 16,

    color: 'white'
  },
  
  zarejestrujStyle: {
    backgroundColor: '#3B9CE6',
    color: 'white',
    
    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:50

  },
})