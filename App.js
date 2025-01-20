import React from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import Homescreen from './screens/Homescreen'
import Mapscreen from './screens/Mapscreen';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { KeyboardAvoidingView  } from 'react-native';

// S1: For Redux: details of what is happening here: https://chatgpt.com/share/6787a591-a9cc-8010-8220-8c7a8db89e71

export default function App() {
  const Stack = createStackNavigator(); // iinstance wwali cheez
  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={{ flex: 1 }}
          keyboardVerticalOffset={Platform.OS === "ios" ? -64 : -60}>

          <Stack.Navigator>
            <Stack.Screen 
              name="Homescreen"
              component={Homescreen}
              options={{ 
                headerShown:false,
              }} />
            
            <Stack.Screen 
              name="Mapscreen"
              component={Mapscreen}
              options={{
                headerShown:false,
                }} />
          </Stack.Navigator>
          </KeyboardAvoidingView>
          
        </SafeAreaProvider>
     </NavigationContainer>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"Plum"
  },
});
