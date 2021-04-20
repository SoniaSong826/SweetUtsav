import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Alert,
  Dimensions,
} from "react-native";
import Menu from "../components/Menu";
import TopBar from "../components/TopBar";
import AppText from "../components/AppText";
import { Input } from "react-native-elements";
import colors from "../config/colors";
import AppButton from "../components/AppButton";
import AppTextInput from "../components/AppTextInput";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function LoginScreen(props) {
  const [emailValue, onChangeEmail] = React.useState("");
  const [passwordValue, onChangePassword] = React.useState("");

  let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  let regPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/white_background.jpg")}
    >
      <TopBar title="Hello! My Sweetie!" cartVisiable={false}></TopBar>
      <View style={styles.container}>
        <View>
          <View style={styles.inputBox}>
            <Input
              placeholder="Email"
              leftIcon={
                <MaterialCommunityIcons
                  name="email"
                  size={24}
                  color={colors.lightGray}
                />
              }
              onChangeText={(text) => onChangeEmail(text)}
              value={emailValue}
              errorStyle={{ color: "red" }}
            />
          </View>

          <View style={styles.inputBox}>
            <Input
              placeholder="Password"
              leftIcon={
                <MaterialCommunityIcons
                  name="key"
                  size={24}
                  color={colors.lightGray}
                />
              }
              onChangeText={(text) => onChangePassword(text)}
              value={passwordValue}
              secureTextEntry={true}
            />
          </View>
        </View>

        <AppButton
          title="Sign in"
          onPress={() => {
            if (regEmail.test(emailValue) === false) {
              Alert.alert("Invalid Email Address");
              return;
            }

            if (regPassword.test(passwordValue) === false) {
              Alert.alert(
                "Invalid Password",
                "Minimum eight characters, at least one letter and one number"
              );

              return;
            }
          }}
        ></AppButton>
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backGround: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 40,
  },
  text: {
    fontSize: 20,
    paddingLeft: 40,
  },
  inputBox: {
    width: windowWidth,
    paddingHorizontal: 30,
  },
});

export default LoginScreen;
