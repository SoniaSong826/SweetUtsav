import React from "react";
import { Image, StyleSheet, View,TouchableOpacity } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";

const defaultPhoto = require("../assets/icon_with_background.png");
function MyAccountScreen({ photo = defaultPhoto, firstName, lastName, email }) {
  return (
    <View style={styles.container}>
      <Image source={photo} style={styles.photo}></Image>
      <AppText style={styles.name}>
        {firstName} {lastName}
      </AppText>
      <AppText style={styles.email}>{email}</AppText>
      <TouchableOpacity
        style={styles.customBtnBG}
        onPress={() => navigation.navigate("Edit Profile")}
      >
        <AppText style={styles.customBtnText}>Edit Contacts</AppText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
  },
  photo: {
    justifyContent: "center",
    alignItems: "center",
    width: 120,
    height: 120,
    borderRadius: 60,
    borderColor: colors.lightGray,
    borderWidth: 1,
    overflow: "hidden",
  },
  name: {
    marginVertical: 5,
    fontSize: 25,
    color: colors.darkSecondary,
  },
  email: {
    fontFamily: "Roboto_400Regular",
    fontSize: 15,
    color: colors.darkSecondary,
  },
  customBtnText: {
    marginVertical: 5,
    fontFamily: "Roboto_400Regular",
    textDecorationLine: "underline",
    color: colors.DoggerBlue,
    fontSize: 15,
  },
});
export default MyAccountScreen;
