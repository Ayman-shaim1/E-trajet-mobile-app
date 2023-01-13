import { StyleSheet, View, Modal, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Button, Screen, Header, Text, TextInput } from "../components";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";

export default function MapScreen() {
  const [locationExiste, setLocationExiste] = useState(false);
  const [location, setLocation] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState("");

  const getLocation = async () => {
    try {
      let { status } = await Location.requestForegroundPermissionsAsync();
      console.log("status", status);
      if (status == "granted") {
        setMessage("location permission is granted !");
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLocationExiste(true);
      setLocation(location);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      <Modal
        style={{ padding: 40, height: 500 }}
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>
        <View
          style={{
            height: "100%",
            marginTop: 60,
            backgroundColor: colors.primary,
            borderTopWidth: 30,
            borderRadius: 20,
            borderColor: colors.primary,
          }}>
          <View
            style={{
              padding: 20,
              borderRadius: 20,
              backgroundColor: colors.white,
              height: "100%",
            }}>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={{
                alignSelf: "flex-end",
                borderColor: colors.light,
                borderWidth: 1,
                width: 30,
                height: 30,
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
              }}>
              <MaterialCommunityIcons
                name='close'
                color={colors.danger}
                size={15}
              />
            </TouchableOpacity>
            <View style={{ alignItems: "center", justifyContent: "center" }}>
              <Text as='header3'>New Destination </Text>
              <Text style={{ fontWeight: "bold", color: colors.gray }}>
                Lorem ipsum dolor sit amet
              </Text>
              <Text style={{ fontWeight: "bold", color: colors.gray }}>
                consectetur adipisicing elit. Ipsa, laboriosam?
              </Text>
            </View>
            <View style={{ marginTop: 30 }}>
              <Text as='header6'>Adresse</Text>
            </View>
            <View style={{ position: "relative" }}>
              <TextInput
                placeholder='Your adresse'
                style={{ marginBottom: 0 }}
              />
              <TouchableOpacity
                style={{
                  backgroundColor: colors.primary,
                  width: 35,
                  height: 35,
                  borderRadius: 10,
                  justifyContent: "center",
                  alignItems: "center",
                  bottom: "43%",
                  left: "80%",
                }}>
                <MaterialCommunityIcons
                  name='map-marker'
                  color={colors.white}
                  size={15}
                />
              </TouchableOpacity>
            </View>
            <View>
              <TextInput
                placeholder='Enter your destination'
                style={{ marginTop: 0 }}
              />
            </View>
            <Button
              variant='secondary'
              text='confirm'
              style={{ paddingVertical: 20 }}
            />
          </View>
        </View>
      </Modal>
      {modalVisible && (
        <View
          style={{
            width: "100%",
            height: "100%",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: " rgba(0, 0, 0, 0.7)",
            zIndex: 100,
          }}></View>
      )}
      <View
        style={{
          position: "absolute",
          top: "4%",
          alignSelf: "center",
          width: "100%",
          zIndex: 1000,
        }}>
        <Header textColor="darkGray" />
      </View>

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
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 34.05,
            longitude: -6.81667,
            latitudeDelta: 0.012,
            longitudeDelta: 0.002,
          }}
        />
      )}

      <View
        style={{
          position: "absolute",
          bottom: "20%",
          alignSelf: "center",
          width: "80%",
        }}>
        <Button
          variant='primary'
          text='Get stared'
          onPress={() => setModalVisible(true)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
