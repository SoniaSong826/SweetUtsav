import React, { useEffect, useState } from "react";
import {
  Image,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import listingsApi from "../api/listings";
import colors from "../config/colors";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import Menu from "../components/Menu";

import AppPicker from "../components/form/AppPicker";
import AppTextInput from "../components/AppTextInput";


function ItemDetailsScreen({ route }) {
  const listing = route.params["item"];
  const [listings, setListings] = useState([]);
  const categories = [];
  const attributes = listing.attributes[0].options;

  for (var i in attributes) {
    const label = JSON.stringify(attributes[i]);
    categories.push({
      label: label.substring(1, label.length - 1),
      value: i,
    });
  }
  useEffect(() => {
    loadListings();
  }, []);
  const loadListings = async () => {
    const response = await listingsApi.getListings();
    setListings(response.data);
  };

  const [category, setCategory] = useState(categories[0]);
  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/white_green_background.jpg")}
    >
      <ScrollView contentContainerStyle={styles.scrollView}>
        {listing.images.length != 0 ? (
          <Image
            style={styles.image}
            source={{ uri: listing.images[0].src }}
          ></Image>
        ) : (
          <Image
            style={styles.image}
            source={require("../assets/icon_default.jpg")}
          ></Image>
        )}
        <View style={styles.textButtonContainer}>
          <View style={styles.textsContainer}>
            <AppText style={styles.itemName}>{listing.name}</AppText>
            <AppText style={styles.itemPrice}>{listing.price}</AppText>
          </View>
        </View>
        <View style={styles.selectionsContainer}>
          <View style={styles.weightOption}>
            <AppText style={styles.boldBigtext}>Choose an option:</AppText>
            <AppPicker
              icon="weight-gram"
              placeholder="Options"
              items={categories}
              selectedItem={category}
              onSelectItem={(item) => setCategory(item)}
            ></AppPicker>
          </View>
          <View style={styles.amountOption}>
            <AppText style={styles.boldBigtext}>Amount:</AppText>
            <AppTextInput
              icon="magnify-plus"
              placeholder="1"
              keyboardType={"numeric"}
            />
          </View>
        </View>
        <AppButton
          title="Add to Cart"
          onPress={() => console.log("Add to Cart button clicked")}
        ></AppButton>
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
    width: 250,
    height: 250,
  },
  scrollView: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  textsContainer: {
    justifyContent: "center",
  },
  textButtonContainer: {
    width: "90%",
    flexDirection: "row",
    alignContent: "flex-start",
    justifyContent: "space-between",
  },
  itemName: {
    paddingBottom: 5,
    color: colors.black,
    fontSize: 22,
  },
  itemPrice: {
    color: colors.secondary,
    fontSize: 22,
  },
  selectionsContainer: {
    width: "100%",
    paddingTop: 10,
    paddingHorizontal: "5%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  boldBigtext: {
    fontFamily: "Roboto_700Bold",
    lineHeight: 20,
    fontSize: 16,
    color: colors.black,
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
  primaryTitle: {
    marginTop: 8,
    fontSize: 20,
    textAlign: "left",
    color: colors.primary,
  },
  underlineTextbox: {
    width: "90%",
    borderColor: colors.lightGray,
    paddingBottom: 2,
    marginBottom: 5,
    borderBottomWidth: 1,
  },
  secondaryTitle: {
    marginTop: 10,
    textAlign: "left",
    fontSize: 20,
    color: colors.secondary,
  },
  regulartext: {
    textAlign: "left",
    lineHeight: 20,
    fontSize: 15,
    width: "90%",
    fontFamily: "Roboto_400Regular",
    color: colors.black,
  },
});

export default ItemDetailsScreen;
