import { StyleSheet, View } from "react-native";
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

          <Button text="S'inscrire" iconStart='account-plus' variant='brown' />
        </View>
      </Form>
      <Divider />
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
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  title: {
    marginTop: 70,
    marginBottom: 30,
    textAlign: "center",
  },
  loginButton: {
    marginBottom: 10,
  },
  buttonsContainer: {
    marginVertical: 10,
  },
});
