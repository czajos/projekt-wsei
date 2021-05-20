
import { Link } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Linking, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../componentsFirma/AuthContext'
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
import StackCompany from './StackCompany'
import axios from 'axios'





export function LogFirma({ navigation }) {

  const { signIn } = React.useContext(AuthContext)
  const [pushData, setPushData] = useState([])
  const [userInfo, setUserInfo] = useState({});
  // const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [gettingLoginStatus, setGettingLoginStatus] = useState(true);
  const [data, setData] = useState("");
  const [loaded, setLoaded] = useState(false)
  const [imie, setImie] = useState()


  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email', 'profile'], // what API you want to access on behalf of the user, default is email and profile
      // hostedDomain:'http://192.168.1.143:5000/google/login',
      webClientId: '937323497149-fqllg32e0gpnv8m4ovr824mc6vm3a0ji.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
      // offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      // loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      accountName: '', // [Android] specifies an account name on the device that should be used
      // iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
      // googleServicePlistPath: '', // [iOS] optional, if you renamed your GoogleService-Info file, new name here, e.g. GoogleService-Info-Staging
    });
    isSignedIn();
    
  }, [])




  const signInGoogle = async () => {

    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
     
      console.log(userInfo)
      setUserInfo(userInfo)
      setLoaded(true)
      sendToken()
     
      // const newData=JSON.parse(userInfo)
      // console.log(newData)
      

    } catch (error) {
      console.log('Message', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('User Cancelled the Login Flow', error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Signing In', error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('Play Services Not Available or Outdated');
      } else {
        console.log('Some Other Error Happened', error);
      }
    }
    

  };

      

  const isSignedIn = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (!!isSignedIn) {
      getCurrentUserInfo()
  
    } else {
      console.log('Please Login')
    }
  };

  

  const getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently();
      setUserInfo(userInfo);


    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_REQUIRED) {
        alert('User has not signed in yet');
        console.log('User has not signed in yet');
      } else {
        alert("Something went wrong. Unable to get user's info");
        console.log("Something went wrong. Unable to get user's info");
      }
    }
  };
  const signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      setUserInfo({}); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

 

  
 

  
  const sendToken = () => {
  // const tt=token.toString('base64')
  
  const token = userInfo.idToken
    axios
      .post("http://192.168.1.143:5000/google/login",{
        // token:token ,
        headers: {
          'Authorization': `Basic ${token}` ,
        }

      })
      .then(function (response) {
        console.log(typeof 'token')
        alert(JSON.stringify( response.data.idToken));
      })
      .catch(function (error) {
        alert(error.message);
      });
  }

  // const sendData = (response) => {
  //   // const tt=token.toString('base64')
  
  //   let tokenBlob = new Blob([
  //     JSON.stringify({
  //         idToken: userInfo.idToken
  //     }, null, 2)
  //   ]);
  
  //   let config = {
  //     headers: {
  //       'Content-Type': 'application/json'
  //              }
  //   };
  
  //     axios
  //       .post("http://192.168.1.143:5000/google/login",tokenBlob,config
  
          
  
  //       )
  //       .then(function (response) {
  //         const token=response.headers
  //         if (token){
  //           setUserInfo({
  //               ...data, idToken: token, isAuthenticated: true
  //           });
  //       }
  //         console.log( response.data.idToken)
  //         alert(JSON.stringify( response.data.idToken));
  //       })
  //       .catch(function (error) {
  //         alert(error.message);
  //       });
  //   }


  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green' }}>

      <Text style={styles.txtStyle}>Sign in</Text>
      <TextInput
        placeholder="Adres e-mail"
        style={styles.txtInput}
        onChangeText={text => setImie(text)}
        value={imie}
      />
      <TextInput
        placeholder="password"
        style={styles.txtInput}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.zalogujStyle} onPress={()=> signIn()}>
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={signOut}><Text>Wyloguj się </Text></TouchableOpacity>

      <Text style={styles.txtStyle2}>Nie masz konta? <Text style={{ fontSize: 17, color: 'blue', textDecorationLine: 'underline' }} onPress={() => navigation.navigate('Załóż konto')}>Zarejestruj się</Text></Text>
      {/* {userInfo !== null ? (
        <>

          <Text style={styles.txtStyle}>
            Name: {userInfo.user.name}
          </Text>
          <Text style={styles.txtStyle}>
            Email: {userInfo.user.email}
          </Text>
          
        </>
      ) : (
        <GoogleSigninButton
          style={{ width: 312, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={signInGoogle}
        />
        
      )}*/}
      {/* <GoogleSigninButton
          style={{ width: 312, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={signInGoogle}
        /> 
    {loaded ? 
      <>

          <Text style={styles.txtStyle}>
            Name: {userInfo.user.name}
          </Text>
          <Text style={styles.txtStyle}>
            Email: {userInfo.user.email}
          </Text>
          
        </>:
        <Text>NieZalogowany</Text>
    } 
        
         */}
      {!userInfo.idToken ?
        <GoogleSigninButton
          style={{ width: 312, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={signInGoogle}
         
        /> :

        <>

          <Text style={styles.txtStyle}>
            Name: {userInfo.user.name}
          </Text>
          <Text style={styles.txtStyle}>
            Email: {userInfo.user.email}
          </Text>


        </>


      }

    </View>
  );
}

export default LogFirma;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listHeader: {
    backgroundColor: '#eee',
    color: "#222",
    height: 44,
    padding: 12
  },
  dp: {
    marginTop: 32,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  detailContainer: {
    paddingHorizontal: 20
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingTop: 10
  },
  message: {
    fontSize: 14,
    paddingBottom: 15,
    borderBottomColor: "#ccc",
    borderBottomWidth: 1
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
