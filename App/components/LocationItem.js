import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Linking,
} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as SMS from "expo-sms";
import call from "react-native-phone-call";
import email from "react-native-email";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function LocationItem({
  image,
  title,
  address1,
  address2,
  tel,
  mobile,
  facebookLink,
  emailLink,
}) {
  const telephone = {
    number: tel,
    prompt: false,
  };
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image}></Image>
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.text}>{address1}</AppText>
        <AppText style={styles.text}>{address2}</AppText>
        <View style={styles.telContainer}>
          <AppText style={styles.text}>Tel: {tel}</AppText>
        </View>
        <View style={styles.telContainer}>
          <AppText style={styles.text}>Mobile: {mobile}</AppText>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.buttonBorder}
            onPress={() => call(telephone).catch(console.error)}
          >
            <MaterialCommunityIcons
              name={"phone"}
              size={25}
              color={colors.secondary}
            ></MaterialCommunityIcons>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonBorder}
            onPress={() => SMS.sendSMSAsync([mobile], "")}
          >
            <MaterialCommunityIcons
              name={"message"}
              size={23}
              color={colors.secondary}
            ></MaterialCommunityIcons>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonBorder}
            onPress={() => Linking.openURL(facebookLink)}
          >
            <MaterialCommunityIcons
              name={"facebook"}
              size={25}
              color={colors.secondary}
            ></MaterialCommunityIcons>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonBorder}
            onPress={() => {
              const to = [emailLink]; // string or array of email addresses
              email(to, {
                subject: "",
                body: "",
              }).catch(console.error);
            }}
          >
            <MaterialCommunityIcons
              name={"email"}
              size={25}
              color={colors.secondary}
            ></MaterialCommunityIcons>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
    paddingHorizontal: 20,
    flexDirection: "row",
    marginVertical: 10,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  image: {
    width: 90,
    height: 90,
    marginRight: 20,
  },
  textContainer: {
    justifyContent: "center",
  },
  title: {
    color: colors.black,
    fontSize: 18,
  },
  text: {
    color: colors.black,
    fontFamily: "Roboto_400Regular",
  },
  telContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 2,
  },
  buttonBorder: {
    width:50,
    borderColor:colors.secondary,
    borderWidth:1,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:25,
    margin:5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
});

export default LocationItem;
