import { Button, Container, Form, Input, Item, Label } from "native-base";
import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";

import { AuthOther } from "../styles";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    await authStore.signin(user);
    // if (authStore.user) navigation.navigate("TripList"); //change to profile
    if (authStore.user) navigation.navigate("CreateTrip");
  };
  return (
    <Container>
      <Text style={styles.textTitle}>Signin</Text>

      <Form>
        <Item floatingLabel>
          <Label>Username</Label>
          <Input
            onChangeText={(username) => setUser({ ...user, username })}
            autoCapitalize="none"
            required
          />
        </Item>
        <Item floatingLabel last>
          <Label>Password</Label>
          <Input
            secureTextEntry={true}
            onChangeText={(password) => setUser({ ...user, password })}
            autoCapitalize="none"
            required
          />
        </Item>
        <Button block dark onPress={handleSubmit}>
          <Text style={styles.textButton}>Signin</Text>
        </Button>
      </Form>
      <AuthOther onPress={() => navigation.replace("Signup")}>
        Click here to register!
      </AuthOther>
    </Container>
  );
};

export default observer(Signin);

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
