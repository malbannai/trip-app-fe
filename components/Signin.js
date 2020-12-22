import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { Container, Form, Item, Input, Label, Button } from "native-base";
import authStore from "../stores/authStore";

const Signin = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = () => {
    // await authStore.signup(user);
    authStore.signin(user);
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
