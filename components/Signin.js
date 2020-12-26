import { Button, Container, Form, Input, Item, Label } from "native-base";
import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";

import authStore from "../stores/authStore";

const Signin = ({ navigation }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async () => {
    // await authStore.signup(user);
    await authStore.signin(user);
    if (authStore.user) navigation.navigate("Profile");
  };
  return (
    <Container>
      <Text style={styles.textTitle}>Signin</Text>

      <Form>
        <Item floatingLabel>
          <Label>Username</Label>
          <Input onChangeText={(username) => setUser({ ...user, username })} />
        </Item>
        <Item floatingLabel last>
          <Label>Password</Label>
          <Input
            secureTextEntry={true}
            onChangeText={(password) => setUser({ ...user, password })}
          />
        </Item>
        <Button block dark onPress={handleSubmit}>
          <Text style={styles.textButton}>Signin</Text>
        </Button>
      </Form>
    </Container>
  );
};

export default Signin;

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
