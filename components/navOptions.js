import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import Mapscreen from '../screens/Mapscreen';
import 'react-native-get-random-values';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';


const data = [
    {
        id: 123,
        title: "Get a Ride",
        image:"https://links.papareact.com/3pn",
        screen: "Mapscreen",
    }, {
        id: 456,
        title: "Order Food",
        image:"https://links.papareact.com/28w",
        screen: "Eatscreen",
    },
    ]
const navOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);


    return (
        <View>
            <FlatList
            style={{padding:4}}
            data={data}
            horizontal
            keyExtractor={(item)=>item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                    disabled={!origin}
                    onPress={()=> navigation.navigate(item.screen)}
                    style={[tw`p-2 pl-6 pr-4 pt-4 pb-4 bg-gray-100 m-2 ml-3`, {}]}>
                    <View style={tw `${!origin && "opacity-20"}`}>
                        <Image
                            style={{width:110, height: 110, resizeMode: "contain", marginBottom:5}}
                            source={{ uri: item.image }} />
                        <Text style={tw`mt-2 text-lg font-semibold`}> {item.title}</Text>
                        <Icon
                            style={tw `p-2 bg-black rounded-full w-10 mt-4`}
                            name="arrowright"
                            color="white"
                            type="antdesign"
                             
                        />
                    </View>
                    
                </TouchableOpacity>
            )}
        />
        </View>
  )
}
export default navOptions
