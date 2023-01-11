import { StyleSheet, View } from "react-native";
import React from "react";
import { Text, Avatar } from "../components";
const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.textContainer}>
        <View style={styles.text}>
          <Text as='header4' color='primary'>
            Hi,
          </Text>
          <Text as='header4' color='white'>
            {" "}
            Ayman
          </Text>
        </View>
        <View style={styles.text}>
          <Text color='white'>Lorem ipsum dolor sit amet.</Text>
        </View>
      </View>
      <Avatar image={require("../assets/images/ayman.jpg")} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 7,
    backgroundColor: "trasnparent",
  },
  textContainer: {},
  text: {
    flexDirection: "row",
  },
});
