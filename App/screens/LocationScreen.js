import React from "react";
import { FlatList, ScrollView, View, StyleSheet } from "react-native";
import ListItemSeparator from "../components/ListItemSeparator";
import LocationItem from "../components/LocationItem";
import TopBar from "../components/TopBar";

const sweetLocation = [
  {
    id: 1,
    title: "Tarneit",
    address1: "22 Lavinia Dr",
    address2: "Tarneit VIC 3029",
    tel: "(03) 8742 4445",
    image: require("../assets/icon_with_background.png"),
  },
  {
    id: 2,
    title: "Factory Outlet",
    address1: "6/17 Brumby Street",
    address2: "Seven Hills, NSW, 2147",
    tel: "(02) 8608 7146 / 0450 740 277",
    image: require("../assets/icon_with_background.png"),
  },
  {
    id: 3,
    title: "Canberra",
    address1: "140/180 City Walk",
    address2: "Canberra ACT 2601",
    tel: "(02) 6119 8088",
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
