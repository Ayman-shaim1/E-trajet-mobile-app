import { StyleSheet, Text, View } from "react-native";
import React from "react";
import colors from "../config/colors";

export default function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    width:'100%',
    paddingVertical: 15,
    paddingHorizontal: 8,
    marginVertical: 10,
    marginHorizontal: 10,
    backgroundColor: colors.white,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    borderRadius: 5,
  },
});
