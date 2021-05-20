import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
// import { createStackNavigator } from 'react-navigation-stack';
import * as Animatable from 'react-native-animatable';
import ComponentRest from './ComponentRest'



export function RegisterScreen({ navigation }) {
  const [data, setData] = React.useState({
    username: "",
    email: "",
    password: "",
    isValidUsername: true,
    isValidEmail: true,
    isValidPassword: true,
    check_textInput: false
  })

  const textUsernameInput = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        isValidUsername: true,
        check_textInput: true
      })
    } else {
      setData({
        ...data,
        username: val,
        isValidUsername: false,
        check_textInput: false
      })
    }
  }

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,

      })
    } else {
      setData({
        ...data,
        isValidUser: false
      })
    }
  }

  const textInputEmail = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        email: val,
        isValidEmail: true,
        check_textInput: true
      })
    } else {
      setData({
        ...data,
        email: val,
        isValidEmail: false,
        check_textInput: false
      })
    }
  }

  const textInputPassword = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        password: val,
        isValidPassword: true,
        check_textInput: true
      })
    } else {
      setData({
        ...data,
        password: val,
        isValidPassword: false,
        check_textInput: false
      })
    }
  }

return (
  <View style={styles.container}>
    <Text style={styles.txtStyle}>Sign up</Text>
    <TextInput
      placeholder="username"
      style={styles.txtInput}
      onChangeText={val => textUsernameInput(val)}
      onEndEditing={e => handleValidUser(e.nativeEvent.text)}
    />
    {data.isValidUsername ? null :
      <Animatable.View animation="fadeInLeft" duration={500}>
        <Text style={{ fontSize: 15, color: 'red' }}>Nazwa jest za krótka(należy podać wiecej niż 4 znaki)</Text>
      </Animatable.View>}
    <TextInput
      placeholder="e-mail adress"
      style={styles.txtInput}
      onChangeText={val => textInputEmail(val)}
       />
      {data.isValidEmail ? null:
    <Animatable.View animation="fadeInLeft" duration={500}>
      <Text style={{ fontSize: 15, color: 'red' }}>Nazwa jest za krótka(należy podać wiecej niż 4 znaki)</Text>
    </Animatable.View> }
    <TextInput
      placeholder="password"
      style={styles.txtInput}
      secureTextEntry={true} 
      onChangeText={val=>textInputPassword(val)}
      />
      {data.isValidPassword ? null:
    <Animatable.View animation="fadeInLeft" duration={500}>
      <Text style={{ fontSize: 15, color: 'red' }}>Nazwa jest za krótka(należy podać wiecej niż 8 znaków)</Text>
    </Animatable.View> }
    <TextInput
      placeholder="confirm password"
      style={styles.txtInput}
      secureTextEntry={true}
    />
    <TouchableOpacity style={styles.zarejestrujStyle} onPress={() => navigation.navigate('Formularz rejestracyjny')}>
      <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Dalej</Text>
    </TouchableOpacity>

    <Text style={styles.txtStyle2}>Masz konto? <Text style={{ fontSize: 17, color: 'blue', textDecorationLine: 'underline' }} onPress={() => navigation.navigate('Zaloguj się')}>Zaloguj się</Text></Text>
  </View>
);
}

// export default RegisterScreen;

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
    borderRadius: 50

  },

})