import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  FlatList,
  Dimensions,
} from "react-native";
import CityPicker from "../components/CityPicker";
import ListItemSeparator from "../components/ListItemSeparator";

const windowWidth = Dimensions.get("window").width;

const sweetCities = [
	{
		id: 1,
		title: 'Melbourne Corporate',
		acronym: 'COP',
		img: require('../assets/CityLogo/Melbourne.jpg'),
		url: 'https://melbourne.sweetutsav.com.au/',
	},
	{
		id: 2,
		title: 'Tarneit',
		acronym: 'TAR',
		img: require('../assets/CityLogo/Melbourne.jpg'),
		url: 'https://tarneit.sweetutsav.com.au/',
	},
	{
		id: 3,
		title: 'Caroline Springs',
		acronym: 'CP',
		img: require('../assets/CityLogo/Melbourne.jpg'),
		url: 'https://carolinesprings.sweetutsav.com.au/',
	},
	{
		id: 4,
		title: 'Lyndhurst',
		acronym: 'LYN',
		img: require('../assets/CityLogo/Melbourne.jpg'),
		url: 'https://lyndhurst.sweetutsav.com.au/',
	},
	// {
	// 	id: 5,
	// 	title: 'Hoppers Crossing',
	// 	acronym: 'HOP',
	// 	img: require('../assets/CityLogo/Melbourne.jpg'),
	// 	url: 
	// },
	{
		id: 5,
		title: 'Seven Hills',
		acronym: 'SYD',
		img: require('../assets/CityLogo/Sydney.jpg'),
		url: 'https://sydney.sweetutsav.com.au/',
	},
	{
		id: 6,
		title: 'Grand Plaza',
		acronym: 'BRI',
		img: require('../assets/CityLogo/Brisbane.jpg'),
		url: 'https://brownsplains.sweetutsav.com.au/',
	},
];

// global.storeUrl = 'https://melbourne.sweetutsav.com.au/';
// global.userCity = 'COP';

function CityScreen({ route, navigation }) {
	return (
		<ImageBackground style={styles.backGround} source={require('../assets/white_green_background.jpg')}>
			<FlatList
				data={sweetCities}
				contentContainerStyle={styles.flatList}
				keyExtractor={(item) => item.id}
				ItemSeparatorComponent={() => <ListItemSeparator />}
				renderItem={({ item }) => (
					<CityPicker
						img={item.img}
						title={item.title}
						onPress={() => {
							global.userCity = item.acronym;
							global.storeUrl = item.url;
							navigation.navigate('Home');
						}}
					></CityPicker>
				)}
			></FlatList>
		</ImageBackground>
	);
};
const styles = StyleSheet.create({
  backGround: {
    flex: 1,
  },
  flatList: {
    alignItems: "center",
  },
});

export default CityScreen;
