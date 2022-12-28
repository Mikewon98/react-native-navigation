import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreeen";
import UserScreen from "./UserScreen";
import ProductScreen from "./ProductScreen";
import Ionic from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size, colour }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home-outline" : "home-sharp";
          } else if (route.name === "User") {
            iconName = focused ? "person-outline" : "ios-person";
          } else if (route.name === "Product") {
            iconName = focused ? "md-folder-open-outline" : "folder-open";
          }
          return <Ionic name={iconName} size={size} colour={colour} />;
        },
      })}
    >
      <Tab.Screen name='Home' component={HomeScreen} />
      <Tab.Screen name='User' component={UserScreen} />
      <Tab.Screen name='Product' component={ProductScreen} />
    </Tab.Navigator>
  );
};

export default BottomTab;

const styles = StyleSheet.create({});
