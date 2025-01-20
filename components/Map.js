import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Marker } from 'react-native-maps';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { selectOrigin, selectDestination, setTravelTImeInfo } from '../slices/navSlice';
import { GOOGLE_MAPS_APIKEY } from "@env";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);
  const dispatch = useDispatch();

  const [stateKey, setStateKey] = useState(0); // This will force re-render

  // Force re-render when the component mounts (fix for Expo reload)
  useEffect(() => {
    setStateKey((prevKey) => prevKey + 1);
  }, []);// This is for foreced-re rendering 


  useEffect(() => {
    if (!origin || !destination || !mapRef.current) return;

    console.log("Running fitToSuppliedMarkers...");
    setTimeout(() => {
      if (mapRef.current) {
        mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
          edgePadding: { top: 50, left: 50, bottom: 50, right: 50 },
        });
      }
    }, 1000);
  }, [origin, destination]);

  useEffect(() => {
    if (!origin || !destination) return;

    const getTravelTime = async () => {
      console.log("Fetching Travel Time Data...");
      try {
        const response = await fetch(
          `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`
        );
        const data = await response.json();

        console.log("Travel Time API :", data);

        if (data.rows?.[0]?.elements?.[0]) {
          dispatch(setTravelTImeInfo(data.rows[0].elements[0]));
        } else {
          console.error("Invalid API response structure.");
        }
      } catch (error) {
        console.error("Error fetching:", error);
      }
    };

    getTravelTime();
  }, [origin, destination]);

  return (
    <MapView
      key={stateKey} //  This forces a full re-render on app start
      ref={mapRef}
      style={{ flex: 1 }}
      initialRegion={{
        latitude: origin?.location?.lat || 0,
        longitude: origin?.location?.lng || 0,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}
    >
      {origin?.location && destination?.location && (
        <MapViewDirections
          key={`${origin.description}-${destination.description}`} // Forces re-render when destination changes
          origin={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          destination={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={4}
          strokeColor="blue"
          onError={(errorMessage) => console.log("Directions API Error:", errorMessage)}
        />
      )}

      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}

      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          description={destination.description}
          identifier="destination"
        />
      )}
    </MapView>
  );
};

export default Map;
