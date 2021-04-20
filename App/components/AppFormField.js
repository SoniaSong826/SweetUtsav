import React from "react";
import AppTextInput from "../components/AppTextInput";
import ErrorMessage from "../components/ErrorMessage";
import { useFormikContext } from "formik";

function AppFormField({ name, ...otherProps }) {
  const { handleChange, errors, setFieldTouched, touched } = useFormikContext();
  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        //   autoCapitalize="none"
        //   autoCorrect={false}
        //   height={50}
        //   icon="email"
        //   keyboardType="email-address"
        //   placeholder="Email"
        onChangeText={handleChange(name)}
        {...otherProps}
        //   textContentType="emailAddress"
      ></AppTextInput>
      <ErrorMessage error={errors[name]} visible={touched[name]}></ErrorMessage>
    </>
  );
}

export default AppFormField;
