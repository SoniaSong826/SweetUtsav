import React from "react";
import { StyleSheet, View } from "react-native";
import AppButton from "../AppButton";
import { useFormikContext } from "formik";

function SubmitButton({ title, style, ...otherProps }) {
  const { handleSubmit } = useFormikContext();
  return (
    <View style={styles.button}>
      <AppButton title={title} onPress={handleSubmit}></AppButton>
    </View>
  );
}
const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    paddingTop: 10,
  },
});
export default SubmitButton;
