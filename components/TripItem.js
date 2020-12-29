import { Alert, Image, TouchableOpacity } from "react-native";
import { Body, Card, Left } from "native-base";

import React from "react";
import { observer } from "mobx-react";
import authStore from "../stores/authStore";
import tripStore from "../stores/tripStore";
import usersStore from "../stores/usersStore";
import ip from "../stores/ipaddress";
import {
  IconWrapper,
  RefreshIcon,
  TrashIcon,
  TripCardItem,
  TripItemImage,
  TripTitle,
  TripOwner,
} from "../styles";

const TripItem = ({ trip, navigation }) => {
  const owner = usersStore.users.find((user) => user.id === trip.userId);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("TripDetail", { trip: trip })}
    >
      <Card>
        <TripCardItem>
          <Left>
            <Body>
              <TripTitle>{trip.title}</TripTitle>
              <TripOwner
                note
                onPress={() =>
                  navigation.navigate("Profile", { profileOwner: owner })
                }
              >
                By {owner.username}
              </TripOwner>
            </Body>
          </Left>
          {/* {trip.image ? (
            <TripItemImage
              source={{
                uri: trip.image.replace("localhost", ip),
              }}
            />
          ) : null} */}
        </TripCardItem>
        <IconWrapper>
          {authStore.user.id === trip.userId ? (
            <>
              <RefreshIcon
                active
                name="refresh"
                onPress={() =>
                  navigation.navigate("TripUpdate", { trip: trip })
                }
              />
              <TrashIcon
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
        </IconWrapper>
      </Card>
    </TouchableOpacity>
  );
};

export default observer(TripItem);
