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

import { Image } from "react-native";
import React from "react";

const TripItem = ({ trip, navigation }) => {
  return (
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
          source={{ uri: trip.image }}
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
    </Card>
  );
};

export default TripItem;
