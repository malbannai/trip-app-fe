import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Header,
  Left,
  List,
  Right,
} from "native-base";
import { Image, Spinner, StyleSheet, Text } from "react-native";

import React from "react";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";
import profileStore from "../stores/profileStore";
import tripStore from "../stores/tripStore";
import usersStore from "../stores/usersStore";
import TripItem from "./TripItem";

const Profile = ({ navigation }) => {
  if (profileStore.loading || tripStore.loading || usersStore.loading)
    return <Spinner />;

  const profileOwner = usersStore.users.find(
    (user) => user.id === authStore.user.id
  );
  const userProfile = profileStore.getprofileByuserId(profileOwner.id);
  const mytripList = tripStore.trips
    .filter((trip) => trip.userId === profileOwner.id)
    .map((trip) => (
      <TripItem trip={trip} key={trip.id} navigation={navigation} />
    ));

  return (
    <Container>
      <Header />
      <Content padder>
        <Card>
          <CardItem header bordered>
            <Text>Profile {profileOwner.username}</Text>
          </CardItem>
          <Left>
            <CardItem cardBody>
              {/* <Image
                source={{
                  uri: userProfile.image.replace("localhost", "192.168.0.153"),
                }}
                style={{ height: 100, width: 100, flex: 0 }}
              /> */}
            </CardItem>
          </Left>

          <CardItem bordered>
            {/* <Body>
              <Text>{profileOwner.bio}</Text>
            </Body> */}
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text>
                By: {profileOwner.firstName} {profileOwner.lastName}
              </Text>
              <Text>Email: {profileOwner.email}</Text>
            </Body>
          </CardItem>
          <CardItem bordered>
            <Body>
              <Text>My trips are: </Text>
              <List>{mytripList}</List>
            </Body>
          </CardItem>

          <CardItem footer bordered>
            <Text>Total number of trips : </Text>
            <Text>{mytripList.length}</Text>
          </CardItem>
        </Card>
      </Content>
      <Content>
        <Button block dark onPress={() => navigation.replace("TripList")}>
          <Text style={styles.textButton}>Explore Trips</Text>
        </Button>
        <Button block dark onPress={() => navigation.replace("TripList")}>
          <Text style={styles.textButton}>My Trips</Text>
        </Button>
        <Button block dark onPress={() => navigation.replace("CreateTrip")}>
          <Text style={styles.textButton}>Create New Trip</Text>
        </Button>
      </Content>
    </Container>
  );
};

export default observer(Profile);

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

// change button triplist to go to user's trip list
