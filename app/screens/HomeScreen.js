import { StyleSheet, View } from "react-native";
import React from "react";
import { Button, Text, TextInput } from "../components";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text as='header1'>E-tajet</Text>
      <Text as='header6'>Hello world</Text>

      <Button text='click me' iconStart='email' variant='primary' />
      <Button text='click me' iconStart='email' variant='secondary' />
      <TextInput placeholder='enter email ...' icon='email' />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
  },
});
