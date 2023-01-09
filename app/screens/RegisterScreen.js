import { Image, ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Text, Screen, Divider, Button, TextInput } from "../components";
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
    .required("veuillez saisire un email !")
    .email("email invalid !")
    .label("Email"),
  nomcomplet: Yup.string()
    .required("veuillez saisire votre nom !")
    .label("Nomcomplet"),
  password: Yup.string()
    .required("veuillez saisire un mot de passe !")
    .min(4, "il fau saisire au minimum 4 carctere !")
    .label("Password"),
  confirmpassword: Yup.string()
    .required("veuillez saisire le mot de passe de confirmation !")
    .min(4, "il fau saisire au minimum 4 carctere !")
    .label("Confirmpassword"),
});

export default function RegisterScreen() {
  return (
    <Screen style={styles.container}>
      <ScrollView>
        <View style={styles.logocontainer}>
          <Image
            source={require("../assets/images/logo2.png")}
            style={styles.logo}
          />
        </View>
        <View style={styles.textContainer}>
          <Text as='header2'>Sign up</Text>
          <Text as='header6' color='gray'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos?
          </Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TextInput
            placeholder='John'
            label='First name'
            style={{ width: "49%", marginRight: 3 }}
          />
          <TextInput
            placeholder='Doe'
            label='Last name'
            style={{ width: "49%", marginLeft: 3 }}
          />
        </View>

        <TextInput
          placeholder='xyz@example.com'
          label='Email'
          keyboardType='email-address'
          textContentType='emailAddress'
        />

        <TextInput
          placeholder='06 00 00 00 00 '
          label='Telephone'
          keyboardType='numeric'
        />

        <Divider withOr />
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
            Log in
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
  logocontainer: {
    marginTop: 30,
    alignItems: "center",
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
