import React from "react";
import { View, StyleSheet, ImageBackground, Image } from "react-native";
import TopBar from "../components/TopBar";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import AppText from "../components/AppText";
import { Formik } from "formik";
import * as Yup from "yup";
import ErrorMessage from "../components/ErrorMessage";
import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";
import AppForm from "../components/AppForm";

function LoginScreen(props) {
  const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(8).label("Password"),
  });
  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/white_background.jpg")}
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
        <SubmitButton title="Sign in"></SubmitButton>
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
    padding: 10,
  },
  inputBox: {
    width: "80%",
  },
});

export default LoginScreen;
