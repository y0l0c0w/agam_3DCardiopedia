import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './components/HomeScreen.js';
import PatientPortal from './components/PatientPortal/PatientPortal.js';
import CareTeamPortal from './components/CareTeamPortal.js'
import Library from './components/Library.js'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName={'HomeScreen'}>
        <Tab.Screen name="HomeScreen" component={HomeScreen} />
        <Tab.Screen name="PatientPortal" component={PatientPortal} />
        <Tab.Screen name="CareTeamPortal" component={CareTeamPortal} />
        <Tab.Screen name="Library" component={Library} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
