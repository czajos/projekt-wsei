import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeScreen } from './src/components/HomeScreen'
import { RegisterScreen } from './src/components/RegisterScreen'
import { LogScreen } from './src/components/LogScreen'
import { HomeFirma } from './src/componentsFirma/HomeFirma'
import { DrawerContent } from './src/components/DrawerContent'
import { DrawerFirma } from './src/componentsFirma/DrawerFirma'
import { RegisterFirma } from './src/componentsFirma/RegisterFirma';
import { formFirma } from './src/componentsFirma/formFirma';
import { LogFirma } from './src/componentsFirma/LogFirma';
import { AddTable } from './src/componentsFirma/AddTable';
import { AddMenu } from './src/componentsFirma/AddMenu';
import { View, ActivityIndicator } from 'react-native'
import { AuthContext } from './src/componentsFirma/AuthContext'
import RootTagContext from 'react-native/Libraries/ReactNative/RootTagContext';
import RootScreen from './src/components/RootScreen'
import { HeaderTitle } from '@react-navigation/stack';
import { MenuPanel } from './src/componentsFirma/MenuPanel'
import { UserProfil } from './src/components/UserProfil'
import {EditProfilUser} from './src/components/EditProfilUser'
import {RegisterFormUser} from './src/components/RegisterFormUser'
// import ComponentRest from './src/components/ComponentRest';
import RestaurantList from './src/components/RestaurantList'
import ChoiceTable from './src/components/ChoiceTable'
import { ProfilFirma } from './src/componentsFirma/ProfilFirma'
import { createStackNavigator } from '@react-navigation/stack';
import { EditTable } from './src/componentsFirma/EditTable'
// import { AddTable } from './src/componentsFirma/AddTable';
 import { ListAddTable } from './src/componentsFirma/ListAddTable';
 import { AddOneTable } from './src/componentsFirma/AddOneTable';








const Drawer = createDrawerNavigator();
const RootStack = createStackNavigator();
const CompanyStack = createStackNavigator();
const UserStack = createStackNavigator();


