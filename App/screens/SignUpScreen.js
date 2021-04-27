import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  KeyboardAvoidingView,
} from "react-native";
import AppLoading from "expo-app-loading";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../components/AppText";
import colors from "../config/colors";
import Constants from "expo-constants";

import {
  AppForm,
  AppPicker,
  SubmitButton,
  AppFormFieldWithTitle,
} from "../components/form";
import { ScrollView } from "react-native-gesture-handler";
import ImageInput from "../components/ImageInput";

const validationSchema = Yup.object().shape({
  lastName: Yup.string().required().min(1).label("LastName"),
  firstName: Yup.string().required().min(1).label("FirstName"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(8).label("Password"),
  passwordConfirmation: Yup.string()
    .required()
    .oneOf([Yup.ref("Password"), null], "Passwords Not Match"),
  address: Yup.string().required().min(1).label("Address"),
  city: Yup.string().required().min(1).label("City"),
  mobileNumber: Yup.string().required().min(8).label("MobileNumber"),
  state: Yup.object().required().label("State"),
  postcode: Yup.number().required().min(4).max(4).label("Postcode"),
});
const states = [
  { label: "NSW", value: 1 }, // New South Wales
  { label: "QLD", value: 2 }, // Queensland
  { label: "SA", value: 3 }, //	South Australia
  { label: "TAS", value: 4 }, // Tasmania
  { label: "VIC", value: 5 }, // Victoria
  { label: "WA", value: 6 }, //	Western Australia
];
function SignUpScreen() {

  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/lightOrange_background.jpg")}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={{ alignItems: "center" }}
          style={styles.container}
        >
          <ImageInput></ImageInput>
          <AppForm
            style={styles.form}
            initialValues={{
              lastName: "",
              firstName: "",
              email: "",
              password: "",
              passwordConfirmation: "",
              address: "",
              city: "",
              mobileNumber: "",
              postcode: "",
              state: null,
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
          >
            <View style={styles.rowContainer}>
              <AppFormFieldWithTitle name="firstName" title="First Name" />
              <AppFormFieldWithTitle name="lastName" title="Last Name" />
            </View>
            <AppFormFieldWithTitle name="email" title="Email" />
            <AppFormFieldWithTitle
              name="password"
              keyboardType="visible-password"
              secureTextEntry={true}
              title="Password"
              textContentType="password"
              placeholder="At least eight characters"
            />

            <AppFormFieldWithTitle
              name="passwordConfirmation"
              keyboardType="visible-password"
              secureTextEntry={true}
              title="Confirm Password"
              textContentType="password"
              placeholder="Please repeat your password"
            />
            <AppFormFieldWithTitle name="address" title="Address" />
            <View style={styles.rowContainer}>
              <AppFormFieldWithTitle name="city" title="City" />
              <View style={styles.pickerContainer}>
                <AppText style={styles.stateText}>State</AppText>
                <AppPicker items={states} name="state" placeholder="Select" />
              </View>

              <AppFormFieldWithTitle
                keyboardType="numeric"
                name="postcode"
                title="Postcode"
              />
            </View>

            <AppFormFieldWithTitle
              name="mobileNumber"
              title="Mobile Number"
              keyboardType="numeric"
            />
            <SubmitButton style={styles.button} title="Sign Up Now!" />
          </AppForm>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backGround: {
    flex: 1,
  },
  container: {
    width:"100%",
    paddingVertical:20,
    paddingHorizontal: 10,
  },
  circle: {
    marginTop: 20,
    width: 120,
    backgroundColor: colors.white,
    height: 120,
    borderRadius: 60,
    borderColor: colors.lightGray,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  addSign: {
    fontSize: 70,
    fontFamily: "Roboto_100Thin",
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pickerContainer: {
    flex: 1,
    alignItems: "flex-start",
    marginTop: 10,
    marginHorizontal: 10,
  },
  stateText: {
    color: colors.black,
    fontSize: 15,
  },
  button: {
    paddingTop: 20,
    paddingBottom: 80,
  },
});
export default SignUpScreen;
