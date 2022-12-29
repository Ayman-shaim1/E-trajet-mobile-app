import { ImageBackground, StyleSheet, View } from "react-native";
import React from "react";
import { Button, Text } from "../components";
import colors from "../config/colors";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      //   blurRadius={10}
      style={styles.background}
      source={require("../assets/images/background.jpg")}>
      <View style={styles.textContainer}>
        <Text as='header2' style={styles.tagline}>
          Bonjour !
        </Text>
        <Text as='header4' style={styles.tagline}>
          Bienvenue dans E-trajet
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button text='Se connecter' iconStart='login' />
        <Button text="S'inscrire" iconStart='account-plus' variant='brown' />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    padding: 5,
  },

  textContainer: {
    position: "absolute",
    top: 70,
    padding: 20,
  },
  buttonsContainer: {
    marginBottom: 15,
  },
  tagline: {
    color: colors.white,
  },
});
