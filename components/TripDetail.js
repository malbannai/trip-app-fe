import { observer } from "mobx-react";
import { StyleSheet } from "react-native";
import React from "react";
import { Image } from "react-native";
import { Card, CardItem, Text, Left, Body } from "native-base";

const TripDetail = ({ route }) => {
  const { trip } = route.params;
  console.log(trip);
  return (
    <Card style={{ flex: 0 }}>
      <CardItem>
        <Image
          source={{ uri: trip.image.replace("localhost", "192.168.8.100") }}
          style={{ height: 500, width: "100%", flex: 1 }}
        />
      </CardItem>
      <CardItem>
        <Left>
          <Body>
            <Text>Trip title: {trip.title}</Text>
            <Text note>Trip Owner: {trip.user.firstName}</Text>
            <Text note>Description: {trip.description}</Text>
          </Body>
        </Left>
      </CardItem>
    </Card>
  );
};

export default observer(TripDetail);

const styles = StyleSheet.create({});
