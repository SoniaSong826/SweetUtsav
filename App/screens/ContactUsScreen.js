import React from "react";
import {
  ImageBackground,
  ScrollView,
  TextInput,
  View,
  StyleSheet,
} from "react-native";
import colors from "../config/colors";
import TopBar from "../components/TopBar";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

function ContactUsScreen(props) {
  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/white_background.jpg")}
    >
      <TopBar
        title="Contact Us"
        cartVisiable={false}
      ></TopBar>
      <ScrollView>
        <View style={styles.container}>
          <AppText style={styles.text}>Your Name (required)</AppText>
          <TextInput multiline={false} style={styles.textbox}></TextInput>
          <AppText style={styles.text}>Your Email (required)</AppText>
          <TextInput multiline={false} style={styles.textbox}></TextInput>
          <AppText style={styles.text}>Subject (required)</AppText>
          <TextInput multiline={false} style={styles.textbox}></TextInput>
          <AppText style={styles.text}>Message</AppText>
          <TextInput
            multiline={true}
            maxLength={1000}
            style={styles.bigTextbox}
          ></TextInput>
          <AppButton style={styles.sendButton} title="Send" onPress={()=> console.log("send button clicked")}></AppButton>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backGround: {
    flex: 1,
  },
  container: { alignItems: "center", paddingTop: 5 },
  textbox: {
    width: "90%",
    borderColor: colors.lightGray,
    borderWidth: 1,
    height: 30,
    borderRadius: 5,
    textAlignVertical: "center",
  },
  text: {
    width: "90%",
    textAlign: "left",
    color: colors.black,
    fontSize: 15,
    paddingVertical: 5,
  },
  bigTextbox: {
    width: "90%",
    borderColor: colors.lightGray,
    borderWidth: 1,
    height: 300,
    textAlignVertical: "top",
    borderRadius: 5,
  },
  sendButton:{
    marginTop:25,
  }
});
export default ContactUsScreen;
