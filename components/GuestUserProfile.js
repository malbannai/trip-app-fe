import React from "react";
import { StyleSheet, Text } from "react-native";
import { observer } from "mobx-react";
import { Button, Container, Content } from "native-base";
import { block } from "react-native-reanimated";

const GuestUserProfile = ({ navigation }) => {
  return (
    <Container style={styles.wrapper}>
      <Text
        style={styles.textTitle}
        onPress={() => navigation.replace("TripList")}
      >
        Continue Exploring Trips
      </Text>

      <Text
        style={styles.textTitle}
        onPress={() => navigation.replace("Signin")}
      >
        No account? Lets fix that by Signing you up
      </Text>
    </Container>
  );
};

export default observer(GuestUserProfile);

const styles = StyleSheet.create({
  textTitle: {
    color: "pink",
    textAlign: "center",
    fontWeight: "bold",
    margin: 10,
    fontSize: 20,
    backgroundColor: "black",
    padding: 8,
    borderRadius: 8,
  },
  wrapper: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
});

// change button triplist to go to user's trip list
