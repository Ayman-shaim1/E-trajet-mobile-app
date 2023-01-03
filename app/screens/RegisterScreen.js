import { Image, ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { Text, Screen, Button, Divider } from "../components";
import * as Yup from "yup";
import {
  Form,
  ErrorMessage,
  FormField,
  SubmitButton,
} from "../components/forms";

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
  const handleSubmit = async ({
    email,
    nomcomplet,
    password,
    confirmpassword,
  }) => {
    console.log(email, password, nomcomplet, confirmpassword);
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
          Inscriver vous ici !
        </Text>
        <Form
          initialValues={{
            email: "",
            nomcomplet: "",
            password: "",
            confirmpassword: "",
          }}
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
            icon='account'
            name='nomcomplet'
            placeholder='Nom complet'
          />

          <FormField
            autoCapitalize='none'
            autoCorrect={false}
            icon='lock'
            name='password'
            placeholder='Mot de passe'
            secureTextEntry
            textContentType='password'
          />
          <FormField
            autoCapitalize='none'
            autoCorrect={false}
            icon='lock-check'
            name='confirmpassword'
            placeholder='Confirmer le mot de passe'
            secureTextEntry
            textContentType='password'
          />
          <View style={styles.buttonsContainer}>
            <SubmitButton
              text="S'inscrire"
              iconStart='account-plus'
              style={styles.registerButton}
            />
            <Divider />
            <Button text='se connecter' iconStart='login' variant='secondary' />
          </View>
        </Form>
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
    marginVertical: 20,
    textAlign: "center",
  },
  title: {
    marginBottom: 20,
    textAlign: "center",
  },
  registerButton: {
    marginBottom: 10,
  },
  buttonsContainer: {
    marginVertical: 10,
  },
});
