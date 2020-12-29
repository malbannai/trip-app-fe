import React from "react";
import { Spinner, StyleSheet, Text, View } from "react-native";
import { observer } from "mobx-react";
import profileStore from "../stores/profileStore";
import authStore from "../stores/authStore";
import tripStore from "../stores/tripStore";
import usersStore from "../stores/usersStore";
import ip from "../stores/ipaddress";
import TripItem from "./TripItem";
import TripTitle from "./TripTitle";
import ProfileUpdate from "./ProfileUpdate";
import { Body, Button, CardItem, Content } from "native-base";

const Profile = ({ route, navigation }) => {
  if (profileStore.loading || tripStore.loading || usersStore.loading)
    return <Spinner />;
  const { profileOwner } = route.params;
  profileOwner.id === 0 ? navigation.navigate("GuestUserProfile") : null;

  const userProfile = profileStore.getprofileByuserId(profileOwner.id);
  console.log("userProfile", userProfile);
  const mytripList = tripStore.trips
    .filter((trip) => trip.userId === profileOwner.id)
    .map((trip) => (
      <TripItem trip={trip} key={trip.id} navigation={navigation} />
    ));

  const handleSignout = () => {
    authStore.signout();
    navigation.navigate("TripList");
  };

  return (
    <>
      <Content padder>
        <Text style={styles.textTitle}>Profile {profileOwner.username}</Text>

        {/* <Left>
            <CardItem cardBody>
              <Image
                source={{
                  uri: userProfile.image.replace("localhost", ip),
                }}
                style={{ height: 100, width: 100, flex: 0 }}
              />
            </CardItem>
          </Left> */}

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
            <Text style={styles.buttonWrapper}>{mytripList}</Text>
          </Body>
        </CardItem>

        <CardItem footer bordered>
          <Text>Total number of trips : </Text>
          <Text>{mytripList.length}</Text>
        </CardItem>
        <View style={styles.buttonWrapper}>
          <Button
            dark
            black
            rounded
            onPress={() => navigation.replace("TripList")}
            style={styles.buttonStyle}
          >
            <Text style={styles.textButton}>Explore Trips</Text>
          </Button>
          <Button
            dark
            black
            rounded
            onPress={() =>
              navigation.replace("ProfileUpdate", {
                profileOwner: profileOwner,
              })
            }
            style={styles.buttonStyle}
          >
            <Text style={styles.textButton}>Update Profile</Text>
          </Button>
          <Button
            dark
            black
            rounded
            onPress={() => navigation.navigate("CreateTrip")}
            style={styles.buttonStyle}
          >
            <Text style={styles.textButton}>Create New Trip</Text>
          </Button>
          <Button
            dark
            black
            rounded
            onPress={() => handleSignout()}
            style={styles.buttonStyle}
          >
            <Text style={styles.textButton}>Signout</Text>
          </Button>
        </View>
      </Content>
    </>
  );
};

export default observer(Profile);

const styles = StyleSheet.create({
  textButton: {
    color: "pink",
    textAlign: "center",
    paddingLeft: 30,
  },
  textTitle: {
    color: "gray",
    textAlign: "center",
    margin: 8,
    fontSize: 30,
    fontWeight: "bold",
  },
  buttonWrapper: {
    marginTop: 20,
    marginBottom: 30,
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    margin: 50,
    width: "100%",
  },
  buttonStyle: {
    padding: 10,
    width: "50%",
    textAlign: "center",
  },
});
