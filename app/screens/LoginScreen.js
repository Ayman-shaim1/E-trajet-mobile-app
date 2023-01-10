import { Image, ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Text, Screen, Divider, Button, TextInput, Logo } from "../components";
import * as Yup from "yup";
import {
  Form,
  ErrorMessage,
  FormField,
  SubmitButton,
} from "../components/forms";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("veuillez saisire votre email !")
    .email("email invalid !")
    .label("Email"),
  password: Yup.string()
    .required("veuillez saisire votre mot de passe !")
    .min(4, "il fau saisire au minimum 4 carctere !")
    .label("Password"),
});

export default function LoginScreen() {
  const [showTxt, setShowTxt] = useState("email");

  return (
    <Screen style={styles.container}>
      <ScrollView>
        <Logo />
        <View style={styles.textContainer}>
          <Text as='header2'>Log in</Text>
          <Text as='header6' color='gray'>
            Lorem ipsum dolor sit amet.
          </Text>
        </View>
        <View style={styles.switchButtonContainer}>
          <Button
            style={styles.btnSwitch}
            variant={`${showTxt === "telephone" ? "primary" : "white"}`}
            keyboardType='numeric'
            onPress={() => setShowTxt("telephone")}
          />
          <Button
            style={styles.btnSwitch}
            variant={`${showTxt === "email" ? "primary" : "white"}`}
            keyboardType='email-address'
            textContentType='emailAddress'
            onPress={() => setShowTxt("email")}
          />
        </View>

        {showTxt === "email" ? (
          <TextInput placeholder='xyz@example.com' label='Email' type='email' />
        ) : (
          <TextInput
            placeholder='01 00 00 00 00 00'
            label='Telephone'
            type='number'
          />
        )}

        <Divider />
        <Button
          variant='white'
          text='Log in with Gmail'
          style={styles.smLoginButton}
          iconStart={require("../assets/images/google-logo.png")}
        />
        <Button
          variant='third'
          text='Log in with Apple'
          style={styles.smLoginButton}
          iconStart={require("../assets/images/apple-logo.png")}
        />
        <Button
          variant='white'
          text='Log in with facebok '
          style={styles.smLoginButton}
          iconStart={require("../assets/images/facebook-logo.png")}
        />
        <Button
          variant='third'
          text='Log in with Instagram'
          style={styles.smLoginButton}
          iconStart={require("../assets/images/instagram-logo.png")}
        />
        <View style={styles.signupTextContainer}>
          <Text as='paragraph' style={styles.text} color='gray'>
            Don't have an account?{" "}
          </Text>
          <Text as='paragraph' style={styles.text} color='primary'>
            Sign Up
          </Text>
        </View>
        <Button text='connexion' variant='secondary' />
        <View style={styles.TCPPTextContainer}>
          <Text as='paragraph' style={styles.text} color='gray'>
            By continue to log in. you accept our company
          </Text>

          <View style={styles.TCPPAndTextContainer}>
            <Text
              as='paragraph'
              style={[
                styles.text,
                { borderBottomWidth: 1, borderColor: colors.primary },
              ]}
              color='primary'>
              Terms & conditions
            </Text>
            <Text as='paragraph' style={[styles.text]} color='gray'>
              and
            </Text>
            <Text
              as='paragraph'
              style={[
                styles.text,
                { borderBottomWidth: 1, borderColor: colors.primary },
              ]}
              color='primary'>
              Privacy plicy
            </Text>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },

  textContainer: {
    alignItems: "center",
    marginVertical: 20,
  },
  switchButtonContainer: {
    flexDirection: "row",
    borderColor: colors.third,
    borderWidth: 1,
    padding: 5,
    borderRadius: 20,
  },
  text: {
    fontWeight: "bold",
    marginHorizontal: 2,
  },
  btnSwitch: {
    width: "50%",
    margin: 1,
    borderWidth: 0,
  },

  smLoginButton: {
    marginVertical: 10,
    padding: 20,
  },
  signupTextContainer: {
    flexDirection: "row",
    marginVertical: 20,
    justifyContent: "center",
  },
  TCPPTextContainer: {
    marginVertical: 20,
    alignItems: "center",
  },
  TCPPAndTextContainer: {
    flexDirection: "row",
  },
});
