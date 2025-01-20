import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames'
import NavOptions from '../components/navOptions'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import {GOOGLE_MAPS_APIKEY} from "@env"
import { setOrigin, setDestination } from '../slices/navSlice'
import { useDispatch } from 'react-redux'
import NavFavourites from '../components/NavFavourites'


const Homescreen = () => {
  const dispatch = useDispatch(); //making instance 
  return (
    <SafeAreaView style={tw `bg-white h-full`}>
      <View style={tw `p-5 mb-0`}>
        <Image source={
          { uri: "https://links.papareact.com/gzs" }}
          style={{
            width:100, height:100, resizeMode:'contain', marginTop:15
          }}
        />
        
        <GooglePlacesAutocomplete
            placeholder="Where from?"
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}// only after stopping typing, 400ms me searching will start
          styles={{
            container: {
            flex:0, 
            },
            textInput: {
              fontSize: 18,
            }
          }}
          minLength={2}
            onPress={(data, details = null) => {
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description
            }))// helps pushing into the data layer
              
            dispatch(
              setDestination(null)
            ) }}

            fetchDetails={true}     
          enablePoweredByContainer={true}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language:'en'
                  }}// main midstep to link googleplacesAPI
                  
        />
      </View>
      <NavOptions />
          <NavFavourites type="origin"/>
    </SafeAreaView>
  )
}
export default Homescreen