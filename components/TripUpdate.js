import { Button, Container, Form, Input, Item, Label } from "native-base";
import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";

import { observer } from "mobx-react";
import tripStore from "../stores/tripStore";

const TripUpdate = ({ navigation, route }) => {
  const { trip } = route.params;
  const [creator, setCreator] = useState(trip);

  const handleSubmit = () => {
    tripStore.updateTrip(creator);
    navigation.navigate("TripList");
  };
  return (
    <Container>
      <Text style={styles.textTitle}>Updating a Trip</Text>

      <Form>
        <Item floatingLabel>
          <Label>Title</Label>
          <Input
            onChangeText={(title) => setCreator({ ...creator, title })}
            defaultValue={creator.title}
          />
        </Item>
        <Item floatingLabel last>
          <Label>Description</Label>
          <Input
            onChangeText={(description) =>
              setCreator({ ...creator, description })
            }
            defaultValue={creator.description}
          />
        </Item>
        <Item floatingLabel last>
          <Label>Image</Label>
          {/* <Input
            onChangeText={(image) => setCreator({ ...creator, image })}
            defaultValue={creator.image}
          /> */}
        </Item>

        <Button block dark onPress={handleSubmit}>
          <Text style={styles.textButton}>Update {creator.title}!</Text>
        </Button>
      </Form>
    </Container>
  );
};

export default observer(TripUpdate);

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
