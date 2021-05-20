import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
// import { HomeScreen } from '../components/HomeScreen'
import { DrawerContent } from '../components/DrawerContent'
// import { DrawerFirma } from './DrawerFirma'
// import { RegisterFirma } from './RegisterFirma';
import { formFirma } from './formFirma';
import { LogFirma } from './LogFirma';
import { AddTable } from './AddTable';
import { AddMenu } from './AddMenu';
// import { View, ActivityIndicator } from 'react-native'
// import RootTagContext from 'react-native/Libraries/ReactNative/RootTagContext';

// import { HeaderTitle } from '@react-navigation/stack';
import { MenuPanel } from './MenuPanel'
// import ComponentRest from './src/components/ComponentRest';
import { ProfilFirma } from './ProfilFirma'
import { createStackNavigator } from '@react-navigation/stack';


const CompanyStack = createStackNavigator();
const Drawer = createDrawerNavigator();

export function StackCompany ({navigation}){
    return(
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />} options={{ headerShown: false }} >
    <CompanyStack.Screen name="Idź dalej" component={formFirma} options={{ headerShown: false }} />
    <CompanyStack.Screen name="Dodaj stolik" component={AddTable} options={{ headerShown: false }} />
    <CompanyStack.Screen name="Dodaj menu" component={AddMenu} options={{ headerShown: false }} />
    <CompanyStack.Screen name="Menu panel" component={MenuPanel} options={{ headerShown: false }} />
    <CompanyStack.Screen name="Profil firmy" component={ProfilFirma} options={{ headerShown: false }} />
  </Drawer.Navigator>
    )
}

export default StackCompany;