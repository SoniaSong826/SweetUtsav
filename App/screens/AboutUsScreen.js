import React from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Image,
  Dimensions,
  Linking,
} from "react-native";
import colors from "../config/colors";
import AppText from "../components/AppText";

const windowWidth = Dimensions.get("window").width;

function AboutUsScreen() {
  return (
    <ImageBackground
      style={styles.backGround}
      source={require("../assets/white_green_background.jpg")}
    >
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.bannerContainer}>
            <Image
              style={styles.banner}
              source={{
                uri: "http://carolinesprings.sweetutsav.com.au/wp-content/uploads/2020/09/sweetsBANNER1110X179.jpg",
              }}
            ></Image>
          </View>
          <AppText style={styles.textTitle}>Mission</AppText>
          <AppText style={styles.text}>
            Sweet Utsav’s goal is to provide the Sydney community with authentic
            Indian savories and sweets and hence the motto “When only the best
            will do” Sweet Utsav does not compromise on ingredients and
            procedure and uses only the finest of ingredients and time-tested
            procedures that deliver a quality product.
          </AppText>
          <AppText style={styles.textTitle}>History</AppText>
          <AppText style={styles.text}>
            Surya Prakash Revu is the founder of Melbourne’s largest Premium
            Sweets and snacks manufacturers “Sweet India”. He commenced
            operations in 2009 opening the factory in Hoppers Crossing in 2009.
            From its manufacturing base initially in Hoppers Crossing it has now
            grown into Melbourne’s largest Premium Sweets and Snacks
            Manufacturer with 6 outlets all over Australia. Sweet Utsav was born
            from the same person who pursued his dream of setting up Australia’s
            largest sweet and snacks manufacturing factory at Seven Hills,
            Sydney. It will cater to distribute sweets to selected outlets in
            Sydney and Canberra.
          </AppText>
          <AppText style={styles.textTitle}>Management</AppText>
          <AppText style={styles.text}>
            Surya Prakash Revu — Founder and CEO Prakash has devoted his life in
            getting the best premium sweets to Australia and with a decade of
            experience, having successfully set up Melbourne largest Sweet and
            Snack Manufacturers has created “Sweet Utsav” as his largest sweets
            venture in Australia.
          </AppText>
          <AppText style={styles.text}>
            Brian Pereira — Brian has more than 22 years of business expertise
            and has been successfully involved with setting up large corporate
            and hospitality businesses over more than two decades in Melbourne
          </AppText>
          <AppText style={styles.text}>
            Chefs — The chefs at Sweet Utsav have decades of experience in the
            Sweet and Snack industry in India. It is with this rich experience
            that we at Sweet Utsav offer the best quality sweets and snacks. Our
            expert sweet makers have experience in making sweets and snacks from
            all regions of the sub-continent. Our team is passionate about
            providing excellent customer service and will assist consumers in
            making choices. Our chefs have also conducted extensive research in
            the art of creating various innovative sweets with improved
            processes and quality. We continue to keep pace with modern trends
            and analyse the needs, demands and desire of our customers
          </AppText>
          <View style={styles.socialIconContainer}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "https://www.facebook.com/Sweetutsav.melbourne/"
                )
              }
            >
              <Image
                style={styles.icon}
                source={require("../assets/SocialMediaIcon/Facebook.png")}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Linking.openURL("https://twitter.com/UtsavSweet/")}
            >
              <Image
                style={styles.icon}
                source={require("../assets/SocialMediaIcon/Twitter.png")}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("https://www.instagram.com/sweetutsav1/?hl=en")
              }
            >
              <Image
                style={styles.icon}
                source={require("../assets/SocialMediaIcon/Instagram.png")}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "https://www.linkedin.com/company/sweet-utsav-melbourne/"
                )
              }
            >
              <Image
                source={require("../assets/SocialMediaIcon/LinkedIn.png")}
              ></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("Youtube clicked")}>
              <Image
                style={styles.icon}
                source={require("../assets/SocialMediaIcon/Youtube.png")}
              ></Image>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  backGround: {
    flex: 1,
  },
  textTitle: {
    fontSize: 25,
    width: "90%",
    color: colors.secondary,
  },
  text: {
    width: "90%",
    fontSize: 15,
    lineHeight: 20,
    marginBottom:10,
    color: colors.black,
    fontFamily: "Roboto_400Regular",
    textAlign: "justify",
    flexWrap: "wrap",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  banner: {
    width: windowWidth * 0.9,
    height: 60,
    borderRadius: 5,
    marginVertical: 25,
  },
  socialIconContainer: {
    paddingTop: 25,
    paddingBottom: 80,
    flexDirection: "row",
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default AboutUsScreen;
