import * as ImagePicker from "expo-image-picker";
import { Button, Container, Form, Input, Item, Label } from "native-base";
import { Image, Platform, View } from "react-native";
import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { ImageButtonStyled } from "../styles";
import tripStore from "../stores/tripStore";
import { useEffect } from "react";

const CreateTrip = ({ trip, navigation }) => {
  const [creator, setCreator] = useState({
    title: "",
    description: "",
    image: "",
  });
  const [image, setImage] = useState(null);

  const handleSubmit = async () => {
    // ImagePicker saves the taken photo to disk and returns a local URI to it

    let localUri = image.uri;

    console.log("localuri>>>", image.uri );
    let filename = localUri.split("/").pop();

    // Infer the type of the image
    let match = /\.(\w+)$/.exec(filename);
    let type = match ? `image/${match[1]}` : `image`;
    await tripStore.createTrip({
      ...creator,
      image: { uri: localUri, name: filename, type },
    });
    navigation.navigate("TripDetail", { trip: newTrip });
  };

  //image-picker start

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const {
          status,
        } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permissions to make this work!");
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  //end of imagepicker

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
        <ImageButtonStyled
          type="MaterialCommunityIcons"
          name="camera-plus-outline"
          onPress={pickImage}
        />
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}

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
