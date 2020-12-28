import { Body, Button, Card, CardItem, Content, Left, Text } from "native-base";

import { Image } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { observer } from "mobx-react";
import authStore from "../stores/authStore";

const TripDetail = ({ route, navigation }) => {
  const { trip } = route.params;
  return (
    <Content>
      <Card style={{ flex: 0 }}>
        <CardItem>
          <Image
            source={{ uri: trip.image.replace("localhost", "192.168.0.153") }}
            style={{ height: 500, width: "100%", flex: 1 }}
          />
        </CardItem>
        <CardItem>
          <Left>
            <Body>
              <Text>Trip titel: {trip.title}</Text>
              <Text note>Trip Owner: {trip.user.firstName}</Text>
              <Text note>Description: {trip.description}</Text>
            </Body>
          </Left>
        </CardItem>
        {authStore.user.id === trip.userId ? (
          <>
            <Button block dark onPress={() => navigation.replace("TripList")}>
              <Text style={styles.textButton}>Explore Trips</Text>
            </Button>
            <Button block dark onPress={() => navigation.replace("TripList")}>
              <Text style={styles.textButton}>My Trips</Text>
            </Button>
            <Button block dark onPress={() => navigation.replace("CreateTrip")}>
              <Text style={styles.textButton}>Create New Trip</Text>
            </Button>
          </>
        ) : null}
      </Card>
    </Content>
  );
};

export default observer(TripDetail);

const styles = StyleSheet.create({});
