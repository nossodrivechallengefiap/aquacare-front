// screens/HomeScreen.tsx
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Logo from "@/components/Logo2";
import { router } from "expo-router";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const HomeScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <Pressable
        style={styles.sing_out}
        onPress={() => router.replace("/screens/loginScreen")}
      >
        <FontAwesome size={30} name="sign-out" color="#DFA800" />
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => router.replace("/citiesTab")}
      >
        <FontAwesome name="map-marker" size={24} color="#fff" />
        <Text style={styles.buttonText}>Cidades</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => router.replace("/localsTab")}
      >
        <FontAwesome name="map" size={24} color="#fff" />
        <Text style={styles.buttonText}>Locais</Text>
      </Pressable>
      <Pressable
        style={styles.button}
        onPress={() => router.replace("/indicatorsTab")}
      >
        <FontAwesome name="info" size={24} color="#fff" />
        <Text style={styles.buttonText}>Indicadores</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E5F6FF",
  },
  button: {
    width: 100,
    height: 100,
    backgroundColor: "#007bff",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    marginTop: 5,
  },
  sing_out: {
    position: "absolute",
    top: 50,
    right: 40,
  },
});

export default HomeScreen;
