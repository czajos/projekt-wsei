import React, { useState, useEffect } from 'react';
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
import { EditProfilUser } from './src/components/EditProfilUser'
import { RegisterFormUser } from './src/components/RegisterFormUser'
// import ComponentRest from './src/components/ComponentRest';
import RestaurantList from './src/components/RestaurantList'
import SearchOneRest from './src/components/SearchOneRest'
// import ChoiceTable from './src/components/ChoiceTable'
import { ProfilFirma } from './src/componentsFirma/ProfilFirma'
import { createStackNavigator } from '@react-navigation/stack';
import { EditTable } from './src/componentsFirma/EditTable'
// import { AddTable } from './src/componentsFirma/AddTable';
import { ListAddTable } from './src/componentsFirma/ListAddTable';
import { AddOneTable } from './src/componentsFirma/AddOneTable';
import TimeReservation from './src/components/TimeReservation'
import MyReservation from './src/components/MyReservation'
import NowChoiceTable from './src/components/NowChoiceTable'
import OtherDayChoiceTable from './src/components/OtherDayChoiceTable'
import Comments from './src/components/Comments'
import AddComments from './src/components/AddComments'
import InfoAboutRest from './src/components/InfoAboutRest'
import { MenuRest } from './src/components/MenuRest'
import { AddPageMenu } from './src/componentsFirma/AddPageMenu'
import { EditMenu } from './src/componentsFirma/EditMenu'
import { CreateOpeningHours } from './src/componentsFirma/CreateOpeningHours';
import { OpeningHours } from './src/componentsFirma/OpeningHours';
import { DeleteComments } from './src/componentsFirma/DeleteComments';
import Rezerwation from './src/componentsFirma/Rezerwation'
import { AdminPanel } from './src/componentsAdmin/AdminPanel'
import { LoginAdmin } from './src/componentsAdmin/LoginAdmin';
import { DrawerAdmin } from './src/componentsAdmin/DrawerAdmin'
import { Users } from './src/componentsAdmin/Users'
import { CompanyUsers } from './src/componentsAdmin/CompanyUsers'
import { InfoRestaurantAdmin } from './src/componentsAdmin/InfoRestaurantAdmin'
import TimeReserwationFirma from './src/componentsFirma/TimeReserwationFirma'
import TodayReserwationFirma from './src/componentsFirma/TodayReserwationFirma'
import OtherDayReserwationFirma from './src/componentsFirma/OtherDayReserwationFirma'
import { OpenHour } from './src/components/OpenHour'
import { CommentsAdmin } from './src/componentsAdmin/CommentsAdmin'
import { TableAdmin } from './src/componentsAdmin/TableAdmin'
import { MenuRestAdmin } from './src/componentsAdmin/MenuRestAdmin'
import { OpeningHoursAdmin } from './src/componentsAdmin/OpeningHoursAdmin'

// import axios from 'axios'
// import { useIsFocused } from '@react-navigation/native';






