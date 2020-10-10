import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { create } from "apisauce";
import { State as AppState, StackParamList } from "./app";
import { COLORS } from "./styles/styles";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import SettingsScreen from "./screens/SettingsScreen";

const Stack = createStackNavigator<StackParamList>();

const App = () => {
  // const [state, setState] = React.useState<AppState>({
  //   pages: "",
  //   api:
  //     create({
  //       baseURL: "https://jsonj-jobbie.herokuapp.com",
  //     })
  // })

  // const { pages, api } = state

  // React.useEffect(() => {
  //   api
  //     .get("/api/jobs?jobTitle=pool")
  //     .then(response => response ? console.log(response.data) : null)
  //     .catch((err) => console.log(err))
  // }, [])

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">

          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "Welcome"
            }}
          />

          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: "Jobbot",
              headerStyle: {
                backgroundColor: COLORS.main
              },
              headerTintColor: COLORS.white,
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />

          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              title: "Settings",
              headerStyle: {
                backgroundColor: COLORS.main
              },
              headerTintColor: COLORS.white,
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;