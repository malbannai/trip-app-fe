import React from "react";
import TripItem from "./TripItem";
import { observer } from "mobx-react";
import tripStore from "../stores/tripStore";
import Profile from "./Profile";
import { Content, List, Spinner, Text } from "native-base";

const TripList = ({ navigation }) => {
  if (tripStore.loading) return <Spinner />;
  const tripList = tripStore.trips.map((trip) => (
    <TripItem trip={trip} key={trip.id} navigation={navigation} />
  ));

  return (
    <Content>
      <Text onPress={() => navigation.navigate("Signin")}>signin </Text>
      <List>{tripList}</List>
    </Content>
  );
};

export default observer(TripList);
