import React from "react";
import { Spinner, Image } from "react-native";
import { observer } from "mobx-react";
import profileStore from "../stores/profileStore";
import authStore from "../stores/authStore";
import tripStore from "../stores/tripStore";
import usersStore from "../stores/usersStore";
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Right,
  List,
} from "native-base";

const Profile = ({ navigation }) => {
  if (profileStore.loading || tripStore.loading || usersStore.loading)
    return <Spinner />;

  const profileOwner = usersStore.users.find(
    (user) => user.id === authStore.user.id
  );
  const userProfile = profileStore.getprofileByuserId(profileOwner.id);
  const mytripList = tripStore.trips
    .filter((trip) => trip.userId === profileOwner.id)
    .map((trip) => <Text>{trip.title}</Text>);

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
              <Image
                source={{
                  uri: userProfile.image.replace("localhost", "192.168.0.153"),
                }}
                style={{ height: 100, width: 100, flex: 0 }}
              />
            </CardItem>
          </Left>

          <CardItem bordered>
            <Body>
              <Text>{userProfile.bio}</Text>
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
              <List>{mytripList}</List>
            </Body>
          </CardItem>

          <CardItem footer bordered>
            <Text>Total number of trips : </Text>
            <Text>{mytripList.length}</Text>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

export default observer(Profile);
