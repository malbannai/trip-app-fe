import { Button, Container, Form, Input, Item, Label } from "native-base";
import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";

import authStore from "../stores/authStore"; // unused import
import tripStore from "../stores/tripStore";

const CreateTrip = () => {
  const [creator, setCreator] = useState({
    title: "",
    description: "",
    image: "",
  });

  const handleSubmit = () => {
    // delete this line
    // await authStore.signup(user);
    tripStore.createTrip(creator);
    console.log(creator); // delete console logs
  };
  return (
    <Container>
      <Text style={styles.textTitle}>Create New Trip</Text>

      <Form>
        <Item floatingLabel>
          <Label>Title</Label>
          <Input onChangeText={(title) => setCreator({ ...creator, title })} />
        </Item>
        <Item floatingLabel last>
          <Label>Description</Label>
          <Input
            onChangeText={(description) =>
              setCreator({ ...creator, description })
            }
          />
        </Item>
        <Item floatingLabel last>
          <Label>Image</Label>
          <Input onChangeText={(image) => setCreator({ ...creator, image })} />
        </Item>

        <Button block dark onPress={handleSubmit}>
          <Text style={styles.textButton}>Add your new trip!</Text>
        </Button>
      </Form>
    </Container>
  );
};

export default CreateTrip;

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
