import React from "react";
import { FlatList, ScrollView, View, StyleSheet } from "react-native";
import ListItemSeparator from "../components/ListItemSeparator";
import LocationItem from "../components/LocationItem";
import TopBar from "../components/TopBar";

const sweetLocation = [
  {
    id: 1,
    title: "Sydney",
    address1: "6/17 Brumby Street",
    address2: "Seven Hills, NSW, 2147",
    tel: "02-8608 7146, 0450 740 277",
    image: require("../assets/icon_with_background.png"),
  },
  {
    id: 2,
    title: "Tarneit",
    address1: "22 Lavinia Dr",
    address2: "Tarneit VIC 3029",
    tel: "(03) 8742 4445",
    image: require("../assets/icon_with_background.png"),
  },
  {
    id: 3,
    title: "Caronline Springs",
    address1: "Shop 20, 13-15 Lake St",
    address2: "Caroline Springs, VIC, 3023",
    tel: "(03) 8315 7716",
    image: require("../assets/icon_with_background.png"),
  },
  {
    id: 4,
    title: "Lyndhurst",
    address1: "A17/945 Thompsons Road",
    address2: "Lyndhurst, VIC, 3975",
    tel: "8738 9170, 8738 9168",
    image: require("../assets/icon_with_background.png"),
  },
  {
    id: 5,
    title: "Brisbane",
    address1: "Shop 4, 111-121 Grand Plaza Drive",
    address2: "Browns Plains, QLD, 4118",
    tel: "(07)-3416 2879, 0405 287 287",
    image: require("../assets/icon_with_background.png"),
  },
];

function LocationScreen(props) {
  return (
    <View>
      <TopBar
        title="Locations"
        leftIcon={require("../assets/arrow-round-back.png")} 
        cartVisiable = {false}
      ></TopBar>
      <View style={styles.container}>
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
              image={item.image}
            />
          )}
          ItemSeparatorComponent={ListItemSeparator}
        ></FlatList>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    height:"100%",
  },
});

export default LocationScreen;
