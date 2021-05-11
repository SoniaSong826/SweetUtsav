import React from "react";
import { View } from "react-native";
import AppButton from "../AppButton";
import { useFormikContext } from "formik";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();
  return <AppButton title={title} onPress={handleSubmit}></AppButton>;
}

export default SubmitButton;
