import React, { Component } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import colors from "../config/colors";
import { SliderBox } from "react-native-image-slider-box";

const postFolder = "../assets/Posts/";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default class PostSlides extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require(postFolder + "collageslide1.jpg"),
        require(postFolder + "collageslide2.jpg"),
        require(postFolder + "collageslide3.jpg"),
        require(postFolder + "collageslide4.jpg"),
      ],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <SliderBox
          sliderBoxHeight={130}
          images={this.state.images}
          ImageComponentStyle={{ borderRadius: 10, width: windowWidth - 20 }}
          resizeMethod={"scale"} //"auto","resize","scale"
          resizeMode={"stretch"} //"cover","contain","stretch","repeat","center"
          imageLoadingColor={colors.primary}
          dotColor={colors.primary}
          inactiveDotColor={colors.lightGray}
          autoplay
          circleLoop
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:130,
    marginBottom:10,
  },
});
