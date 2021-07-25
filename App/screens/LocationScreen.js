import React from "react";
import { FlatList, StyleSheet, ImageBackground } from "react-native";
import ListItemSeparator from "../components/ListItemSeparator";
import LocationItem from "../components/LocationItem";


const sweetLocation = [
  {
    id: 1,
    title: "Melbourne Corporate",
    address1: "Suite1301/227, Collins Street",
    address2: "Melbourne, VIC, 3000",
    tel: "0396635477",
    showTel: "(03) 9663 5477",
    mobile: "0414907705",
    showMobile: "0414 907 705",
    image: require("../assets/icon.png"),
    facebook: "https://www.facebook.com/Sweetutsav.melbourne/",
    email: "nikee@nikeeworld.com",
  },
  {
    id: 2,
    title: "Seven Hills",
    address1: "6/17 Brumby Street",
    address2: "Seven Hills, NSW, 2147",
    showTel: "(02) 8608 7146",
    tel: "0286087146",
    mobile: "0450740277",
    showMobile: "0450 740 277",
    image: require("../assets/icon.png"),
    facebook: "https://www.facebook.com/SweetUtsav/",
    email: "revusurya@gmail.com",
  },
  {
    id: 3,
    title: "Tarneit",
    address1: "22 Lavinia Dr",
    address2: "Tarneit, VIC, 3029",
    tel: "0387424445",
    showTel: "(03) 8742 4445",
    mobile: "0482400001",
    showMobile: "0482 400 001",
    image: require("../assets/icon.png"),
    facebook: "https://www.facebook.com/SweetUtsavTarneit/",
    email: "info@sweetutsav.com",
  },
  {
    id: 4,
    title: "Caroline Springs",
    address1: "Shop 20, 13-15 Lake St",
    address2: "Caroline Springs, VIC, 3023",
    showTel: "(03) 8315 7716",
    tel: "0383157716",
    mobile: "0410855028",
    showMobile: "0410 855 028",
    image: require("../assets/icon.png"),
    facebook: "https://www.facebook.com/SweetUtsavCarolineSprings",
    email: "CSsweetutsav@gmail.com",
  },
  {
    id: 5,
    title: "Lyndhurst",
    address1: "A17 Marriot Waters Shopping Centre",
    address2: "Lyndhurst, VIC, 3975",
    tel: "0387389170",
    showTel: "(03) 8738 9170",
    mobile: "0400885780",
    showMobile: "0400 885 780",
    image: require("../assets/icon.png"),
    facebook: "https://www.facebook.com/sweetutsavlyndhurst/",
    email: "sulyndhurst@gmail.com",
  },
  {
    id: 6,
    title: "Brisbane",
    address1: "Shop 4, 111-121 Grand Plaza Drive",
    address2: "Browns Plains, QLD, 4118",
    tel: "0734162879",
    showTel: "(07) 3416 2879",
    mobile: "0405287287",
    showMobile: "0405 287 287",
    image: require("../assets/icon.png"),
    facebook: "https://www.facebook.com/sweetutsavbrisbane",
    email: "rajagsp@hotmail.com",
  },
  {
    id: 7,
    title: "Hoppers Crossing",
    address1: "22/13-B Elm Park Dr",
    address2: "Hoppers Crossing, VIC, 3029",
    tel: "(03) 8742 4445",
    showTel: "(03) 8742 4445",
    mobile: "0482400001",
    showMobile: "0482 400 001",
    image: require("../assets/icon.png"),
    facebook: "https://www.facebook.com/sweetutsavbrisbane",
    email: "hoppers@sweetutsav.com",
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
              showTel={item.showTel}
              mobile={item.mobile}
              showMobile={item.showMobile}
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
