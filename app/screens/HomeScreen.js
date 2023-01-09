import { Image, ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import {
  Button,
  Card,
  Text,
  TextInput,
  Loader,
  Message,
  Screen,
} from "../components";
import axios from "axios";

const HomeScreen = () => {
  const [text, setText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const fetchApi = async () => {
    try {
      console.log("call api");
      const { data } = await axios.get("http://localhost:5000");
      setText(data);
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };

  return (
    <Screen style={styles.container}>
      <ScrollView>
        {errorMessage && <Message text={errorMessage} />}
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
    width: "100%",
  },
});
