import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import XMEye from './screens/xmeye';
import React from 'react';
import FirstScreen from './screens/firstScreen';
import Cau2a from './screens/cau2a';
import Cau1a from './screens/cau1a';
import Cau1b from './screens/cau1b';
import Cau1c from './screens/cau1c';
import Cau1d from './screens/cau1d';
import Cau1e from './screens/cau1e';
const Stack = createNativeStackNavigator();
// export default function App() {
//   return (
//      //<FirstScreen />
//     <Cau1a />
//     // <Cau1b />
//      //<Cau1c />
//     //<Cau1d />
//     // <Cau1e />
//     // <Cau2a />
//     // <XMEye />

//   );
// }
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Cau1a">
        <Stack.Screen name="Cau1a" component={Cau1a} />
        <Stack.Screen name="Cau1b" component={Cau1b} />
        <Stack.Screen name="Cau1d" component={Cau1d} />
        <Stack.Screen name="Cau1e" component={Cau1e} />
        <Stack.Screen name="Cau1c" component={Cau1c} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}