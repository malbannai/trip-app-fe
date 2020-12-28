import CreateTrip from "./CreateTrip";
import Home from "./Home";
import { NavigationContainer } from "@react-navigation/native";
import Profile from "./Profile";
import React from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import TripDetail from "./TripDetail";
import TripUpdate from "./TripUpdate";
import TripList from "./TripList";
import { createStackNavigator } from "@react-navigation/stack";
import { observer } from "mobx-react";
import ActionBarImage from "./ActionBarImage";

const { Navigator, Screen } = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Home"
        screenOptions={{ headerLeft: () => <ActionBarImage /> }}
      >
        <Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: true }}
        />
        <Screen
          name="Signin"
          component={Signin}
          options={{ headerShown: true }}
        />
        <Screen
          name="TripList"
          component={TripList}
          options={{
            headerShown: true,
          }}
        />
        <Screen
          name="CreateTrip"
          component={CreateTrip}
          options={{ headerShown: false }}
        />
        <Screen
          name="TripDetail"
          component={TripDetail}
          options={{ headerShown: true }}
        />
        <Screen
          name="TripUpdate"
          component={TripUpdate}
          options={{ headerShown: false }}
        />
        <Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: true }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default observer(Router);
