import { StyleSheet, View, Image, Text } from "react-native";
import logo from "@/assets/images/logo_aquacare.png";

export default function Logo() {
  return (
    <>
      <Image
        style={styles.logo}
        source={{ uri: "@/assets/images/logo_aquacare.png" }}
      />
      <View style={styles.containerLogo}>
        <Text style={styles.titulo1}>Aqua</Text>
        <Text style={styles.titulo2}>Care</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  logo: {
    position: "absolute",
    top: 20,
    width: 100,
  },
  containerLogo: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    left: 110,
    top: 15,
    backgroundColor: "transparent",
  },
  titulo1: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#7D7D7D",
  },
  titulo2: {
    fontSize: 35,
    marginBottom: 20,
    color: "#0A0B40",
  },
});