const Drawer = createDrawerNavigator();
const RootStack = createStackNavigator();
const CompanyStack = createStackNavigator();
const UserStack = createStackNavigator();
const AdminStack = createStackNavigator()

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true)
  const [userToken, setUserToken] = React.useState(null)

  // const [user, setUser] = React.useState()
  // // const isFocused = useIsFocused()
  // useEffect(() => {
  //   send()
  // }, [])

  // const send = () => {
  //   axios.
  //     get('http://192.168.1.143:5000/google/me')
  //     .then(response => {
  //       setUser(response.data.user.rest_id)
  //       console.log("id rest",response.data.user.rest_id)
  //     })
  // }



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
      <Drawer.Screen name="Wyszukaj restauracje" component={SearchOneRest} options={{ headerShown: false }} />
      <Drawer.Screen name="Wybierz stolik" component={NowChoiceTable} options={{ headerShown: false }} />
      <Drawer.Screen name="Wybierz stolik w inny dzień" component={OtherDayChoiceTable} options={{ headerShown: false }} />

      <Drawer.Screen name="Profil użytkownika" component={UserProfil} options={{ headerShown: false }} />
      <Drawer.Screen name="Formularz rejestracyjny" component={RegisterFormUser} options={{ headerShown: false }} />
      <Drawer.Screen name="Edycja profilu użytkownika" component={EditProfilUser} options={{ headerShown: false }} />
      <Drawer.Screen name="Czas rezerwacji" component={TimeReservation} options={{ headerShown: false }} />
      <Drawer.Screen name="Moje rezerwacje" component={MyReservation} options={{ headerShown: false }} />
      <Drawer.Screen name="Comments" component={Comments} options={{ headerShown: false }} />
      <Drawer.Screen name="Add comments" component={AddComments} options={{ headerShown: false }} />
      <Drawer.Screen name="Info" component={InfoAboutRest} options={{ headerShown: false }} />
      <Drawer.Screen name="Menu rest" component={MenuRest} options={{ headerShown: false }} />
      <Drawer.Screen name="Open_Close" component={OpenHour} options={{ headerShown: false }} />

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

      {/* <RootStack.Screen name="Godziny otwarcia" component={CreateOpeningHours} options={{ headerShown: false }} /> */}
      {/* <RootStack.Screen name="Godziny otwarcia" component={OpeningHours} options={{ headerShown: false }} /> */}
      {/* <RootStack.Screen name="Info rest" component={InfoRestaurantAdmin} options={{ headerShown: false }} /> */}

      <RootStack.Screen name="Home_" component={DrawerNavigation} />
      <RootStack.Screen name="Dla firm" component={HomeFirmaNavigation} />
      <RootStack.Screen name="User" component={CompanyStackNavigation} options={{ animationEnabled: false }} />
      <RootStack.Screen name="Admin" component={AdminStackNavigation} options={{ animationEnabled: false }} />

    </RootStack.Navigator>
  )

  const CompanyStackNavigation = ({ navigation }) => (
    <Drawer.Navigator name="Kutasowo" drawerContent={props => <DrawerFirma {...props} />} options={{ headerShown: false }} >
      {/* <Drawer.Navigator  options={{ headerShown: false }} > */}
    
      <CompanyStack.Screen name="Idź dalej" component={formFirma} options={{ headerShown: false }} />
      <CompanyStack.Screen name="Dodaj godziny" component={CreateOpeningHours} options={{ headerShown: false }} />
      <CompanyStack.Screen name="Dodaj stolik" component={ListAddTable} options={{ headerShown: false }} />
      <CompanyStack.Screen name="Menu panel" component={MenuPanel} options={{ headerShown: false }} />
      <CompanyStack.Screen name="Dodaj menu" component={AddMenu} options={{ headerShown: false }} />
      <CompanyStack.Screen name="Strona Menu" component={AddPageMenu} options={{ headerShown: false }} />
      <CompanyStack.Screen name="Edit Menu" component={EditMenu} options={{ headerShown: false }} />
      <CompanyStack.Screen name="Profil firmy" component={ProfilFirma} options={{ headerShown: false }} />
      <CompanyStack.Screen name="Dodaj" component={AddOneTable} options={{ headerShown: false }} />
      <CompanyStack.Screen name="Edit table" component={EditTable} options={{ headerShown: false }} />
      <CompanyStack.Screen name="Edytuj godziny" component={OpeningHours} options={{ headerShown: false }} />
      <CompanyStack.Screen name="Usuń komentarze" component={DeleteComments} options={{ headerShown: false }} />
      <RootStack.Screen name="Rezerwacje" component={Rezerwation} options={{ headerShown: false }} />
      <Drawer.Screen name="Czas rezerwacji dla firm" component={TimeReserwationFirma} options={{ headerShown: false }} />
      <Drawer.Screen name="Zarezerwuj na dziś" component={TodayReserwationFirma} options={{ headerShown: false }} />
      <Drawer.Screen name="Zarezerwuj na inny dzień" component={OtherDayReserwationFirma} options={{ headerShown: false }} />

    </Drawer.Navigator>
  )

  const AdminStackNavigation = () => (
    <Drawer.Navigator drawerContent={props => <DrawerAdmin {...props} />} >
      {/* <AdminStack.Screen name="Login" component={LoginAdmin} options={{ headerShown: false }} /> */}
      <AdminStack.Screen name="Admin panel" component={AdminPanel} options={{ headerShown: false }} />
      <AdminStack.Screen name="Users" component={Users} options={{ headerShown: false }} />
      <AdminStack.Screen name="Company users" component={CompanyUsers} options={{ headerShown: false }} />
      <AdminStack.Screen name="Info rest" component={InfoRestaurantAdmin} options={{ headerShown: false }} />
      <AdminStack.Screen name="Komentarze admin" component={CommentsAdmin} options={{ headerShown: false }} />
      <AdminStack.Screen name="Stoliki admin" component={TableAdmin} options={{ headerShown: false }} />
      <AdminStack.Screen name="Menu admin" component={MenuRestAdmin} options={{ headerShown: false }} />
      <AdminStack.Screen name="Godziny otwarcia admin" component={OpeningHoursAdmin} options={{ headerShown: false }} />

    </Drawer.Navigator>
  )

  const UserStackNavigation = ({ navigation }) => (
    <UserStack.Navigator>

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
