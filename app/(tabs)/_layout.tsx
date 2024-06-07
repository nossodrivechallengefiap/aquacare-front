import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "dark"].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      <Tabs.Screen
        name="homeScreen"
        options={{
          title: "Início",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={30} name="home" color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="indicatorsTab"
        options={{
          title: "Indicadores",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={30} name="info" color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="localsTab"
        options={{
          title: "Locais",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={30} name="map" color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="citiesTab"
        options={{
          title: "Cidades",
          tabBarIcon: ({ color }) => (
            <FontAwesome size={30} name="map-marker" color={color} />
          ),
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
