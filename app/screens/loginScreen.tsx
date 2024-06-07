import {
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Pressable,
} from "react-native";

import { Text, View } from "@/components/Themed";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import { Link, router } from "expo-router";
import Logo from "@/components/Logo";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "@/firebase-config";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await AsyncStorage.setItem("user", JSON.stringify(user));

      Toast.show({
        type: "success",
        position: "bottom",
        text1: `Bem-vindo de volta!`,
        visibilityTime: 5000,
        autoHide: true,
        topOffset: 50,
      });

      // Alert.alert("Bem-vindo de volta!");

      router.replace("(tabs)/homeScreen");
    } catch (error) {
      console.log("🚀 ~ handleLogin ~ error:", error);
      Toast.show({
        type: "error",
        position: "bottom",
        text1: "Erro de Login",
        visibilityTime: 5000,
        autoHide: true,
        topOffset: 50,
      });
    }
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
          <View style={styles.containerRegistrar}>
            <Text style={styles.logarText}>Não Possui Cadastro? </Text>

            <Link href="/screens/registerScreen">
              <Text style={styles.logar}>Registre-se</Text>
            </Link>
          </View>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText} onPress={handleLogin}>
              Acessar
            </Text>
          </Pressable>
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
  imageContainer: {
    width: "30%",
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
  containerRegistrar: {
    backgroundColor: "transparent",
    top: -15,
    flexDirection: "row",
  },
  logarText: {
    fontSize: 20,
    color: "#fff",
  },
  logar: {
    color: "#5DB075",
    fontSize: 20,
  },
});
