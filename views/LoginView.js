import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  TouchableOpacity,
  SafeAreaView,
  View,
  TextInput,
  Button,
  StyleSheet,
  Text,
} from "react-native";
import CustomButton from "../components/CustomButton";
// view is like div (a container)
//

export default function LoginView({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Perform login logic here, e.g., sending credentials to a server
    console.log("Username:", username);
    console.log("Password:", password);
    // Reset the input fields
    setUsername("");
    setPassword("");
  };
  const handleSignup = () => {
    // Send user to SignupView
      // can pass data: navigation.navigate("signupView", { language: "french" })
      navigation.navigate("Signup");
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}> WithMe </Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <CustomButton title="Login" onPress={handleLogin} />
      <CustomButton title="Sign up" onPress={handleSignup} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: "90",
    backgroundColor: "white",
    justifyContent: "center",
    padding: 16,
  },
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  input: {
    width: "90%",
    height: 40,
    color: "black",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});
