import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import { createStackNavigator } from '@react-navigation/stack'
import RideOptionsCard from '../components/RideOptionsCard'
import Navigatecard from '../components/Navigatecard'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { Icon } from 'react-native-elements'



const Mapscreen = () => {
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate("Homescreen")}
          style={tw`bg-gray-300 absolute top-8 left-6 z-50 p-3 rounded-full`}>
          <Icon name="menu"/>
        </TouchableOpacity>
    </View>
      <View style={tw ` h-1/3`}>
        <Map/>
      </View>

      <View style={tw `h-2/3`}>
        <Stack.Navigator>
          <Stack.Screen
            name="Navigatecard"
            component={Navigatecard}
            options={{
              headerShown:false
            }}
  
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown:false
            }}
          />

        </Stack.Navigator>
        
      </View>
    </SafeAreaView>
  )
}

export default Mapscreen

const styles = StyleSheet.create({})