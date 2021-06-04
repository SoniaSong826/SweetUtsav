import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as Yup from "yup";
import AppText from "../components/AppText";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import {
  AppForm,
  AppPicker,
  SubmitButton,
  AppFormFieldWithTitle,
} from "../components/form";
import { ScrollView } from "react-native-gesture-handler";
import AppButton from "../components/AppButton";
import { color } from "ansi-styles";

const validationSchema = Yup.object().shape({
  lastName: Yup.string().required().min(1).label("LastName"),
  firstName: Yup.string().required().min(1).label("FirstName"),
  email: Yup.string().required().email().label("Email"),
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

function AddressScreen() {
  const [state, setState] = useState(states[0]);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
  const [pickUpTime, setPickUpTime] = useState("Choose a Pick Up Time");
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const showTimePicker = () => {
    setTimePickerVisibility(true);
  };

  const hideTimePicker = () => {
    setTimePickerVisibility(false);
  };

  const handleDateConfirm = (date) => {
    setPickUpTime(date.toString().substring(0, 21));
    hideDatePicker();
  };
  const handleTimeConfirm = (time) => {
    setPickUpTime(time.toString().substring(0, 21));
    hideTimePicker();
  };

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
          <AppText style={styles.text}>{pickUpTime}</AppText>
          <View style={styles.rowContainer}>
            <View>
              <TouchableOpacity style={styles.button} onPress={showDatePicker}>
                <View style={styles.iconwithtext}>
                  <MaterialCommunityIcons
                    name="calendar-month"
                    size={25}
                    color={colors.white}
                  ></MaterialCommunityIcons>
                  <AppText style={styles.icontext}>Pick Date</AppText>
                </View>
              </TouchableOpacity>

              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleDateConfirm}
                onCancel={hideDatePicker}
              />
            </View>

            <View>
              <TouchableOpacity style={styles.button} onPress={showTimePicker}>
                <View style={styles.iconwithtext}>
                  <MaterialCommunityIcons
                    name="clock-time-four-outline"
                    size={25}
                    color={colors.white}
                  ></MaterialCommunityIcons>
                  <AppText style={styles.icontext}>Pick Time</AppText>
                </View>
              </TouchableOpacity>

              <DateTimePickerModal
                isVisible={isTimePickerVisible}
                mode="time"
                onConfirm={handleTimeConfirm}
                onCancel={hideTimePicker}
              />
            </View>
          </View>
          <AppForm
            style={styles.form}
            initialValues={{
              lastName: "",
              firstName: "",
              email: "",
              address: "",
              city: "",
              mobileNumber: "",
              postcode: "",
              state: null,
              message: "",
            }}
            onSubmit={(values) => console.log(values)}
            validationSchema={validationSchema}
          >
            <View style={styles.rowContainer}>
              <AppFormFieldWithTitle name="firstName" title="First Name" />
              <AppFormFieldWithTitle name="lastName" title="Last Name" />
            </View>
            <AppFormFieldWithTitle name="email" title="Email" />
            <AppFormFieldWithTitle name="address" title="Address" />
            <View style={styles.rowContainer}>
              <AppFormFieldWithTitle name="city" title="City" />
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
            <AppFormFieldWithTitle name="message" title="Additional Message" />
            <SubmitButton style={styles.submitButton} title="Place Order" />
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
    width: "100%",
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
  },
  rowContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
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
  submitButton: {
    paddingTop: 20,
    paddingBottom: 80,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 7,
    borderRadius: 10,
    margin: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: colors.darkGray,
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 2,
    shadowOffset: { width: 1, height: 1 },
  },
  iconwithtext: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  icontext: {
    fontFamily: "Roboto_700Bold",
    fontSize: 20,
    color: colors.white,
    paddingHorizontal: 5,
  },
  text: {
    paddingHorizontal: 15,
    paddingVertical:5,
    borderRadius: 7,
    borderColor: colors.lightGray,
    borderWidth: 1,
    color: colors.black,
    fontSize: 20,
    marginTop: 20,
  },
});
export default AddressScreen;
