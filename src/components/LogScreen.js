
import * as React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';
import * as Animatable from 'react-native-animatable';
import { set } from 'react-native-reanimated';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';


GoogleSignin.configure({
 // scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
  webClientId: '<FROM DEVELOPER CONSOLE>', // client ID of type WEB for your server (needed to verify user ID and offline access)
  offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  hostedDomain: '', // specifies a hosted domain restriction
  loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
  forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
  accountName: '', // [Android] specifies an account name on the device that should be used
  // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  googleServicePlistPath: '', // [iOS] optional, if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
});

const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    this.setState({ userInfo });
  } catch (error) {
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      // play services not available or outdated
    } else {
      // some other error happened
    }
  }
};

export function LogScreen({ navigation }) {
  const [data, setData] = React.useState({
    username: '',
    password: '',
    isValidUser: true,
    isValidPassword: true,
    check_textInput: false
  })

  const textInputUsername = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        username: val,
        isValidUser: true,
        check_textInput: true
      })
    } else {
      setData({
        ...data,
        username: val,
        isValidUser: false,
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

  const textInputPassword = (val) => {
    if (val.trim().length >= 4) {
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

  const handleValidPassword = (val) => {
    if (val.trim().length >= 8) {
      setData({
        ...data,
        isValidPassword: true,

      })
    } else {
      setData({
        ...data,
        isValidPassword: false
      })
    }
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green' }}>
      <Text style={styles.txtStyle}>Sign in</Text>
      <TextInput
        placeholder="username"
        style={styles.txtInput}
        autoCapitalize="none"
        onChangeText={(val) => textInputUsername(val)}
        onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
      />
      {data.isValidUser ? null :
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={{ color: 'red', fontSize: 15 }}>Nazwa jest za krótka(minimum to 4 znaki).</Text>
        </Animatable.View>
      }
      <TextInput
        placeholder="password"
        style={styles.txtInput}
        secureTextEntry={true}
        autoCapitalize="none"
        onChangeText={(val) => textInputPassword(val)}
        onEndEditing={(e) => handleValidPassword(e.nativeEvent.text)}
      />
      {data.isValidPassword ? null :
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={{ color: 'red', fontSize: 15 }}>Nazwa jest za krótka(minimum to 8 znaków).</Text>
        </Animatable.View>}
      <TouchableOpacity style={styles.zalogujStyle} onPress={() => navigation.navigate("Profil użytkownika")}>
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.txtStyle2}>Nie masz konta? <Text style={{ fontSize: 17, color: 'blue', textDecorationLine: 'underline' }} onPress={() => navigation.navigate('Zarejestruj się')}>Zarejestruj się</Text></Text>
      <GoogleSigninButton
        style={{ width: 192, height: 48, marginTop: 20 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={signIn}
      />
    </View>
  );
}
export default LogScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
  zalogujStyle: {
    backgroundColor: '#3B9CE6',
    color: 'white',

    height: 40,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50

  },

})
