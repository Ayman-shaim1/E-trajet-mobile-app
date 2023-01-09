import { Image, ImageBackground, StyleSheet, View } from "react-native";
import React from "react";
import { Button, Text } from "../components";
import colors from "../config/colors";

export default function WelcomeScreen() {
  return <View></View>;
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 5,
  },
  logoContainer: {
    justifyContent: "center",
    flexDirection: "row",
  },
  logo: {
    width: "100%",
    height: 90,
    marginVertical: 0,
    marginBottom: 0,

    textAlign: "center",
  },
  textContainer: {
    position: "absolute",
    top: 30,
    padding: 20,
  },
  buttonsContainer: {
    marginBottom: 15,
  },
  tagline: {
    color: colors.white,
    textAlign: "center",
  },
});
