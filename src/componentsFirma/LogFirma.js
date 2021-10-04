import { Link } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import { View, Text, Button, StyleSheet, TouchableOpacity, Linking, Image } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../componentsFirma/AuthContext'
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-community/google-signin';
// import StackCompany from './StackCompany'
import axios from 'axios'



export function LogFirma({ navigation }) {

  const { signIn } = React.useContext(AuthContext)
    // const  signOut  = React.useContext(AuthContext)
  const [pushData, setPushData] = useState([])
  const [userInfo, setUserInfo] = useState({});
  // const [user, setUser] = useState({})
  const [loggedIn, setLoggedIn] = useState(false)
  const [gettingLoginStatus, setGettingLoginStatus] = useState(true);
  const [data, setData] = useState("");
  const [loaded, setLoaded] = useState(false)
  const [imie, setImie] = useState()
  const [password,setPassword]=useState()
  const [tokenn, setToken] = useState()
  const[admin,setAdmin]=useState([])

  const hitsory=useHistory()

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email', 'profile'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: '', // client ID of type WEB for your server (needed to verify user ID and offline access)
      forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
      accountName: '', // [Android] specifies an account name on the device that should be used
    });
    isSigned();
  }, [])

  const signInGoogle = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn()
      setUserInfo(userInfo)
      setLoaded(true)
    } catch (error) {
      console.log('Message', error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('Canceling login', error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('Sign', error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('No access to play services');
      } else {
        console.log('Error', error);
      }
    }
    
  };

  // const send = async()=>{
  //   const dupa=await isSignedIn()
  //   if(!!dupa){
  //     sendToken()
  //   }
  // }
  
  const nextPage=()=>{
    // sendToken()
    
      navigation.navigate('User')
  
    // if(admin=='admin'){
    //   navigation.navigate('Admin')
    // }
    // if(imie=='admin'){
    //   navigation.navigate('Admin')

    // }
  }

  const isSigned = async () => {
    const isSignedIn = await GoogleSignin.isSignedIn();
    if (!!isSignedIn) {
      getCurrentUserInfo()
    } else {
      console.log('You must log in')
    }
  };

  const getCurrentUserInfo = async () => {
    try {
      const userInfo = await GoogleSignin.signInSilently()

      setUserInfo(userInfo);
      // setToken(userInfo.idToken)

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
      setUserInfo({});
      // test2() // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };

  const sendToken = async () => {
    const token = userInfo.idToken
    const role='company'
    console.log(token)
    axios
      .post("http://192.168.1.143:5000/google/api/v1/auth/google", {
        idToken: token,
        role:role
      })
      .then(function (response) {
        console.log(response.data)
        setAdmin(response.data.data.role)
        // nextPage()
      })
      .catch(function (error) {
        alert(error.message);
      })

  }

  const test = async () => {
    axios
      .get("http://192.168.1.143:5000/google/me")
      .then(function (response) {

        console.log(response.data)

      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      })
      .finally(function () {
        // always executed
        alert('Finally called');
      });
  }

  const test2 = async () => {
    axios
      .delete("http://192.168.1.143:5000/google/api/v1/auth/logout")
      .then(function (response) {
        // handle success
        console.log(response.data)

      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      })
      .finally(function () {
        // always executed
        // alert('Finally called');
      });
  }



  

  // const sendToken =async () => {
  //   const token = userInfo.idToken
  //   const waittoken =await GoogleSignin.signInSilently();
  //   if(!waittoken){
  //     axios
  //       .post("http://192.168.1.143:5000/google/api/v1/auth/google",{
  //         idToken:token ,


  //       })
  //       .then(function (response) {
  //         // console.log(typeof 'token')
  //         // alert(JSON.stringify());
  //       })
  //       .catch(function (error) {
  //         alert(error.message);
  //       });
  //     }
  //   }

  return (

    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green' }}>

      <Text style={styles.txtStyle}>Zaloguj się</Text>
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
        onChangeText={text => setPassword(text)}
        value={password}
      />
      
      

       {/* {!userInfo.idToken ?
        <GoogleSigninButton
          style={{ width: 312, height: 48 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Light}
          onPress={signInGoogle}
          // onSuccess={sendToken}

        /> : 

       <>
      <TouchableOpacity style={styles.zalogujStyle} onPress={signOut}><Text>Wyloguj się </Text></TouchableOpacity>
         
        </>

      }  */}
      <TouchableOpacity style={styles.zalogujStyle} onPress={nextPage}>
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Login</Text>
      </TouchableOpacity>

      <GoogleSigninButton
        style={{ width: 312, height: 48,marginTop:5 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={signInGoogle}
        onSuccess={sendToken}

      />
      <Text style={styles.txtStyle2}>Nie masz konta? <Text style={{ fontSize: 17, color: 'blue', textDecorationLine: 'underline' }} onPress={() => navigation.navigate('Załóż konto')}>Zarejestruj się</Text></Text>

      {/* <TouchableOpacity style={styles.zalogujStyle} onPress={signOut}><Text>Wyloguj się </Text></TouchableOpacity> */}
        {/* <Text style={{ fontSize: 17, color: 'blue', textDecorationLine: 'underline' }} onPress={() => navigation.navigate('Admin')}>Jesteś administratorem?</Text> */}
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
