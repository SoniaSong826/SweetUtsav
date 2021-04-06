import React from "react";
import {
  Image,
  View,
  StyleSheet,
  ImageBackground,
  TextInput,
  Text,
} from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";
import TopBar from "../components/TopBar";
import DropDownPicker from "react-native-dropdown-picker";
import { AmountInput } from "react-native-amount-input";
import AppButton from "../components/AppButton";

function ItemDetails({ itemName }) {
  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/white_background.jpg")}
    >
      <TopBar
        title={itemName}
        leftIcon={require("../assets/arrow-round-back.png")}
      ></TopBar>
      <Image
        style={styles.image}
        source={require("../assets/FoodExample/DrySweets/Balushahi-S411A-170x185.jpg")}
      ></Image>
      <View style={styles.textsContainer}>
        <AppText  style={styles.itemName}>Balushahi</AppText>
        <AppText style={styles.itemPrice}>$15.50 – $30.95</AppText>
      </View>

      <View style={styles.selectionsContainer}>
        <View style={styles.weightOption}>
          <Text style={styles.plain}>Choose an option:</Text>
          <DropDownPicker
            style={styles.dropDownPicker}
            items={[
              { label: "500 g", value: "500 g" },
              { label: "1 kg", value: "1 kg" },
            ]}
            defaultIndex={0}
            containerStyle={{ height: 30, }}
            onChangeItem={(item) => console.log(item.label, item.value)}
          ></DropDownPicker>
        </View>
        <View style={styles.amountOption}>
          <Text style={styles.plain}>Amount:</Text>
          <TextInput
            placeholder=" 1"
            underlineColorAndroid="transparent"
            style={styles.TextInputStyle}
            keyboardType={"numeric"}
          />
        </View>
      </View>
      <AppButton
        title="Add to Cart"
        onPress={() => console.log("Add to Cart button clicked")}
      ></AppButton>

    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backGround: {
    flex: 1,

    alignItems: "center",
  },
  image: {
    width: 200,
  },
  textsContainer: {
    width: "100%",
    paddingHorizontal: "5%",
    alignItems: "flex-start",
  },
  itemName: {
    
    color: colors.black,
    fontSize: 20,
  },
  itemPrice: {

    color: colors.secondary,
    fontSize: 20,
  },
  selectionsContainer: {
    height: 80,
    width: "100%",
    paddingHorizontal: "5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  weightOption: {
    width: 165,
  },
  amountOption: {
    width: 165,
  },
  TextInputStyle: {
    height: 30,
    borderColor: colors.lightGray,
    borderWidth: 1,
    borderRadius: 5,
    fontSize: 14,
  },
});

export default ItemDetails;