export default function App() {
  const [isLoading, setIsLoading] = React.useState(true)
  const [userToken, setUserToken] = React.useState(null)
  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken('x')
      setIsLoading(false)
    },
    signUp: () => {
      setUserToken('x')
      setIsLoading(false)
    },
    signOut: () => {
      setUserToken(null)
      setIsLoading(false)
    },
  }))

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  const DrawerNavFirma = () => (
    <Drawer.Navigator drawerContent={props => <DrawerFirma {...props} />}>
      <Drawer.Screen name="Profil firmy"></Drawer.Screen>
    </Drawer.Navigator>
  )

  

  const DrawerNavigation = () => (

    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} options={{
        headerStyle: {
          backgroundColor: 'green'
        }, headerTitle: null
      }} />
      <Drawer.Screen name="Zarejestruj się" component={RegisterScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="Zaloguj się" component={LogScreen} options={{ headerShown: false }} />
      <Drawer.Screen name="Dla firm" component={HomeFirmaNavigation} options={{
        headerStyle: {
          backgroundColor: 'green', elevation: 0,
        }, headerShown: false
      }} />
      <Drawer.Screen name="Lista restauracji" component={RestaurantList} options={{ headerShown: false }} />
      <Drawer.Screen name="Wybierz stolik" component={ChoiceTable} options={{ headerShown: false }} />
      <Drawer.Screen name="Profil użytkownika" component={UserProfil} options={{ headerShown: false }} />
      <Drawer.Screen name="Formularz rejestracyjny" component={RegisterFormUser} options={{ headerShown: false }} />
      <Drawer.Screen name="Edycja profilu użytkownika" component={EditProfilUser} options={{ headerShown: false }} />
    </Drawer.Navigator>
  )

  const HomeFirmaNavigation = ({ navigation }) => (
    <CompanyStack.Navigator>

      <CompanyStack.Screen name="Dla firm" component={HomeFirma} options={{
        headerStyle: {
          backgroundColor: 'green', elevation: 0,
        }, headerShown: false
      }} />
      <CompanyStack.Screen name="Załóż konto" component={RegisterFirma} options={{ headerShown: false }} />
      <CompanyStack.Screen name="Zaloguj się jako firma" component={SignInCompanyScreen} options={{ headerShown: false }} />
      

    </CompanyStack.Navigator>
  )

  const SignInCompanyScreen = () => (
    <CompanyStack.Navigator>

      <CompanyStack.Screen name="Zaloguj się jako firma" component={LogFirma} options={{ headerShown: false }} />

    </CompanyStack.Navigator>
  )
  const RootStackScreen = ({ userToken }) => (
    <RootStack.Navigator headerMode='none'>
      
        

      <RootStack.Screen name="User" component={CompanyStackNavigation} options={{ animationEnabled: false }} />
      
        
          <RootStack.Screen name="Home_" component={DrawerNavigation} />
          <RootStack.Screen name="Dla firm" component={HomeFirmaNavigation} />
          

        
      
    </RootStack.Navigator>
  )

  const CompanyStackNavigation = ({ navigation }) => (
     <Drawer.Navigator name="Kutasowo" drawerContent={props => <DrawerFirma {...props} />} options={{ headerShown: false }} >
     {/* <Drawer.Navigator  options={{ headerShown: false }} > */}
    

      <CompanyStack.Screen name="Idź dalej" component={formFirma} options={{ headerShown: false }} />
      <CompanyStack.Screen name="Dodaj stolik" component={ListAddTable} options={{ headerShown: false }} />
      <CompanyStack.Screen name="Dodaj menu" component={AddMenu} options={{ headerShown: false }} />
      <CompanyStack.Screen name="Menu panel" component={MenuPanel} options={{ headerShown: false }} />
      <CompanyStack.Screen name="Profil firmy" component={ProfilFirma} options={{ headerShown: false }} />
      <CompanyStack.Screen name="Dodaj" component={AddOneTable} options={{ headerShown: false }} />
      <CompanyStack.Screen name="Edit table" component={EditTable} options={{ headerShown: false }} />

      
      {/* <CompanyStack.Screen name="Edit table" component={EditTable} options={{ headerShown: false }} /> */}

    </Drawer.Navigator>
  )

  const UserStackNavigation = ({ navigation }) => (
    <UserStack.Navigator>
      <UserStack.Screen name="Wybierz stolik" component={ChoiceTable} options={{ headerShown: false }} />
      <UserStack.Screen name="Lista restauracji" component={RestaurantList} options={{ headerShown: false }} />
      <UserStack.Screen name="Profil użytkownika" component={UserProfil} options={{ headerShown: false }} />
    </UserStack.Navigator>
  )
  



  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>

        {/* <DrawerNavigation></DrawerNavigation> */}
        <RootStackScreen userToken={userToken} />


        {/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={HomeScreen} options={{
            headerStyle: {
              backgroundColor: 'green'
            }, headerTitle: null
          }}/>
          <Drawer.Screen name="Zarejestruj się" component={RegisterScreen} options={{ headerShown: false }} />
          <Drawer.Screen name="Zaloguj się" component={LogScreen} options={{ headerShown: false }} />
          <Drawer.Screen name="Dla firm" component={HomeFirma} options={{
            headerStyle: {
              backgroundColor: 'green', elevation: 0,
            }, headerShown: false
          }} /> */}
        {/* <Drawer.Screen name="Profil firmy" component={ProfilFirma} options={{ headerShown: false }} />
          <Drawer.Screen name="Wybierz stolik" component={ChoiceTable} options={{ headerShown: false }} />
          <Drawer.Screen name="Lista restauracji" component={RestaurantList} options={{ headerShown: false }} />
         
          <Drawer.Screen name="Załóż konto" component={RegisterFirma} options={{ headerShown: false }} />
          <Drawer.Screen name="Zaloguj się jako firma" component={LogFirma} options={{ headerShown: false }} />
          <Drawer.Screen name="Idź dalej" component={formFirma} options={{ headerShown: false }} />
          <Drawer.Screen name="Dodaj stolik" component={AddTable} options={{ headerShown: false }} />


          <Drawer.Screen name="Menu panel" component={MenuPanel} options={{ headerShown: false }} />
          <Drawer.Screen name="Dodaj menu" component={AddMenu} options={{ headerShown: false }} />
          <Drawer.Screen name="Profil użytkownika" component={UserProfil} options={{ headerShown: false }} /> */}

        {/* </Drawer.Navigator> */}


      </NavigationContainer>

    </AuthContext.Provider>
  )

}
