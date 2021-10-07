import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import AsyncStorage from '@react-native-community/async-storage';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isFirstLaunch, SetIsFirstLaunch] = React.useState(null);
  useEffect(() => {
    AsyncStorage.getItem('alreadyLauched').then(value => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true');
        SetIsFirstLaunch(true);
      } else {
        SetIsFirstLaunch(false);
      }
    });
  }, []);

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    return (
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="Launching " component={OnboardingScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />

        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return <LoginScreen />;
  } 

}
export default App;