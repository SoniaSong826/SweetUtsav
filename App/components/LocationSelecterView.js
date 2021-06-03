import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import colors from "../config/colors";

import LocationSelecter from "./LocationSelecter";

const sweetCities = [
  {
    id: 1,
    title: "Coperator",
    acronym: "COP",
    img: require("../assets/CityLogo/Melbourne.jpg"),
  },
  {
    id: 2,
    title: "Tarneit",
    acronym: "TAR",
    img: require("../assets/CityLogo/Melbourne.jpg"),
  },
  {
    id: 3,
    title: "Caroline Springs",
    acronym: "CP",
    img: require("../assets/CityLogo/Melbourne.jpg"),
  },
  {
    id: 4,
    title: "Lyndhurst",
    acronym: "LYN",
    img: require("../assets/CityLogo/Melbourne.jpg"),
  },
  {
    id: 5,
    title: "Seven Hills",
    acronym: "SYD",
    img: require("../assets/CityLogo/Sydney.jpg"),
  },
  {
    id: 6,
    title: "Grand Plaza",
    acronym: "BRI",
    img: require("../assets/CityLogo/Brisbane.jpg"),
  },
];

function CityScreen() {
  const [city, setCity] = useState(sweetCities[0]);
  return (
    <LocationSelecter
      items={sweetCities}
      selectedItem={city}
      onSelectItem={(city) => setCity(city)}
    ></LocationSelecter>
  );
}
const styles = StyleSheet.create({});

export default CityScreen;
