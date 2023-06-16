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


export default function signupView() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

   const handleSignup = async () => {
     try {
       const response = await axios.post("http://localhost:5000/users", {
         username,
         password,
       });
       console.log(response.data.message); // Display the response message
     } catch (error) {
       console.error(error.response.data.message); // Display the error message
     }
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
    color: "white",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
  },
});
