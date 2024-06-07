import {
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";

import { Text, View } from "@/components/Themed";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import Logo from "@/components/Logo";

import { router } from "expo-router";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/firebase-config";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Register() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const handleRegister = async () => {
    if (password !== confirmPassword) {
      console.log("AQUI");
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Erro",
        text2: "As senhas não coincidem",
        visibilityTime: 3000,
        autoHide: true,
        topOffset: 50,
      });
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await AsyncStorage.setItem("user", JSON.stringify(user));

      Toast.show({
        type: "success",
        position: "bottom",
        text1: `Parabéns ${nome}! cadastro feito com sucesso`,
        visibilityTime: 3000,
        autoHide: true,
        topOffset: 50,
      });

      router.replace("screens/loginScreen");
    } catch (error) {
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Erro",
        visibilityTime: 3000,
        autoHide: true,
        topOffset: 50,
      });
    }
  };
  const handleEntrar = () => {
    router.replace("screens/loginScreen");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <LinearGradient
          colors={["#4ECFEB", "#121369", "#0A0B40"]}
          style={styles.container}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <Logo />

          <View style={styles.inputContainer}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu nome"
              keyboardType="default"
              value={nome}
              onChangeText={setNome}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite seu email"
              keyboardType="email-address"
              value={email}
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Digite sua senha"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Confirm a Senha</Text>
            <TextInput
              style={styles.input}
              placeholder="Confirme a senha"
              secureTextEntry
              value={confirmPassword}
              onChangeText={setConfirmPassword}
            />
          </View>

          <View style={styles.containerEntrar}>
            <Text style={styles.entrarText}>Possui Cadastro? </Text>
            <TouchableOpacity onPress={handleEntrar}>
              <Text style={styles.entrar}>Entrar</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </LinearGradient>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    top: -60,
  },
  inputContainer: {
    alignItems: "center",
    width: "100%",
    backgroundColor: "transparent",
    marginBottom: 20,
  },
  label: {
    marginBottom: 5,
    color: "#fff",
    fontSize: 16,
  },
  input: {
    width: "80%",
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
  },
  button: {
    width: "80%",
    height: 50,
    backgroundColor: "#07B461",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginBottom: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  logo: {
    position: "absolute",
    top: 20,
    width: 100,
  },
  containerLogo: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 60,
    backgroundColor: "transparent",
    marginBottom: 40,
  },
  titulo1: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#fff",
  },
  titulo2: {
    fontSize: 35,
    marginBottom: 20,
    color: "#0A0B40",
  },
  containerEntrar: {
    backgroundColor: "transparent",
    top: -20,
    flexDirection: "row",
  },
  entrar: {
    color: "#5DB075",
    fontSize: 20,
  },
  entrarText: {
    color: "#fff",
    fontSize: 20,
  },
});
