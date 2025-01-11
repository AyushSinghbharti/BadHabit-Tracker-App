import React from "react";
import Octicons from "@expo/vector-icons/Octicons";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { View, Text } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "black",
        tabBarInactiveTintColor: "gray",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Tab One",
          tabBarIcon: ({ focused, color }) => (
            <Octicons
              name="home"
              size={focused ? 28 : 24}
              color={focused ? "black" : color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="myHabits"
        options={{
          title: "My habits",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name="menu-outline"
              size={focused ? 28 : 24}
              color={focused ? "black" : color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
