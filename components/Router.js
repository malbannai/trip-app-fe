import { StyleSheet } from "react-native";

import CreateTrip from "./CreateTrip";
import Home from "./Home";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import TripDetail from "./TripDetail";
import Profile from "./Profile";
import TripList from "./TripList";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Home">
        <Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }}
        />
        <Screen
          name="Signin"
          component={Signin}
          options={{ headerShown: false }}
        />
        <Screen
          name="TripList"
          component={TripList}
          options={{ headerShown: true }}
        />
        <Screen
          name="CreateTrip"
          component={CreateTrip}
          options={{ headerShown: false }}
        />
        <Screen
          name="TripDetail"
          component={TripDetail}
          options={{ headerShown: false }}
        />
        <Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({});
