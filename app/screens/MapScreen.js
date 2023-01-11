import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Header, Screen } from "../components";
import MapView, { Marker } from "react-native-maps";
import { useLocation } from "../hooks";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function MapScreen() {
  const [locationExiste, setLocationExsite] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (location) {
      setLocationExsite(true);
    }
  }, [location]);

  return (
    <Screen style={styles.container}>
      {locationExiste ? (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.012,
            longitudeDelta: 0.002,
          }}>
          <Marker
            coordinate={{
              longitude: location.longitude,
              latitude: location.latitude,
            }}
          />
        </MapView>
      ) : (
        <Text>loading ...</Text>
      )}
      <View
        style={{
          position: "absolute",
          top: "80%",
          alignSelf: "center",
          width: "80%",
        }}>
        <Button variant='primary' text='Get stared' />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
});
