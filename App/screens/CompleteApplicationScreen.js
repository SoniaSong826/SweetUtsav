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
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label("Applicant's Name"),
  address: Yup.string().required().label("Address"),
  tel: Yup.string().required().label("Tel"),
  mobile: Yup.string().required().label("Mobile"),
  email: Yup.string().required().email().label("Email"),
  currGeo: Yup.string().required().label("This"),
  likeGeo: Yup.string().required().label("This"),
  retail: Yup.string().required().label("This"),
  capital: Yup.string().required().label("This"),
  successful: Yup.string().required().label("This"),
  examples: Yup.string().required().label("Examples"),
  howRun: Yup.string().required().label("This"),
  motivations: Yup.string().required().label("Motivations"),
  involvement: Yup.string().required().label("Involvement"),
});

function CompleteApplicationScreen(props) {
  const [error, setError] = useState();

  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/lightGreen_background.jpg")}
    >
      <KeyboardAwareScrollView
        contentContainerStyle={{ alignItems: "center" }}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.form}>
          <AppForm
            initialValues={{
              name: "",
              address: "",
              tel: "",
              mobile: "",
              email: "",
              currGeo: "",
              likeGeo: "",
              retail: "",
              capital: "",
              successful: "",
              examples: "",
              howRun: "",
              motivations: "",
              involvement: "",
            }}
            onSubmit={(values) => {
              const to = ["info@sweetutsav.com"]; // string or array of email addresses
              email(to, {
                subject: "Franchise Application from " + values.name,
                body:
                  values.address +
                  "\n" +
                  values.tel +
                  "\n" +
                  values.mobile +
                  "\n" +
                  values.email +
                  "\n" +
                  values.currGeo +
                  "\n" +
                  values.likeGeo +
                  "\n" +
                  values.retail +
                  "\n" +
                  values.capital +
                  "\n" +
                  values.successful +
                  "\n" +
                  values.examples +
                  "\n" +
                  values.howRun +
                  "\n" +
                  values.motivations +
                  "\n" +
                  values.involvement,
              });
            }}
            validationSchema={validationSchema}
          >
            <ErrorMessage error={error} visible={error} />
            <AppFormFieldWithTitle name="name" title="Applicant's Name" />
            <AppFormFieldWithTitle name="address" title="Address" />
            <AppFormFieldWithTitle name="tel" title="Telephone" />
            <AppFormFieldWithTitle name="mobile" title="Mobile" />
            <AppFormFieldWithTitle name="email" title="Email" />
            <AppFormFieldWithTitle
              name="currGeo"
              title="In which geographical areas do you currently operate your business?"
              multiline
            />
            <AppFormFieldWithTitle
              name="likeGeo"
              title="In which geographical areas do you like to operate Sweet Utsav?"
              multiline
            />
            <AppFormFieldWithTitle
              name="retail"
              title="Describe your current (Food and Beverage) retailing business set up and experience?"
              multiline
            />
            <AppFormFieldWithTitle
              name="capital"
              title="How much capital do you want to invest in this business?"
              multiline
            />
            <AppFormFieldWithTitle
              name="successful"
              title="Describe why you believe that you can be a successful Franchise."
              multiline
            />
            <AppFormFieldWithTitle
              name="examples"
              title="Give some examples of how you have set up a business to deliver excellent customer service."
              multiline
            />
            <AppFormFieldWithTitle
              name="howRun"
              title="Describe how you would run Sweet Utsav in your location."
              multiline
            />
            <AppFormFieldWithTitle
              name="motivations"
              title="What motivates you?"
              multiline
            />
            <AppFormFieldWithTitle
              name="involvement"
              title="Describe your involvement in the community, and any interests you have outside of your business?"
              multiline
            />
            <SubmitButton style={styles.button} title="Submit" />
          </AppForm>
        </ScrollView>
      </KeyboardAwareScrollView>
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
});
export default CompleteApplicationScreen;
