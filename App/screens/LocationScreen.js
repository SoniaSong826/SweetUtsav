import React from "react";
import { FlatList, StyleSheet, ImageBackground } from "react-native";
import ListItemSeparator from "../components/ListItemSeparator";
import LocationItem from "../components/LocationItem";


const sweetLocation = [
  {
    id: 1,
    title: "Melbourne Coperator",
    address1: "Suite1301/227, Collins Street",
    address2: "Melbourne, VIC, 3000",
    tel: "0380809933",
    mobile: "0458254017",
    image: require("../assets/icon.png"),
    facebook: "https://www.facebook.com/Sweetutsav.melbourne/",
    email: "sales@sweetutsav.com.au",
  },
  {
    id: 2,
    title: "Seven Hills",
    address1: "6/17 Brumby Street",
    address2: "Seven Hills, NSW, 2147",
    tel: "0286087146",
    mobile: "0450740277",
    image: require("../assets/icon.png"),
    facebook: "https://www.facebook.com/SweetUtsav/",
    email: "sales@sweetutsav.com.au",
  },
  {
    id: 3,
    title: "Tarneit",
    address1: "22 Lavinia Dr",
    address2: "Tarneit, VIC, 3029",
    tel: "0387424445",
    mobile: "0482400001",
    image: require("../assets/icon.png"),
    facebook: "https://www.facebook.com/SweetUtsavTarneit/",
    email: "sales@sweetutsav.com.au",
  },
  {
    id: 4,
    title: "Caroline Springs",
    address1: "Shop 20, 13-15 Lake St",
    address2: "Caroline Springs, VIC, 3023",
    tel: "0383157716",
    mobile: "0410855028",
    image: require("../assets/icon.png"),
    facebook: "https://www.facebook.com/SweetUtsavCarolineSprings",
    email: "sales@sweetutsav.com.au",
  },
  {
    id: 5,
    title: "Lyndhurst",
    address1: "A17/945 Thompsons Road",
    address2: "Lyndhurst, VIC, 3975",
    tel: "0387389170",
    mobile: "0387389168",
    image: require("../assets/icon.png"),
    facebook: "https://www.facebook.com/sweetutsavlyndhurst/",
    email: "sales@sweetutsav.com.au",
  },
  {
    id: 6,
    title: "Brisbane",
    address1: "Shop 4, 111-121 Grand Plaza Drive",
    address2: "Browns Plains, QLD, 4118",
    tel: "0734162879",
    mobile: "0405287287",
    image: require("../assets/icon.png"),
    facebook: "https://www.facebook.com/sweetutsavbrisbane",
    email: "sales@sweetutsav.com.au",
  },
];

function LocationScreen(props) {
  return (
    <ImageBackground style={styles.backGround}
    source={require("../assets/white_green_background.jpg")}>
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
              emailLink={item.email}
              facebookLink={item.facebook}
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
