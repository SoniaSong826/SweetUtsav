import React from "react";
import {View} from "react-native";
import AppButton from "../AppButton";
import { useFormikContext } from "formik";

function SubmitButton({ title, ...otherProps }) {
  const { handleSubmit } = useFormikContext();
  return (
    <View {...otherProps}>
      <AppButton title={title} onPress={handleSubmit}></AppButton>
    </View>
  );
}

export default SubmitButton;
