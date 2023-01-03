import { Image, ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { Text, Screen, Divider, Button } from "../components";
import * as Yup from "yup";
import {
  Form,
  ErrorMessage,
  FormField,
  SubmitButton,
} from "../components/forms";

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
  const handleSubmit = async ({ email, password }) => {
    console.log(email, password);
  };

  return (
    <Screen style={styles.container}>
      <ScrollView>
        <View style={styles.logoContainer}>
          <Image
            source={require("../assets/images/logo.png")}
            style={styles.logo}
            resizeMode='center'
          />
        </View>
        <Text as='header3' style={styles.title}>
          Connecter vous ici !
        </Text>
        <Form
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}>
          <FormField
            autoCapitalize='none'
            autoCorrect={false}
            icon='email'
            keyboardType='email-address'
            name='email'
            placeholder='Email'
            textContentType='emailAddress'
          />
          <FormField
            autoCapitalize='none'
            autoCorrect={false}
            icon='lock'
            name='password'
            placeholder='Password'
            secureTextEntry
            textContentType='password'
          />
          <View style={styles.buttonsContainer}>
            <SubmitButton
              text='Se connecter'
              iconStart='login'
              style={styles.loginButton}
            />
            <Divider />
            <Button
              text="S'inscrire"
              iconStart='account-plus'
              variant='secondary'
            />
          </View>
        </Form>
        <Text style={styles.or}>or</Text>
        <View style={styles.buttonsContainer}>
          <Button
            variant='danger'
            text='Se connecter avec google'
            iconStart='google'
          />
          <Button
            variant='secondary'
            text='Se connecter avec fcebook'
            iconStart='facebook'
          />
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
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
  title: {
    marginTop: 10,
    marginBottom: 30,
    textAlign: "center",
  },
  loginButton: {
    marginBottom: 10,
  },
  buttonsContainer: {
    marginVertical: 5,
  },
  or: {
    textAlign: "center",
  },
});
