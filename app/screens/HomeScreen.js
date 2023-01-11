import { Image, ScrollView, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { Screen, Header, Card, Text, Button } from "../components";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const HomeScreen = () => {
  return (
    <Screen style={styles.container}>
      <Header />

      <View style={{ height: "82%" }}>
        <ScrollView>
          <Card style={{ flexDirection: "row" }}>
            <View style={{ padding: 10 }}>
              <Text as='header6'>
                Lorem, ipsum.{" "}
                <MaterialCommunityIcons
                  size={17}
                  name='map-marker'
                  color={colors.primary}
                />
              </Text>

              <Text as='header6'>
                {" "}
                <MaterialCommunityIcons
                  size={20}
                  name='arrow-bottom-right-thick'
                  color={colors.primary}
                />{" "}
                Lorem, ipsum.
              </Text>
              <View style={{ flexDirection: "row", marginTop: 30 }}>
                <Button text='lorem' variant='primary' />
                <Button text='lorem' variant='secondary' />
              </View>
            </View>
            <View style={styles.roadMapContainer}>
              <Image
                source={require("../assets/images/road-map.png")}
                style={styles.roadMap}
              />
            </View>
          </Card>

          <View style={{ flexDirection: "row" }}>
            <Card variant='primary' style={styles.blackCardContainer}>
              <Image
                source={require("../assets/images/black-car.png")}
                style={styles.blackCardImage}
              />
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Text as='header5' style={{ margin: 1 }}>
                  Lorem
                </Text>
                <Text as='header5' style={{ margin: 1 }} color='white'>
                  Ipsum
                </Text>
              </View>
              <View style={{ flexDirection: "row", justifyContent: "center" }}>
                <Text as='header5' style={{ margin: 1 }} color='white'>
                  dolor
                </Text>
                <Text as='header5' style={{ margin: 1 }}>
                  sit amet.
                </Text>
              </View>
            </Card>
            <View>
              <Card style={{ flexDirection: "row" }} customColor='#4C4E52'>
                <View
                  style={{
                    backgroundColor: "white",
                    borderRadius: 20,
                    width: 50,
                    height: 100,
                    marginRight: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <MaterialCommunityIcons name='car-sports' size={40} />
                </View>
                <View>
                  <Text
                    as='header6'
                    color='gray'
                    style={{ marginVertical: 10 }}>
                    Kilometer
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text as='header5' color='white'>
                      923
                    </Text>
                    <View>
                      <MaterialCommunityIcons
                        name='arrow-top-right'
                        color={colors.primary}
                      />
                      <Text
                        color='white'
                        style={{ fontSize: 11, fontWeight: "bold" }}>
                        Km
                      </Text>
                    </View>
                  </View>
                </View>
              </Card>
              <Card style={{ flexDirection: "row" }} variant='white'>
                <View style={{ paddingLeft: 9 }}>
                  <Text
                    as='header6'
                    color='gray'
                    style={{ marginVertical: 10 }}>
                    Target
                  </Text>
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text as='header3'>20</Text>
                    <View>
                      <Text>Travel in</Text>
                      <Text>Week</Text>
                    </View>
                  </View>
                </View>

                <View
                  style={{
                    backgroundColor: colors.primary,
                    borderRadius: 20,
                    width: 50,
                    height: 100,
                    marginLeft: 10,
                    justifyContent: "center",
                    alignItems: "center",
                  }}>
                  <MaterialCommunityIcons name='map-legend' size={40} />
                </View>
              </Card>
            </View>
          </View>
          <Card customColor='#4C4E52'>
            <ScrollView>
              <View
                style={{
                  paddingHorizontal: 15,

                  flexDirection: "row",
                  justifyContent: "space-between",
                }}>
                <View style={{ marginRight: 20, paddingTop: 20 }}>
                  <Text as='header6' color='white'>
                    Monthly
                  </Text>
                  <Text as='header6' color='white'>
                    Chart
                  </Text>
                  <Text color='gray' style={{ marginTop: 10 }}>
                    By kilometre
                  </Text>
                </View>
                <View style={styles.chart}>
                  <View style={[styles.chartBar, { height: 90 }]}>
                    <Text as='header6' color='white'>
                      15
                    </Text>
                  </View>
                  <View style={[styles.chartBar]}>
                    <Text as='header6' color='white'>
                      8
                    </Text>
                  </View>
                  <View
                    style={[
                      styles.chartBar,
                      { backgroundColor: colors.primary, height: 120 },
                    ]}>
                    <Text as='header6' color='white'>
                      20
                    </Text>
                  </View>
                  <View style={[styles.chartBar, { height: 80 }]}>
                    <Text as='header6' color='white'>
                      11
                    </Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </Card>
        </ScrollView>
      </View>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    padding: 3,
    backgroundColor: colors.secondary,
  },
  roadMapContainer: {
    width: "50%",
  },
  roadMap: {
    width: 140,
    height: 150,
  },
  blackCardContainer: {
    overflow: "hidden",
    width: "50%",
  },
  blackCardImage: {
    left: -100,
  },
  chart: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  chartBar: {
    width: 50,
    minHeight: 60,
    backgroundColor: colors.gray,
    margin: 2,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
