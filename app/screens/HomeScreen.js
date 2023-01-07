import { Image, ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Button, Card, Text, TextInput, Loader, Screen } from "../components";
import axios from "axios";
const HomeScreen = () => {
  const [text, setText] = useState("");

  const fetchApi = async () => {
    console.log("call api");
    const { data } = await axios.get("http://192.168.1.7:5000");
    setText(data);
  };

  return (
    <Screen style={styles.container}>
      <ScrollView>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logo}
          />
        </View>
        <Button
          variant='primary'
          text='fetch api'
          style={styles.button}
          onPress={fetchApi}
        />
        <Text as='paragraph'>{text}</Text>
      </ScrollView>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
  logoContainer: {
    justifyContent: "center",
    flexDirection: "row",
  },
  logo: {
    width: "100%",
    height: 70,
    marginVertical: 0,
    marginBottom: 0,
    marginTop: 30,
    textAlign: "center",
  },
  button: {
    marginVertical: 10,
    width: "50%",
  },
});
