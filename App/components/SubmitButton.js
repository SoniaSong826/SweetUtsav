import React from "react";
import {} from "react-native";
import AppButton from "../components/AppButton";
import { useFormikContext } from "formik";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton title="Sign in" onPress={handleSubmit}></AppButton>;
}

export default SubmitButton;
