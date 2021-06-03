import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import * as Yup from "yup";
import AppText from "../components/AppText";
import colors from "../config/colors";

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
  address_1: Yup.string().required().min(1).label("Address"),
  address_2: Yup.string().required().min(1).label("Address"),
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
const width = Dimensions.get("window").width;

function PlaceOrderScreen({totalPrice}) {
  const [state, setState] = useState(states[0]);
  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/lightOrange_background.jpg")}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView behavior="height">
          <View style={styles.container}>
            <AppForm
              style={styles.form}
              initialValues={{
                lastName: "",
                firstName: "",
                email: "",
                address_1: "",
                address_2: "",
                city: "",
                mobileNumber: "",
                postcode: "",
                state: null,
              }}
              onSubmit={(values) => console.log(values)}
              validationSchema={validationSchema}
            >
              <View style={styles.rowContainer}>
                <AppFormFieldWithTitle
                  style={styles.half}
                  name="firstName"
                  title="First Name"
                />
                <AppFormFieldWithTitle
                  style={styles.half}
                  name="lastName"
                  title="Last Name"
                />
              </View>
              <View style={styles.pickerContainer}>
                <AppText style={styles.stateText}>Pick Up Store</AppText>
                <AppPicker
                  items={states}
                  name="state"
                  placeholder="Select"
                  items={states}
                  selectedItem={state}
                  onSelectItem={(item) => setState(item)}
                />
              </View>
              <AppFormFieldWithTitle name="email" title="Email" />
              <AppFormFieldWithTitle name="address_1" title="Address Line 1" />
              <AppFormFieldWithTitle name="address_2" title="Address Line 2" />
              <View style={styles.rowContainer}>
                <AppFormFieldWithTitle
                  style={styles.oneThird}
                  name="city"
                  title="City"
                />

                <View style={styles.pickerContainer}>
                  <AppText style={styles.stateText}>State</AppText>
                  <AppPicker
                    items={states}
                    name="state"
                    placeholder="Select"
                    items={states}
                    selectedItem={state}
                    onSelectItem={(item) => setState(item)}
                  />
                </View>

                <AppFormFieldWithTitle
                  style={styles.oneThird}
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
            </AppForm>
          </View>
          <View style={styles.buttomRound}>
            <View style={styles.textContainer}>
              <AppText style={styles.text}>Total: $ {totalPrice}</AppText>
            </View>
            <AppButton
              onPress={() => console.log("pay")}
              title="Pay Now"
            ></AppButton>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backGround: {
    flex: 1,
  },
  container: {
    height: "100%",
    alignItems: "center",
  },
  rowContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  pickerContainer: {
    width: width * 0.3,
    alignItems: "flex-start",
    marginTop: 10,
  },
  stateText: {
    color: colors.black,
    fontSize: 15,
  },
  form: {
    height: "100%",
  },
  half: {
    width: width * 0.45,
  },
  oneThird: {
    width: width * 0.3,
  },
});
export default PlaceOrderScreen;
