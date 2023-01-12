import * as React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { HomeScreen, MapScreen } from "./app/screens";
import { Button } from "./app/components";
import colors from "./app/config/colors";

const Tab = createBottomTabNavigator();

const ProfileScreen = () => <Text>Profile</Text>;

const activeStyle = {
  backgroundColor: colors.darkGray,
  width: 50,
  height: 50,
  borderRadius: 25,
  justifyContent: "center",
  alignItems: "center",
  marginHorizontal: 30,
};
const style = {
  width: 50,
  height: 50,
  borderRadius: 25,
  justifyContent: "center",
  alignItems: "center",
  marginHorizontal: 30,
};
const TabButton = ({ navigation, icon, onPress }) => {
  return (
    <TouchableOpacity
      style={navigation.isFocused() ? activeStyle : style}
      onPress={onPress}>
      <MaterialCommunityIcons
        name={icon}
        size={20}
        color={navigation.isFocused() ? colors.white : colors.gray}
      />
    </TouchableOpacity>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "transparent",
            position: "absolute",
            borderTopWidth: 0,
            height: 60,
            alignItems: "center",
            justifyContent: "center",

            elevation: 0,
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
    </NavigationContainer>
  );
}
