import React, { useState } from "react";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Alert,
  View,
} from "react-native";
import * as Yup from "yup";
import {
  AppForm,
  SubmitButton,
  AppFormFieldWithTitle,
  KeyboardAvoidingView,
  ErrorMessage,
} from "../components/form";
import email from "react-native-email";
import AppText from "../components/AppText";
import AppPicker from "../components/form/AppPicker";
import RNFileSelector from "react-native-file-selector";
import colors from "../config/colors";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Name"),
  mobile: Yup.string().required().label("Mobile"),
  email: Yup.string().required().email().label("Email"),
});
const positions = [
  { label: "Chefs", value: 1 },
  { label: "Cooks", value: 2 },
  { label: "Pastry Cooks", value: 3 },
  { label: "Bakers", value: 4 },
  { label: "Trainee", value: 5 },
  { label: "Apprentices", value: 6 },
  { label: "Kitchen Assistants", value: 7 },
  { label: "Helpers", value: 8 },
];

function CareerApplyScreen(props) {
  const [error, setError] = useState();
  const [position, setPosition] = useState(positions[0]);

  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/lightGreen_background.jpg")}
    >
      <ScrollView contentContainerStyle={styles.form}>
        <AppForm
          initialValues={{
            name: "",
            mobile: "",
            email: "",
          }}
          onSubmit={(values) => {
            const to = ["info@sweetutsav.com"]; // string or array of email addresses
            email(to, {
              subject: "Career Application from " + values.name,
              body:
                "Applicant's Name: "+ values.name +
                "\n" +
                "Mobile: " +values.mobile +
                "\n" +
                "Email Address: " + values.email +
                "\n" +
                "Position Apply for: "+ position.label,
            });
          }}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
          <AppFormFieldWithTitle name="name" title="Name" />
          <AppFormFieldWithTitle name="mobile" title="Mobile" />
          <AppFormFieldWithTitle name="email" title="Email" />
          <View style={styles.pickerContainer}>
            <AppText style={styles.stateText}>Select Position</AppText>
            <AppPicker
              placeholder="Position"
              items={positions}
              selectedItem={position}
              onSelectItem={(item) => {
                setPosition(item);
              }}
            ></AppPicker>
          </View>
          {/* <RNFileSelector
            title={"Select File"}
            visible={true}
            onDone={() => {
              console.log("file selected: " + path);
            }}
            onCancel={() => {
              console.log("cancelled");
            }}
          /> */}
          
          <SubmitButton style={styles.button} title="Submit" />
          <AppText style={styles.highlight}>
            Remember to attach your resume!
          </AppText>
        </AppForm>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backGround: {
    flex: 1,
  },
  form: {
    paddingTop: 10,
  },
  container: {
    flex: 1,
  },
  stateText: {
    color: colors.black,
    fontSize: 15,
  },
  pickerContainer: {
    flex: 1,
    alignItems: "flex-start",
    marginTop: 10,
    marginHorizontal: 10,
  },
  highlight: {
    color: colors.primary,
    fontSize: 15,
    width:"100%",
    textAlign:"center",
  },
});
export default CareerApplyScreen;
