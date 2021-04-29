import React from "react";
import {
  ImageBackground,
  ScrollView,
  TextInput,
  View,
  StyleSheet,
} from "react-native";
import * as Yup from "yup";
import {
  AppForm,
  AppPicker,
  SubmitButton,
  AppFormFieldWithTitle,
} from "../components/form";

const validationSchema = Yup.object().shape({
  lastName: Yup.string().required().min(1).label("LastName"),
  firstName: Yup.string().required().min(1).label("FirstName"),
  email: Yup.string().required().email().label("Email"),
  subject: Yup.string().required().max(30).label("Subject"),
  message: Yup.string().label("Message"),
});

function ContactUsScreen(props) {
  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/lightGreen_background.jpg")}
    >
      <ScrollView contentContainerStyle={styles.form}>
        <AppForm
          initialValues={{
            lastName: "",
            firstName: "",
            email: "",
            subject: "",
            message: "",
          }}
          onSubmit={(values) => console.log(values)}
          validationSchema={validationSchema}
        >
          <AppFormFieldWithTitle
            autoFocus
            name="firstName"
            title="First Name"
          />
          <AppFormFieldWithTitle name="lastName" title="Last Name" />
          <AppFormFieldWithTitle name="email" title="Email" />
          <AppFormFieldWithTitle name="subject" title="Subject" />
          <AppFormFieldWithTitle name="message" title="Message" multiline />

          <SubmitButton style={styles.button} title="Submit" />
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
    alignItems: "center",
  },
  button: {
    paddingTop: 10,
  },
});
export default ContactUsScreen;
