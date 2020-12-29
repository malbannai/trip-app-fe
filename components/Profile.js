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
} from "native-base";
import { Image, Spinner, StyleSheet, Text } from "react-native";

import ProfileUpdate from "./ProfileUpdate";
import React from "react";
import TripItem from "./TripItem";
import TripTitle from "./TripTitle";
import authStore from "../stores/authStore";
import ip from "../stores/ipaddress";
import { observer } from "mobx-react";
import profileStore from "../stores/profileStore";
import tripStore from "../stores/tripStore";
import usersStore from "../stores/usersStore";

const Profile = ({ route, navigation }) => {
  if (profileStore.loading || tripStore.loading || usersStore.loading)
    return <Spinner />;
  const { profileOwner } = route.params;
  profileOwner.id === 0 ? navigation.navigate("GuestUserProfile") : null;
  console.log(profileOwner);
  // const profileOwner = usersStore.users.find(
  //   (user) => user.id === authStore.user.id
  // );
  const userProfile = profileStore.getprofileByuserId(profileOwner.id);
  console.log("userProfile", userProfile);
  const mytripList = tripStore.trips
    .filter((trip) => trip.userId === profileOwner.id)
    .map((trip) => (
      <TripItem trip={trip} key={trip.id} navigation={navigation} />
    ));

  // <TripTitle trip={trip} key={trip.id} navigation={navigation} />

  const handleSignout = () => {
    authStore.signout();
    navigation.navigate("TripList");
  };

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
                  uri: userProfile.image.replace("localhost", ip),
                }}
                style={{ height: 100, width: 100, flex: 0 }}
              /> */}
            </CardItem>
          </Left>

          <CardItem bordered>
            <Body>
              <Text>{profileOwner.bio}</Text>
            </Body>
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
              <Text>{mytripList}</Text>
            </Body>
          </CardItem>

          <CardItem footer bordered>
            <Text>Total number of trips : </Text>
            <Text>{mytripList.length}</Text>
          </CardItem>
        </Card>
      </Content>
      <Content>
        <Button
          block
          dark
          rounded
          onPress={() => navigation.replace("TripList")}
        >
          <Text style={styles.textButton}>Explore Trips</Text>
        </Button>
        <Button
          block
          dark
          rounded
          onPress={() =>
            navigation.replace("ProfileUpdate", { profileOwner: profileOwner })
          }
        >
          <Text style={styles.textButton}>Update Profile</Text>
        </Button>
        <Button block dark onPress={() => navigation.navigate("CreateTrip")}>
          <Text style={styles.textButton}>Create New Trip</Text>
        </Button>
        <Button block dark onPress={() => handleSignout()}>
          <Text style={styles.textButton}>Signout</Text>
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
