import React, { useEffect, useState } from "react";
import {
  Image,
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Dimensions,
} from "react-native";
import listingsApi from "../api/listings";
import colors from "../config/colors";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import MenuWoo from "../components/MenuWoo";
import AppPicker from "../components/form/AppPicker";
import AppTextInput from "../components/AppTextInput";
import AsyncStorage from "@react-native-async-storage/async-storage";
import WooCommerceAPI from "react-native-woocommerce-api";
import Reviews from "../components/Reviews";

function onClickAddCart(data, amount, category) {
  const itemcart = {
    food: data,
    quantity: amount == "" ? 1 : amount,
    option: category,
  };

  AsyncStorage.getItem("cart")
    .then((datacart) => {
      if (datacart !== null) {
        const cart = JSON.parse(datacart);
        cart.push(itemcart);
        AsyncStorage.setItem("cart", JSON.stringify(cart));
      } else {
        const cart = [];
        cart.push(itemcart);
        AsyncStorage.setItem("cart", JSON.stringify(cart));
      }
      alert("Product Added");
    })
    .catch((err) => {
      alert(err);
    });
}

function ItemDetailsScreen({ route, navigation }) {
  const listing = route.params["item"];
  const [listings, setListings] = useState([]);
  const categories = [];
  const attributes = listing.attributes[0].options;

  const WooCommerceApp = new WooCommerceAPI({
    url: "https://melbourne.sweetutsav.com.au/", // Your store URL
    ssl: true,
    consumerKey: "ck_c051b081b4f1dcecabddabfe83682fcc4ea49b72", // Your consumer secret
    consumerSecret: "cs_c4a1ee8a76a58cbb53b75a9704fc1806056c58b0", // Your consumer secret
    wpAPI: true, // Enable the WP REST API integration
    version: "wc/v2", // WooCommerce WP REST API version
    queryStringAuth: true,
  });

  WooCommerceApp.get("products/10985/reviews")
    .then((newData) => {
      console.log(newData);
    })
    .catch((error) => {
      console.log(error);
    });

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
  const [amount, onChangeAmount] = useState(1);
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
            <AppText style={styles.itemPrice}>$ {listing.price}</AppText>
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
              value={amount}
              keyboardType={"numeric"}
              onChangeText={onChangeAmount}
            />
          </View>
        </View>
        <AppButton
          title="Add to Cart"
          onPress={() => onClickAddCart(listing, amount, category)}
        ></AppButton>
        <View style={styles.underlineTextbox}>
          <AppText style={styles.primaryTitle}>Description</AppText>
        </View>
        {listing.description.trim().replace("<p>", "").replace("</p>", "") ==
        "" ? (
          <AppText style={styles.regulartext}>
            No Description for this Product
          </AppText>
        ) : (
          <AppText style={styles.regulartext}>
            {listing.description.trim().replace("<p>", "").replace("</p>", "")}
          </AppText>
        )}
        <View style={styles.underlineTextbox}>
          <AppText style={styles.primaryTitle}>Additional Information</AppText>
        </View>
        <AppText style={styles.boldtext}>
          Option: {attributes.toString()}
        </AppText>
        <View style={styles.underlineTextbox}>
          <AppText style={styles.primaryTitle}>Reviews</AppText>
        </View>
        <Reviews productID={listing.id}></Reviews>
        <View style={styles.underlineTextbox}>
          <AppText style={styles.secondaryTitle}>Related Products</AppText>
        </View>
        <MenuWoo
          searchBarVisible={false}
          categoryVisible={false}
          category={listing.categories[listing.categories.length - 1].id}
          navigation={navigation}
        />
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
    width: "70%",
    alignItems: "center",
    height: 250,
  },
  scrollView: {
    alignItems: "center",
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
    alignItems: "flex-start",
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
    fontSize: 15,
    color: colors.black,
  },
  weightOption: {
    width: 165,
  },
  amountOption: {
    width: 165,
    marginBottom: 10,
  },
  primaryTitle: {
    marginTop: 20,
    fontSize: 20,
    textAlign: "left",
    color: colors.primary,
  },
  underlineTextbox: {
    width: "90%",
    borderColor: colors.lightGray,
    paddingBottom: 2,
    marginBottom: 8,
    borderBottomWidth: 1,
  },
  secondaryTitle: {
    marginTop: 10,
    textAlign: "left",
    fontSize: 20,
    color: colors.secondary,
  },
  regulartext: {
    textAlign: "auto",
    lineHeight: 20,
    fontSize: 15,
    width: "90%",
    fontFamily: "Roboto_400Regular",
    color: colors.black,
  },
});

export default ItemDetailsScreen;
