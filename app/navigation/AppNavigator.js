import * as React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabButton } from "../components";
import { HomeScreen, MapScreen } from "../screens";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { Button } from "../components";
const Tab = createBottomTabNavigator();

const ProfileScreen = () => <Text>Profile</Text>;

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "transparent",
          position: "absolute",
          borderTopWidth: 0,
          alignItems: "center",
          justifyContent: "center",
          elevation: 0,
          paddingBottom: 50,
        },
      }}>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <TabButton
              navigation={navigation}
              onPress={() => navigation.navigate("Home")}
              icon='home'
            />
          ),
        })}
      />
      <Tab.Screen
        name='Map'
        component={MapScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <TabButton
              navigation={navigation}
              onPress={() => navigation.navigate("Map")}
              icon='map-outline'
            />
          ),
        })}
      />
      <Tab.Screen
        name='Profile'
        component={ProfileScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <TabButton
              navigation={navigation}
              onPress={() => navigation.navigate("Profile")}
              icon='account-outline'
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

export default AppNavigator;
