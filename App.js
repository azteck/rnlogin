/*
React Native Firebase OTP Login
*/
import React from 'react';
import SignIn from './src/Screen/Auth/index';
import OTP from './src/Screen/Auth/Otp';
import Welcome from './src/Screen/Welcome';

import {createAppContainer} from 'react-navigation';
//react-navigation v5 syntax
//import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from 'react-navigation-stack';

//react-navigation v4 syntax
const AuthStack = createAppContainer(
  createStackNavigator(
    {
      SignIn: SignIn,
      OTP: OTP,
      Welcome: Welcome,
    },
    {
      headerMode: 'none',
      initialRouteName: 'SignIn',
    },
  ),
);

const App = () => {
  return <AuthStack />;
};

/*
//react-navigation v5 syntax
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={SignIn} />
        <Stack.Screen name="OTP" component={OTP} />
        <Stack.Screen name="Welcome" component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};*/

export default App;
