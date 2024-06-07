import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Modal,
  TextInput,
  StyleSheet,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Button,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import Logo from "@/components/Logo3";
import DateTimePicker from "@react-native-community/datetimepicker";

const IndicatorsScreen: React.FC = () => {
  const [indicators, setIndicators] = useState<
    { name: string; local: string }[]
  >([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [indicator, setIndicator] = useState("");
  const [localName, setLocalName] = useState("");
  const [coliformesLevel, setColiformesLevel] = useState("");
  const [phLevel, setPhLevel] = useState("");
  const [oxigenLevel, setOxigenLevel] = useState("");
  const [burbidezLevel, setBurbidezLevel] = useState("");
  const [tempLevel, setTempLevel] = useState("");
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  const onDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const onTimeChange = (event: any, selectedTime?: Date) => {
    const currentTime = selectedTime || time;
    setTime(currentTime);
  };

  const addLocal = () => {
    if (indicator && localName) {
      setIndicators([...indicators, { name: indicator, local: localName }]);
      setIndicator("");
      setLocalName("");
      setDate(new Date());
      setDate(new Date());
      setColiformesLevel("");
      setPhLevel("");
      setOxigenLevel("");
      setBurbidezLevel("");
      setTempLevel("");
      setModalVisible(false);
    }
  };

  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.containerTituloPagina}>
        <FontAwesome size={30} name="info" color={"black"} />
        <Text style={styles.titulo}>Indicadores</Text>
      </View>
      <FlatList
        style={styles.list}
        data={indicators}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.cityItem}>
            <Text style={styles.cityText}>
              {item.name}, {item.local}
            </Text>
          </View>
        )}
      />
      <Pressable style={styles.addButton} onPress={() => setModalVisible(true)}>
        <FontAwesome name="plus" size={24} color="#fff" />
      </Pressable>
      <Modal visible={modalVisible} transparent={true} animationType="slide">
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.label}>Indicador</Text>
                <TextInput
                  placeholder="Indicador"
                  value={indicator}
                  onChangeText={setIndicator}
                  style={styles.input}
                />
                <Text style={styles.label}>Local</Text>
                <TextInput
                  placeholder="Local"
                  value={localName}
                  onChangeText={setLocalName}
                  style={styles.input}
                />
                <Text style={styles.label}>Data e Hora de medição</Text>
                <View style={styles.pickerContainer}>
                  <DateTimePicker
                    value={date}
                    mode="date"
                    display="default"
                    onChange={onDateChange}
                    style={styles.datePicker}
                  />
                  <DateTimePicker
                    value={time}
                    mode="time"
                    display="default"
                    onChange={onTimeChange}
                    style={styles.datePicker}
                  />
                </View>

                <Text style={styles.label}>Nível Coliformes</Text>
                <TextInput
                  placeholder="Nível Coliformes"
                  value={coliformesLevel}
                  onChangeText={setColiformesLevel}
                  style={styles.input}
                  keyboardType="decimal-pad"
                />
                <Text style={styles.label}>Nível de PH</Text>
                <TextInput
                  placeholder="Nível de PH"
                  value={phLevel}
                  onChangeText={setPhLevel}
                  style={styles.input}
                  keyboardType="decimal-pad"
                />
                <Text style={styles.label}>Nível de Oxigenio dissolvido</Text>
                <TextInput
                  placeholder="Nível de Oxigenio dissolvido"
                  value={oxigenLevel}
                  onChangeText={setOxigenLevel}
                  style={styles.input}
                  keyboardType="decimal-pad"
                />
                <Text style={styles.label}>Nível de turbidez</Text>
                <TextInput
                  placeholder="Nível de turbidez"
                  value={burbidezLevel}
                  onChangeText={setBurbidezLevel}
                  style={styles.input}
                  keyboardType="decimal-pad"
                />
                <Text style={styles.label}>Nível de temperatura</Text>
                <TextInput
                  placeholder="Nível de temperatura"
                  value={tempLevel}
                  onChangeText={setTempLevel}
                  style={styles.input}
                  keyboardType="decimal-pad"
                />
                <Pressable style={styles.modalButton} onPress={addLocal}>
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
          </ScrollView>
        </KeyboardAvoidingView>
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
  pickerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: 100,
    left: -70,
    marginBottom: 20,
  },
  selectedDate: {
    marginTop: 20,
    fontSize: 16,
    textAlign: "center",
  },
  datePicker: {
    width: "100%",
    marginTop: 20,
  },
});

export default IndicatorsScreen;
