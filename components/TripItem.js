import {
  Body,
  Card,
  CardItem,
  Icon,
  Left,
  ListItem,
  Right,
  Text,
  Thumbnail,
} from "native-base";

import { Image, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { observer } from "mobx-react";
import authStore from "../stores/authStore";
import tripStore from "../stores/tripStore";

const TripItem = ({ trip, navigation }) => {
  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.navigate("TripDetail", { trip: trip })}
      >
        <Card>
          <CardItem>
            <Left>
              <Body>
                <Text>{trip.title}</Text>
                <Text>{trip.description}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{ uri: trip.image.replace("localhost", "192.168.8.100") }}
              style={{ height: 200, width: null, flex: 1 }}
            />
          </CardItem>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity>
        <CardItem>
          {authStore.user.id === trip.userId ? (
            <>
              <Icon
                active
                name="refresh"
                onPress={() =>
                  navigation.navigate("TripUpdate", { trip: trip })
                }
              />
              <Icon
                name="trash"
                type="Ionicons"
                onPress={() => tripStore.removeTrip(trip.id)}
              />
            </>
          ) : null}
          {authStore.user
            ? null
            : Alert.alert(
                "Signin",
                "You need to sign in before completing your order",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                  },
                  {
                    text: "Signin",
                    onPress: () => navigation.navigate("Signin"),
                  },
                ],
                { cancelable: false }
              )}
        </CardItem>
      </TouchableOpacity>
    </>

  );
};

export default observer(TripItem);
