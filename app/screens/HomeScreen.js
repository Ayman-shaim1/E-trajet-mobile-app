import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { Button, Card, Text, TextInput, Loader } from "../components";

const HomeScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text as='header1'>E-tajet</Text>
        <Text as='header2'>Hello world</Text>
        <Loader />
        <Card style={styles.card}>
          <Text as='paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Accusantium, deleniti ex facilis ab aperiam asperiores, a odit et
            blanditiis iure ipsa porro deserunt ea, eius magnam fugit possimus
            ratione quidem!
          </Text>
          <Text as='paragraph'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit
            corporis est soluta distinctio vitae provident a dignissimos
            repellendus sed tenetur natus officia esse expedita deleniti eius
            quae, corrupti earum nobis.
          </Text>
        </Card>
        <Button
          text='click me'
          iconStart='email'
          variant='primary'
          iconEnd='send'
        />
        <Button text='click me' iconStart='account' variant='secondary' />
        <Button text='click me' iconStart='check' variant='success' />
        <TextInput placeholder='hello world' icon='account' />
        <Button text='click me' iconStart='account' variant='brown' />
        <Button text='click me' iconStart='check' variant='danger' />
        <TextInput placeholder='hello world' icon='lock' />
      </View>
    </ScrollView>
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
