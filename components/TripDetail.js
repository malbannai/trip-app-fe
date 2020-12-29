import { Button, Content, Spinner, Text } from "native-base";
import {
  DetailsWrapper,
  TripCardItem,
  TripDes,
  TripItemImage,
  TripOwner,
  TripTitle,
} from "../styles";

import React from "react";
import { StyleSheet } from "react-native";
import authStore from "../stores/authStore";
import ip from "../stores/ipaddress";
import { observer } from "mobx-react";
import profileStore from "../stores/profileStore";
import tripStore from "../stores/tripStore";
import usersStore from "../stores/usersStore";

const TripDetail = ({ route, navigation, navigation: { goBack } }) => {
  if (profileStore.loading || tripStore.loading || usersStore.loading)
    return <Spinner />;
  const { trip } = route.params;
  return (
    <Content>
      <DetailsWrapper>
        <TripCardItem>
          <TripTitle>{trip.title}</TripTitle>
        </TripCardItem>
        <TripCardItem>
          {/* <TripItemImage
            source={{ uri: trip.image.replace("localhost", ip) }}
          /> */}
        </TripCardItem>
        <TripCardItem>
          <TripOwner>Trip Owner: </TripOwner>
        </TripCardItem>

        <TripCardItem>
          <TripTitle>Description:</TripTitle>
          <TripDes> {trip.description}</TripDes>
        </TripCardItem>
        <TripCardItem>
          {authStore.user.id === trip.userId ? (
            <>
              <Button block dark onPress={() => navigation.replace("TripList")}>
                <Text style={styles.textButton}>Explore Trips</Text>
              </Button>
              <Button block dark onPress={() => navigation.replace("TripList")}>
                <Text style={styles.textButton}>My Trips</Text>
              </Button>
              <Button
                block
                dark
                onPress={() => navigation.replace("CreateTrip")}
              >
                <Text style={styles.textButton}>Create New Trip</Text>
              </Button>
            </>
          ) : null}
        </TripCardItem>
        <TripCardItem>
          <Button block dark onPress={() => navigation.replace("TripList")}>
            <Text style={styles.textButton}>Go Back to Trip List</Text>
          </Button>
          {/* <Button onPress={() => goBack()} title="Go back" /> */}
        </TripCardItem>
      </DetailsWrapper>
    </Content>
  );
};

export default observer(TripDetail);

const styles = StyleSheet.create({
  textButton: {
    color: "pink",
    textAlign: "center",
  },
  textTitle: {
    color: "black",
    textAlign: "center",
    marginTop: 100,
  },
});
