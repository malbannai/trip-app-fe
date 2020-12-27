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
            <Icon
              active
              name="refresh"
              onPress={() => navigation.navigate("TripUpdate", { trip: trip })}
            />
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

        <CardItem cardBody>
          {/* <Image
            source={{
              uri: trip.image.replace(
                "localhost",
                "192.168.8.105",
                "192.168.1.152"
              ),
            }}
            style={{ height: 200, width: null, flex: 1 }}
          /> */}
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

  );
};

export default observer(TripItem);
