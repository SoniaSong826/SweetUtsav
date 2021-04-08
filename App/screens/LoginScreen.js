import React from "react";
import { Text, View, StyleSheet, ImageBackground, Alert } from "react-native";
import Menu from "../components/Menu";
import TopBar from "../components/TopBar";
import AppText from "../components/AppText";
import { Input, Icon } from "react-native-elements";
import colors from "../config/colors";
import AppButton from "../components/AppButton";


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
      <TopBar
        title="Hello! My Sweetie!"
        leftIcon={require("../assets/arrow-round-back.png")}
        cartVisiable={false}
      ></TopBar>
      <View>
        <AppText>Email:</AppText>
        <Input
          placeholder="Email"
          leftIcon={<Icon name="email" size={24} color={colors.lightGray} />}
          onChangeText={(text) => onChangeEmail(text)}
          value={emailValue}
          errorStyle={{ color: "red" }}
        />
        <AppText>Password:</AppText>
        <Input
          placeholder="Password"
          leftIcon={<Icon name="vpn-key" size={24} color={colors.lightGray} />}
          onChangeText={(text) => onChangePassword(text)}
          value={passwordValue}
          secureTextEntry={true}
        />
      </View>

      <AppButton
        title="Sign in"
        onPress={() => {
          if (regEmail.test(emailValue) === false) {
            Alert.alert("Invalid Email Address");
            return;
          }

          if (regPassword.test(passwordValue) === false) {
            Alert.alert("Invalid Password","Minimum eight characters, at least one letter and one number");
    
            return;
          }
        }}
      ></AppButton>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backGround: {
    flex: 1,
  },
});

export default LoginScreen;
