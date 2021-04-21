import React from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../AppText";
import AppTextInput from "../AppTextInput";
import ErrorMessage from "./ErrorMessage";
import { useFormikContext } from "formik";
import colors from "../../config/colors";
import AppFormField from "./AppFormField";

function AppFormFieldWithTitle({ title, name, ...otherProps }) {
  return (
    <>
      <View style={styles.container}>
        <AppText style={styles.text}>{title}</AppText>

        <AppFormField style={styles.field} name={name} {...otherProps}></AppFormField>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    alignItems: "flex-start",
    marginHorizontal:10,
  },
  text: {
    color: colors.black,
    fontSize: 15,
 
  },
  field: {
    flex:1,
    height:20,
  },
});
export default AppFormFieldWithTitle;
