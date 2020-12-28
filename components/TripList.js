import { Icon, List, Spinner, Text, View, Content } from "native-base";

import Profile from "./Profile";
import React from "react";
import TripItem from "./TripItem";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";
import tripStore from "../stores/tripStore";

const TripList = ({ navigation }) => {
  if (tripStore.loading) return <Spinner />;
  const tripList = tripStore.trips.map((trip) => (
    <TripItem trip={trip} key={trip.id} navigation={navigation} />
  ));

  return (
    <>
      {authStore.user ? (
        <Icon
          name="person"
          type="Ionicons"
          style={{ marginLeft: "auto" }}
          onPress={() => navigation.navigate("Profile")}
        />
      ) : (
        <Text onPress={() => navigation.navigate("Signin")}>Signin</Text>
      )}
      <Content>
        <List>{tripList}</List>
      </Content>
    </>
  );
};

export default observer(TripList);
