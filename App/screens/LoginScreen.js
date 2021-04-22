import React from "react";
import { View, StyleSheet, ImageBackground, Image } from "react-native";
import TopBar from "../components/TopBar";
import * as Yup from "yup";
import {
  AppForm,
  AppFormField,
  SubmitButton,
  ErrorMessage,
} from "../components/form/index";

function LoginScreen(props) {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(8).label("Password"),
  });
  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/lightGreen_background.jpg")}
    >
      <TopBar title="Hello! My Sweetie!" cartVisiable={false}></TopBar>

      <Image style={styles.logo} source={require("../assets/icon.png")}></Image>
      <AppForm
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <View style={styles.container}>
          <AppFormField
            style={styles.inputBox}
            name="email"
            autoCapitalize="none"
            autoCorrect={false}
            height={50}
            icon="email"
            keyboardType="email-address"
            placeholder="Email"
            textContentType="emailAddress"
          ></AppFormField>
        </View>
        <View style={styles.container}>
          <AppFormField
            name="password"
            style={styles.inputBox}
            autoCapitalize="none"
            autoCorrect={false}
            icon="lock"
            height={50}
            keyboardType="visible-password"
            secureTextEntry={true}
            placeholder="Password"
            textContentType="password"
          ></AppFormField>
        </View>
        <SubmitButton style ={styles.button} title="Sign in"></SubmitButton>
      </AppForm>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backGround: {
    flex: 1,
    alignItems: "center",
  },
  logo: {
    marginTop: 60,
  },
  container: {
    paddingHorizontal: 5,
    paddingTop: 5,
  },
  inputBox: {
    width: "80%",
  },
  button:{
    paddingTop:15,
  }
});

export default LoginScreen;
