import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Avatar({ image }) {
  return <Image source={image} style={styles.avatar} />;
}

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
