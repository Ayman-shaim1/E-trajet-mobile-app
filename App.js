import * as React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import {
  HomeScreen,
  LoginScreen,
  MapScreen,
  RegisterScreen,
  ValidationCodeScreen,
  WelcomeScreen,
} from "./app/screens";
import { Button } from "./app/components";
import colors from "./app/config/colors";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ProfileScreen = () => <Text>Profile</Text>;

const TabButton = ({ navigation, icon, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        styles.tabButton,
        {
          backgroundColor: navigation.isFocused()
            ? colors.darkGray
            : "transparent",
        },
      ]}
      onPress={onPress}>
      <MaterialCommunityIcons
        name={icon}
        size={18}
        color={navigation.isFocused() ? colors.white : colors.gray}
      />
    </TouchableOpacity>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
};

const WelcomeNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name='Welcome' component={WelcomeScreen} />
        <Stack.Screen name='Login' component={LoginScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
        <Stack.Screen name='Validation' component={ValidationCodeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default function App() {
  return <WelcomeNavigator />;
}

const styles = StyleSheet.create({
  tabButton: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 30,
  },
});
