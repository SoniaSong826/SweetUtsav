import React, { useState } from "react";
import {
  Image,
  View,
  StyleSheet,
  ImageBackground,
  Text,
  ScrollView,
} from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import TopBar from "../components/TopBar";
import { AmountInput } from "react-native-amount-input";
import AppButton from "../components/AppButton";
import Menu from "../components/Menu";
import { Colors } from "react-native/Libraries/NewAppScreen";
import AppPicker from "../components/AppPicker";
import AppTextInput from "../components/AppTextInput";

const categories = [
  { label: "500g", value: 1 },
  { label: "1kg", value: 2 },
];

function ItemDetailsScreen({ itemName }) {
  const [category, setCategory] = useState();
  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/white_background.jpg")}
    >
      <TopBar title={itemName}></TopBar>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Image
          style={styles.image}
          source={require("../assets/FoodExample/DrySweets/Balushahi-S411A-170x185.jpg")}
        ></Image>
        <View style={styles.textButtonContainer}>
          <View style={styles.textsContainer}>
            <AppText style={styles.itemName}>Balushahi</AppText>
            <AppText style={styles.itemPrice}>$15.50 – $30.95</AppText>
          </View>
          <AppButton
            style={styles.addButton}
            title="Add to Cart"
            onPress={() => console.log("Add to Cart button clicked")}
          ></AppButton>
        </View>

        <View style={styles.selectionsContainer}>
          <View style={styles.weightOption}>
            <AppText style={styles.boldtext}>Choose an option:</AppText>
            <AppPicker
              style={styles.optionPicker}
              icon="weight-gram"
              placeholder="Options"
              items={categories}
              selectedItem={category}
              onSelectItem={(item) => setCategory(item)}
            ></AppPicker>
          </View>
          <View style={styles.amountOption}>
            <AppText style={styles.boldtext}>Amount:</AppText>
            <AppTextInput
              icon="magnify-plus"
              placeholder="1"
              keyboardType={"numeric"}
            />
          </View>
        </View>
        <View style={styles.underlineTextbox}>
          <AppText style={styles.primaryTitle}>Description</AppText>
        </View>
        <AppText style={styles.regulartext}>
          A popular sweet from the Indian subcontinent, balushahi is similar to
          a glazed doughnut. Incredibly rich in taste, this sweet is all time
          favorite.
        </AppText>
        <View style={styles.underlineTextbox}>
          <AppText style={styles.primaryTitle}>Additional Information</AppText>
        </View>

        <AppText style={styles.boldtext}>Option: 1Kg, 500g</AppText>
        <View style={styles.underlineTextbox}>
          <AppText style={styles.primaryTitle}>Reviews</AppText>
        </View>

        <AppText style={styles.boldtext}>John Smith </AppText>
        <AppText style={styles.regulartext}>
          Great taste! My children like it!
        </AppText>
        <AppText style={styles.regulartext}>6 Apr 2021</AppText>
        <View style={styles.underlineTextbox}>
          <AppText style={styles.secondaryTitle}>Related Products</AppText>
        </View>
        <Menu></Menu>
      </ScrollView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backGround: {
    flex: 1,
  },
  image: {
    marginVertical: 15,
    width: 200,
  },
  scrollView: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  textsContainer: { 
    justifyContent: "center" 
  },
  textButtonContainer: {
    width: "90%",
    flexDirection: "row",
    alignContent: "flex-start",
    justifyContent: "space-between",
  },
  itemName: {
    paddingBottom: 2,
    color: colors.black,
    fontSize: 20,
  },
  itemPrice: {
    color: colors.secondary,
    fontSize: 20,
  },
  selectionsContainer: {
    width: "100%",
    paddingTop:10,
    paddingHorizontal: "5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  boldtext: {
    fontFamily: "Roboto_700Bold",
    width: "90%",
    lineHeight: 20,
    color: colors.black,
  },
  weightOption: {
    width: 165,
  },
  amountOption: {
    width: 165,
  },
  addButton: {
    width: 165,
    marginTop: 5,
    height: 45,
  },
  primaryTitle: {
    marginTop: 8,

    fontSize: 18,
    textAlign: "left",
    color: colors.primary,
  },
  underlineTextbox: {
    width: "90%",
    borderColor: colors.lightGray,
    paddingBottom: 2,
    borderBottomWidth: 1,
  },
  secondaryTitle: {
    marginTop: 10,
    textAlign: "left",
    fontSize: 18,
    color: colors.secondary,
  },
  regulartext: {
    textAlign: "left",
    lineHeight: 20,
    width: "90%",
    fontFamily: "Roboto_400Regular",
    color: colors.black,
  },
});

export default ItemDetailsScreen;
