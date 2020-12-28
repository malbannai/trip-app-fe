import { Icon, List, Spinner, Text, View, Content } from "native-base";

import Profile from "./Profile";
import React from "react";
import TripItem from "./TripItem";
import { observer } from "mobx-react";
import tripStore from "../stores/tripStore";
import {} from "../styles";

const TripList = ({ navigation }) => {
  if (tripStore.loading) return <Spinner />;
  const tripList = tripStore.trips.map((trip) => (
    <TripItem trip={trip} key={trip.id} navigation={navigation} />
  ));

  return (
    <Content>
      <List>{tripList}</List>
    </Content>
  );
};

export default observer(TripList);
