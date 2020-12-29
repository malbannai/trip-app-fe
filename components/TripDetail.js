import { Button, Content, Text, Spinner } from "native-base";
import React from "react";
import ip from "../stores/ipaddress";
import { StyleSheet } from "react-native";
import { observer } from "mobx-react";
import authStore from "../stores/authStore";
import profileStore from "../stores/profileStore";
import usersStore from "../stores/usersStore";
import tripStore from "../stores/tripStore";
import {
  TripCardItem,
  TripItemImage,
  DetailsWrapper,
  TripTitle,
  TripOwner,
  TripDes,
} from "../styles";

const TripDetail = ({ route, navigation }) => {
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
          <TripItemImage
            source={{ uri: trip.image.replace("localhost", ip) }}
          />
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
