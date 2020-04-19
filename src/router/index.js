import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Splash, Login, Register, WelcomeAuth} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="WelcomeAuth" component={WelcomeAuth} />
    </Stack.Navigator>
  );
};

export default Router;
