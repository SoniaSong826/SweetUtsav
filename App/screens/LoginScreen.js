import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
} from "react-native";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Roboto_700Bold,
  Roboto_400Regular,
  Roboto_100Thin,
  Roboto_500Medium,
} from "@expo-google-fonts/roboto";
import { AppForm, AppFormField } from "../components/form/index";
import mainContext from "../context/Context";
import AppButton from "../components/AppButton";
import colors from "../config/colors";

function LoginScreen(props) {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { userProfile, loggingIn, doLogin, error } = useContext(mainContext);

  let [fontsLoaded] = useFonts({
    Roboto_700Bold,
    Roboto_100Thin,
    Roboto_500Medium,
    Roboto_400Regular,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/green_background.jpg")}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.container}>
            <Image
              style={styles.logo}
              source={require("../assets/icon_noBackground.png")}
            ></Image>
            {error && (
              <View style={styles.error}>
                <Text style={styles.errortext}>{error}</Text>
              </View>
            )}
            <AppForm initialValues={{ email: "", password: "" }}>
              <View>
                <AppFormField
                  style={styles.inputBox}
                  onChangeText={(email) => setEmail(email)}
                  value={email}
                  label="Email"
                  name="email"
                  autoCapitalize="none"
                  autoCorrect={false}
                  height={50}
                  icon="email"
                  keyboardType="email-address"
                  placeholder="Email"
                  disabled={loggingIn}
                  textContentType="emailAddress"
                ></AppFormField>

                <AppFormField
                  name="password"
                  style={styles.inputBox}
                  onChangeText={(password) => setPassword(password)}
                  value={password}
                  label="Password"
                  autoCapitalize="none"
                  autoCorrect={false}
                  icon="lock"
                  height={50}
                  keyboardType="visible-password"
                  secureTextEntry={true}
                  placeholder="Password"
                  disabled={loggingIn}
                  textContentType="password"
                ></AppFormField>
              </View>
              <AppButton
                style={styles.button}
                onPress={() => doLogin(email, password)}
                disabled={loggingIn}
                title="Login to Wordpress"
              ></AppButton>
            </AppForm>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backGround: {
    flex: 1,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  error: {
    backgroundColor: "#f8d7da",
    padding: 10,
    borderRadius: 5,
    borderColor: colors.danger,
  },
  errortext: {
    color: colors.danger,
  },
  container: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  inputBox: {
    width: "80%",
  },
  button: {
    marginTop: 30,
  },
});

export default LoginScreen;
