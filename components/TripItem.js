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

import { Image, TouchableOpacity } from "react-native";

import React from "react";
import { observer } from "mobx-react";
import tripStore from "../stores/tripStore";

const TripItem = ({ trip, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("TripDetail", { trip: trip })}
    >
      <Card>
        <CardItem>
          <Left>
            <Body>
              <Text>{trip.title}</Text>
              <Text note>{trip.owner}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={{ uri: trip.image?.replace("localhost", "192.168.1.152") }}
            style={{ height: 200, width: null, flex: 1 }}
          />
        </CardItem>
        <CardItem>
          {/* <Left>
          <Button transparent>
            <Icon active name="thumbs-up" />
            <Text>12 Likes</Text>
          </Button>
        </Left>
        <Body>
          <Button transparent>
            <Icon active name="chatbubbles" />
            <Text>4 Comments</Text>
          </Button>
        </Body>
        <Right>
          <Text>11h ago</Text>
        </Right> */}
        </CardItem>
        <CardItem>
          <Right>
            <Icon
              name="trash"
              type="Ionicons"
              onPress={() => tripStore.removeTrip(trip.id)}
            />
          </Right>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

export default observer(TripItem);
