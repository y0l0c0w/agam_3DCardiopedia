import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './components/HomeScreen';
import PatientPortal from './components/PatientPortal/PatientPortal';
import {Dimensions, Image, SafeAreaView, StyleSheet} from 'react-native';

const Stack = createNativeStackNavigator();
const Dev_Height = Dimensions.get('screen').height;
const Dev_Width = Dimensions.get('screen').width;

function headerLogo(height, width) {
  return (
    <SafeAreaView styles={styles.container}>
      <Image
        style={{
          resizeMode: 'stretch',
          height: height / 8,
          width: width,
        }}
        source={require('Cardiopedia\\header.png')}
      />
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'HomeScreen'}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="PatientPortal" component={PatientPortal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dev_Height,
    width: Dev_Width,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222222',
  },
});
