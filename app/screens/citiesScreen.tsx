// screens/CitiesScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Modal,
  TextInput,
  StyleSheet,
  Pressable,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Logo from "@/components/Logo3";

const CitiesScreen: React.FC = () => {
  const [cities, setCities] = useState<{ name: string; state: string }[]>([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [cityName, setCityName] = useState("");
  const [stateName, setStateName] = useState("");

  const addCity = () => {
    if (cityName && stateName) {
      setCities([...cities, { name: cityName, state: stateName }]);
      setCityName("");
      setStateName("");
      setModalVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.containerTituloPagina}>
        <FontAwesome size={30} name="map-marker" color={"black"} />
        <Text style={styles.titulo}>Cidades</Text>
      </View>
      <FlatList
        style={styles.list}
        data={cities}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.cityItem}>
            <Text style={styles.cityText}>
              {item.name}, {item.state}
            </Text>
          </View>
        )}
      />
      <Pressable style={styles.addButton} onPress={() => setModalVisible(true)}>
        <FontAwesome name="plus" size={24} color="#fff" />
      </Pressable>
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.label}>Nome da Cidade</Text>
            <TextInput
              placeholder="Nome da cidade"
              value={cityName}
              onChangeText={setCityName}
              style={styles.input}
            />
            <Text style={styles.label}>Estado</Text>
            <TextInput
              placeholder="Estado"
              value={stateName}
              onChangeText={setStateName}
              style={styles.input}
            />
            <Pressable style={styles.modalButton} onPress={addCity}>
              <Text style={styles.buttonText}>Adicionar</Text>
            </Pressable>
            <Pressable
              style={styles.modalButtonCancel}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.buttonText}>Cancelar</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#E5F6FF",
  },
  containerTituloPagina: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    left: 30,
    top: 80,
    backgroundColor: "transparent",
  },
  titulo: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 15,
    color: "#000",
  },
  list: {
    top: 80,
  },
  cityItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  cityText: {
    fontSize: 18,
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "#007bff",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: 300,
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  label: {
    fontWeight: "bold",
  },
  modalButton: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  modalButtonCancel: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default CitiesScreen;
