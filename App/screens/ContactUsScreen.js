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
  ErrorMessage,
} from "../components/form";
import email from "react-native-email";
import { Formik } from "formik";

const validationSchema = Yup.object().shape({
  lastName: Yup.string().required().min(1).label("LastName"),
  firstName: Yup.string().required().min(1).label("FirstName"),
  subject: Yup.string().required().max(30).label("Subject"),
  message: Yup.string().label("Message"),
});

function ContactUsScreen(props) {
  const [error, setError] = useState();

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
            subject: "",
            message: "",
          }}
          onSubmit={(userInfo) => {
            const to = ["sales@sweetutsav.com.au"]; // string or array of email addresses
            email(to, {
              subject: userInfo.subject,
              body:
                userInfo.message +
                "\n" +"\n"+
                userInfo.firstName +" "+
                userInfo.lastName,
            }).catch(console.error);
          }}
          validationSchema={validationSchema}
        >
          <ErrorMessage error={error} visible={error} />
          <AppFormFieldWithTitle
            autoFocus
            name="firstName"
            title="First Name"
          />
          <AppFormFieldWithTitle name="lastName" title="Last Name" />
          <AppFormFieldWithTitle name="subject" title="Subject" />
          <AppFormFieldWithTitle name="message" title="Message" multiline />
          <SubmitButton title="Submit" />
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
  button: {
    alignItems: "center",
    paddingTop: 10,
  },
});
export default ContactUsScreen;
