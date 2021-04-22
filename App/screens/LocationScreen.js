import React from "react";
import { FlatList, ScrollView, View, StyleSheet, Dimensions, ImageBackground } from "react-native";
import ListItemSeparator from "../components/ListItemSeparator";
import LocationItem from "../components/LocationItem";
import TopBar from "../components/TopBar";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const telIcon = "phone";
const mobileIcon ="cellphone";

const sweetLocation = [
  {
    id: 1,
    title: "Melbourne",
    address1: "Suite1301/227, Collins Street",
    address2: "Melbourne, VIC, 3000",
    tel: "(03) 8080 9933",
    mobile: "0458 254 017",
    image: require("../assets/icon_with_background.png"),
    iconFirst: telIcon,
    iconSecond: mobileIcon,
  },
  {
    id: 2,
    title: "Seven Hills",
    address1: "6/17 Brumby Street",
    address2: "Seven Hills, NSW, 2147",
    tel: "(02) 8608 7146",
    mobile: "0450 740 277",
    image: require("../assets/icon_with_background.png"),
    iconFirst: telIcon,
    iconSecond: mobileIcon,
  },
  {
    id: 3,
    title: "Tarneit",
    address1: "22 Lavinia Dr",
    address2: "Tarneit VIC 3029",
    tel: "(03) 8742 4445",
    mobile: "0482 400 001",
    image: require("../assets/icon_with_background.png"),
    iconFirst: telIcon,
    iconSecond: mobileIcon,
  },
  {
    id: 4,
    title: "Caroline Springs",
    address1: "Shop 20, 13-15 Lake St",
    address2: "Caroline Springs, VIC, 3023",
    tel: "(03) 8315 7716",
    mobile: "0410 855 028",
    image: require("../assets/icon_with_background.png"),
    iconFirst: telIcon,
    iconSecond: mobileIcon,
  },
  {
    id: 5,
    title: "Lyndhurst",
    address1: "A17/945 Thompsons Road",
    address2: "Lyndhurst, VIC, 3975",
    tel: "(03) 8738 9170",
    mobile: "(03) 8738 9168",
    image: require("../assets/icon_with_background.png"),
    iconFirst: telIcon,
    iconSecond: telIcon,
  },
  {
    id: 6,
    title: "Brisbane",
    address1: "Shop 4, 111-121 Grand Plaza Drive",
    address2: "Browns Plains, QLD, 4118",
    tel: "(07) 3416 2879",
    mobile: "0405 287 287",
    image: require("../assets/icon_with_background.png"),
    iconFirst: telIcon,
    iconSecond: mobileIcon,
  },
];

function LocationScreen(props) {
  return (
    <ImageBackground style={styles.backGround}
    source={require("../assets/lightGreen_background.jpg")}>
      <TopBar
        title="Locations"
        cartVisiable = {false}
      ></TopBar>
        <FlatList
          data={sweetLocation}
          keyExtractor={(sweetLocation) => sweetLocation.id.toString()}
          renderItem={({ item }) => (
            <LocationItem
              style={styles.itemContainer}
              title={item.title}
              address1={item.address1}
              address2={item.address2}
              tel={item.tel}
              mobile={item.mobile}
              iconFirst={item.iconFirst}
              iconSecond={item.iconSecond}
              image={item.image}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        ></FlatList>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backGround: {
    flex: 1,
  },

});

export default LocationScreen;
