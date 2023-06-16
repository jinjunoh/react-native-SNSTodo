import Login from "./views/LoginView";
import Signup from "./views/SignupView";
//import ThirdScreen from "./screens/ThirdScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          //options={{ title: "Welcome" }}
        />
        <Stack.Screen name="Signup" component={Signup} />
        {/* <Stack.Screen
          name="Third"
          component={ThirdScreen}
          options={{ headerShown: false }}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
