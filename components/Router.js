import React from "react";
import { StyleSheet, Text, View } from "react-native";

//navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const { Navigator, Screen } = createStackNavigator();

//components
import Signup from "./Signup";
import Signin from "./Signin";

const Router = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Signin">
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
      </Navigator>
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({});
