import React from "react";
import TripItem from "./TripItem";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";
import tripStore from "../stores/tripStore";
import Profile from "./Profile";
import { Icon, Content, List, Spinner, Text } from "native-base";

const TripList = ({ navigation }) => {
  if (tripStore.loading) return <Spinner />;
  const tripList = tripStore.trips.map((trip) => (
    <TripItem trip={trip} key={trip.id} navigation={navigation} />
  ));

  return (
    <Content>
      {authStore.user ? (
        <Icon
          name="person"
          type="Ionicons"
          style={{ marginLeft: "auto" }}
          onPress={() => navigation.navigate("Profile")} // change to profile screen
        />
      ) : (
        <Text onPress={() => navigation.navigate("Signin")}>Signin</Text>
      )}
      <List>{tripList}</List>
    </Content>
  );
};

export default observer(TripList);
