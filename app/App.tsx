import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// import { createStackNavigator } from "@react-navigation/stack";
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import { create } from "apisauce";
import configureStore from './redux/configureStore';
import {State as AppState, TabParamList} from './App';
import globalStyles, {COLORS} from './styles';
import SearchScreen from './screens/SearchScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';

const store = configureStore({});
// const Stack = createStackNavigator<StackParamList>();
const Tab = createMaterialBottomTabNavigator<TabParamList>();

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
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  return (
    <>
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        {!isAuthenticated && <LoginScreen />}
        {isAuthenticated && (
          <NavigationContainer>
            <Tab.Navigator
              initialRouteName="Search"
              activeColor={COLORS.black}
              inactiveColor={COLORS.white}
              labeled={true}
              shifting={true}>
              <Tab.Screen
                name="Search"
                component={SearchScreen}
                options={{
                  tabBarLabel: 'Search',
                  tabBarColor: COLORS.main,
                  tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons
                      name="magnify"
                      color={color}
                      size={26}
                    />
                  ),
                }}
              />

              <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                  tabBarLabel: 'My Jobs',
                  tabBarColor: COLORS.main,
                  tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons
                      name="currency-usd"
                      color={color}
                      size={26}
                    />
                  ),
                }}
              />

              <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                  tabBarLabel: 'Settings',
                  tabBarColor: COLORS.main,
                  tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons
                      name="cog"
                      color={color}
                      size={26}
                    />
                  ),
                }}
              />
            </Tab.Navigator>
          </NavigationContainer>
        )}
      </Provider>
    </>
  );
};

export default App;
