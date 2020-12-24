import { StyleSheet, Text, View } from "react-native";

import CreateTrip from "./CreateTrip";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import TripList from "./TripList";
import TripDetail from "./TripDetail";
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="TripList">
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
          options={{ headerShown: false }}
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
      </Navigator>
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({});
