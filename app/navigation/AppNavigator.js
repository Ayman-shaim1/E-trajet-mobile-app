import * as React from "react";
import { Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabButton } from "../components";
import { HomeScreen } from "../screens";

import colors from "../config/colors";

const Tab = createBottomTabNavigator();

const ProfileScreen = () => <Text>Profile</Text>;

const MapScreen = () => <Text>Cart</Text>;

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          left: 0,
          bottom: 0,
          right: 0,
          // position: "absolute",
          // backgroundColor: "transparent",
          backgroundColor: colors.secondary,
          borderTopWidth: 0,
          elevation: 0,
          alignItems: "center",
          height: 80,
          paddingVertical: 10,
        },
      }}>
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={({ navigation }) => ({
          tabBarButton: () => (
            <TabButton
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
