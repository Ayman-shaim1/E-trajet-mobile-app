import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors";

export default function Divider() {
  return <View style={styles.divider} />;
}

const styles = StyleSheet.create({
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "lightgray",
    position: "relative",
    marginVertical: 7,
  },
});
