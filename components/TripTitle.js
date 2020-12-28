import { Body, Card, CardItem, Left, Text } from "native-base";
import { TouchableOpacity } from "react-native";
import React from "react";
import { observer } from "mobx-react";

const TripTitle = ({ trip, navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("TripDetail", { trip: trip })}
    >
      <Card>
        <CardItem>
          <Left>
            <Body>
              <Text>{trip.title}</Text>
            </Body>
          </Left>
        </CardItem>
      </Card>
    </TouchableOpacity>
  );
};

export default observer(TripTitle);
