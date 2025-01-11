import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
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
            <FontAwesome
              name="home"
              size={focused ? 28 : 24}
              color={focused ? "black" : color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: "Tab Two",
          tabBarIcon: ({ focused, color }) => (
            <FontAwesome
              name="address-card-o"
              size={focused ? 28 : 24}
              color={focused ? "black" : color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
