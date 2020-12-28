import { Icon, List, Spinner, Text, View, Content } from "native-base";
import React from "react";
import TripItem from "./TripItem";
import { observer } from "mobx-react";
import tripStore from "../stores/tripStore";
import authStore from "../stores/authStore";

const TripList = ({ navigation }) => {
  if (tripStore.loading) return <Spinner />;
  const otherstripList = tripStore.trips
    .filter((trip) => trip.userId !== authStore.user.id)
    .map((trip) => (
      <TripItem trip={trip} key={trip.id} navigation={navigation} />
    ));
  return (
    <Content>
      <List>{otherstripList}</List>
    </Content>
  );
};

export default observer(TripList);
