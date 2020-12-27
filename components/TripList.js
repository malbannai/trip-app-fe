import { Icon, List, Spinner, Text, View } from "native-base";

import React from "react";
import TripItem from "./TripItem";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";
import tripStore from "../stores/tripStore";
import Profile from "./Profile";

const TripList = ({ navigation }) => {
  if (tripStore.loading) return <Spinner />;
  const tripList = tripStore.trips.map((trip) => (
    <TripItem trip={trip} key={trip.id} navigation={navigation} />
  ));

  return (
    <View>
      {authStore.user ? (
        <Icon
          name="person"
          type="Ionicons"
          style={{ marginLeft: "auto" }}
          onPress={() => navigation.navigate("TripList")} // change to profile screen
        />
      ) : (
        <Text onPress={() => navigation.navigate("Signin")}>Signin</Text>
      )}

      <List>{tripList}</List>
    </View>
  );
};

export default observer(TripList);
