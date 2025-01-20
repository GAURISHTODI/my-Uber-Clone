import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import { useDispatch } from 'react-redux';
import { setOrigin, setDestination } from '../slices/navSlice'; // ✅ Import both
import { useNavigation } from '@react-navigation/native';

const data = [
    {
        id: "123",
        icon: "home",
        location: "Vellore Institute of Technology (VIT)",
        destination: {
            description: "VIT University, Vellore, Tamil Nadu, India",
            geometry: { location: { lat: 12.9692, lng: 79.1559 } } //  VIT coordinates
        }
    },
    {
        id: "456",
        icon: "briefcase",
        location: "Apple Office, Bangalore",
        destination: {
            description: "Apple Office, Bengaluru, Karnataka, India",
            geometry: { location: { lat: 12.9716, lng: 77.5946 } } // Apple Office Bangalore coordinates
        }
    }
];

const NavFavourites = ({ type }) => { //  Receive `type` 
    const dispatch = useDispatch();
    const navigation = useNavigation();

    return (
        <FlatList
            data={data}
            style={tw ``}
            ItemSeparatorComponent={() => (
                <View style={[tw`bg-gray-500`, { height: 0.9 }]} />
            )}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
                <TouchableOpacity
                    onPress={() => {
                        if (type === "origin") {
                            dispatch(setOrigin({
                                location: item.destination.geometry.location,
                                description: item.destination.description
                            }));

                            navigation.navigate("Mapscreen");

                        } else if(type=== "destination") {
                            dispatch(setDestination({
                                location: item.destination.geometry.location,
                                description: item.destination.description
                            }));

                            navigation.navigate("RideOptionsCard");
                        }

                    }}
                    style={tw`flex-row items-center p-3 mt-2`}>
                    
                    <Icon
                        style={tw`mr-1 rounded-full bg-gray-300 p-3`}
                        name={item.icon}
                        type="ionicon"
                        color="white"
                        size={16} 
                    />
                    
                    <View style={tw ``}>
                        <Text style={tw`font-semibold text-lg  `}> {item.location} </Text>
                        <Text style={tw`text-gray-500`}> {item.destination.description} </Text>
                    </View>

                </TouchableOpacity>
            )}
        />
    );
};

export default NavFavourites;
