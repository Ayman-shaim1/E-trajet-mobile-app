import { Image, ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import { Screen, Text, Card } from "../components";
import colors from "../config/colors";

export default function AboutScreen() {
  return (
    <Screen>
      <ScrollView style={styles.container}>
        <View style={[styles.sectionBgBrown, { height: 260 }]}>
          <Text as='header3' style={styles.title}>
            À propos de nous
          </Text>
          <View style={styles.iconContainer}>
            <Image source={require("../assets/images/info.png")} style={styles.icon} />
          </View>
        </View>
        <View style={styles.sectionBgPrimary}>
          <Text as='header3' style={styles.title}>
            Notre histoire
          </Text>
          <Text style={styles.text} as='paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, adipisci impedit voluptatum asperiores, natus mollitia
            sint tempora excepturi autem in molestias repudiandae doloribus
            cumque eaque libero quod unde eum. Dicta suscipit hic vitae
            repudiandae recusandae, obcaecati illo, nobis odit deserunt earum ab
            atque tempora placeat eos laudantium aspernatur quod quo. Harum
            minima error eaque eius?
          </Text>
        </View>
        <View style={styles.sectionBgBrown}>
          <Text as='header3' style={styles.title}>
            Notre but
          </Text>
          <Text style={styles.text} as='paragraph'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis, adipisci impedit voluptatum asperiores, natus mollitia
            sint tempora excepturi autem in molestias repudiandae doloribus
            cumque eaque libero quod unde eum. Dicta suscipit hic vitae
            repudiandae recusandae, obcaecati illo, nobis odit deserunt earum ab
            atque tempora placeat eos laudantium aspernatur quod quo. Harum
            minima error eaque eius?
          </Text>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  title: {
    marginVertical: 20,
    textAlign: "center",
    color: colors.white,
  },
  sectionBgPrimary: {
    color: colors.white,
    padding: 10,
    height: 400,
    backgroundColor: colors.primary,
  },
  sectionBgBrown: {
    color: colors.white,
    padding: 10,
    height: 400,
    backgroundColor: colors.brown,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: 140,
    height: 140,
  },
  text: {
    textAlign: "justify",
  },
});
