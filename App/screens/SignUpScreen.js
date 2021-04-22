import React from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from "react-native";
import AppLoading from "expo-app-loading";
import * as Yup from "yup";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppText from "../components/AppText";
import colors from "../config/colors";
import Constants from "expo-constants";
import { useFonts, Roboto_100Thin } from "@expo-google-fonts/roboto";

import {
  AppForm,
  AppPicker,
  SubmitButton,
  AppFormFieldWithTitle,
} from "../components/form";
import { ScrollView } from "react-native-gesture-handler";

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
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/lightOrange_background.jpg")}
    >
      <View style={styles.bar}>
        <AppText style={styles.title}>One Step to Go...</AppText>
        <View style={styles.twoButtons}>
          <TouchableWithoutFeedback
            onPress={() => console.log("left icon clicked")}
          >
            <MaterialCommunityIcons
              name="arrow-left"
              size={35}
              color={colors.white}
            ></MaterialCommunityIcons>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={{ alignItems: "center" }}
          style={styles.container}
        >
          <View style={styles.circle}>
            <AppText style={styles.addSign}>+</AppText>
          </View>
          <AppText style={styles.photoText}>Add a Photo</AppText>
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
  bar: {
    height: Constants.statusBarHeight + 40,
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 8,
    flexDirection: "row",
    backgroundColor: colors.primary,
    alignItems: "flex-end",
    justifyContent: "center",
  },
  twoButtons: {
    paddingHorizontal: 15,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    position: "absolute",
    color: colors.white,
    fontSize: 22,
    paddingBottom: 12,
  },
  container: {
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
  photoText: {
    fontSize: 16,
    marginTop: 7,
    marginBottom: 20,
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
