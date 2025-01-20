import { StyleSheet, Text, Touchable, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import tw from 'tailwind-react-native-classnames'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import { Icon } from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler'
import { selectDestination, selectTravelTimeInfo, selectTravelTImeInfo } from '../slices/navSlice'
import { useSelector } from 'react-redux'

const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    title: "UberXL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-789",
    title: "UberLUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
]

const SURGE_CHARGE_RATE = 1.5;


const RideOptionsCard = () => {
  const navigation = useNavigation();

  const [selected, setselected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInfo);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        

        <TouchableOpacity
          onPress={() => navigation.navigate("Navigatecard")}
          style={tw `absolute top-1 left-5 z-50 rounded-full`}
        >
          <Icon name= "chevron-left" type= "fontawesome"/>

        </TouchableOpacity>
        <Text style={tw`text-center text-xl mb-4 font-semibold`}>  Select a ride - {travelTimeInformation?.distance.text} </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={( item ) => item.id}
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
          
          <TouchableOpacity
            onPress={()=>setselected(item)}
            style={tw`flex-row items-center justify-between px-10 ${id === selected?.id && "bg-gray-100" }`}>
            <Image style={[tw `mt-2 -ml-5`,{
              height: 100,
              width: 100,
              resizeMode: "contain",
            }]}
              source={{uri:image}}
            />
              <View style={tw `-ml-5`}>
              <Text style={tw `text-xl font-semibold mt-3 `}>{title}</Text>
              <Text> Travel Time- {travelTimeInformation?.duration.text}</Text>
            </View>
            <Text style={tw`text-xl -ml-7 -mt-3`}>
              
              {new Intl.NumberFormat('en-gb', {
                style: "currency",
                currency:"INR",
              }).format(
                (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier)/10
              )
              
              }
            </Text>
          </TouchableOpacity>
          
        )}
      />
      <View style= {tw `mt-auto border-t border-gray-400`}>
        <TouchableOpacity
          disabled={!selected} style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}>
          <Text style={tw `text-center text-xl text-white `}> Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
    
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})