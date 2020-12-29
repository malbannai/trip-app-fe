import { observer } from "mobx-react";
import { Button, Container, Form, Input, Item, Label, View } from "native-base";
import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import profileStore from "../stores/profileStore";
import usersStore from "../stores/usersStore";

const ProfileUpdate = ({ navigation, route }) => {
  const { profileOwner } = route.params;

  const [userInfo, setuserInfo] = useState(profileOwner); //to change user info

  const userProfile = profileStore.getprofileByuserId(profileOwner.id);
  const [creator, setCreator] = useState(userProfile); //to change profile info

  const handleSubmit = () => {
    console.log("TCL: handleSubmit -> userInfo", userInfo);
    usersStore.updateUser(userInfo);

    profileStore.updateProfile(profileOwner, creator);
    console.log("TCL: handleSubmit -> creator", creator);

    navigation.navigate("Profile", { profileOwner: profileOwner });
  };

  return (
    <Container>
      <Text style={styles.textTitle}>Updating Profile</Text>
      <Form>
        <Item>
          <Text>UserName :</Text>
          <Label> {userInfo.username}</Label>
        </Item>
        <Item>
          <Text>Full Name : </Text>
          <Label>
            {userInfo.firstName} {userInfo.lastName}
          </Label>
        </Item>

        <Item floatingLabel last>
          <Label>Email</Label>
          <Input
            onChangeText={(email) => setuserInfo({ ...userInfo, email })}
          />
        </Item>

        <Item floatingLabel last>
          <Label>Bio </Label>
          <Input
            onChangeText={(bio) => setCreator({ ...creator, bio })}
            defaultValue={creator.bio}
          />
        </Item>

        {/* <Item floatingLabel last>
          <Label>Image</Label>
          <Input onChangeText={(image) => setCreator({ ...creator, image })} />
        </Item> */}

        <Button block dark onPress={handleSubmit}>
          <Text style={styles.textButton}>Update !</Text>
        </Button>
      </Form>
    </Container>
  );
};

export default observer(ProfileUpdate);

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
