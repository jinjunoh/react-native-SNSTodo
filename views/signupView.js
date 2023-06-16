import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import axios from "axios";
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

export default function SignupView({ navigation }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [password2, setPassword2] = useState("");

    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}> Sign Up</Text>
        <TextInput
          style={styles.input}
          placeholder="First Name"
          secureTextEntry
          value={firstname}
          onChangeText={(text) => setFirstname(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Last Name"
          secureTextEntry
          value={lastname}
          onChangeText={(text) => setLastname(text)}
        />
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
        <TextInput
          style={styles.input}
          placeholder="Re-enter Password"
          secureTextEntry
          value={password2}
          onChangeText={(text) => setPassword2(text)}
        />
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  title: {
    fontSize: "30",
    backgroundColor: "white",
    justifyContent: "center",
    padding: 16,
  },
  input: {
    width: "85%",
    height: 40,
    color: "black",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});
