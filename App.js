import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import Login from'./src/Login';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      
        <Stack.Navigator>
        <Stack.Screen name="login" component={login} />
        </Stack.Navigator>
        
    </NavigationContainer>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#blafff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

