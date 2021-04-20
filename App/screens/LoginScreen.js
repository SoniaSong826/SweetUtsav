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
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
          <>
            <View style={styles.container}>
              <AppTextInput
                style={styles.inputBox}
                onBlur={() => setFieldTouched("email")}
                autoCapitalize="none"
                autoCorrect={false}
                height={50}
                icon="email"
                keyboardType="email-address"
                placeholder="Email"
                onChangeText={handleChange("email")}
                textContentType="emailAddress"
              ></AppTextInput>
              <ErrorMessage
                error={errors.email}
                visible={touched.email}
              ></ErrorMessage>
              <AppTextInput
                style={styles.inputBox}
                onBlur={() => setFieldTouched("password")}
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                height={50}
                keyboardType="visible-password"
                secureTextEntry={true}
                placeholder="Password"
                textContentType="password"
                onChangeText={handleChange("password")}
              ></AppTextInput>
              <ErrorMessage error={errors.password} visible={touched.password}></ErrorMessage>
            </View>
            <AppButton title="Sign in" onPress={handleSubmit}></AppButton>
          </>
        )}
      </Formik>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backGround: {
    flex: 1,
    alignItems: "center",
  },
  logo:{
    marginTop:60,
  },
  container: {
    padding: 10,
  },
  inputBox: {
    width: "80%",
  },
});

export default LoginScreen;
