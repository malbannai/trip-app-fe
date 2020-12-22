import React, { useState } from "react";
import { Text, StyleSheet } from "react-native";
import { Container, Form, Item, Input, Label, Button } from "native-base";
import authStore from "../stores/authStore";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = () => {
    // await authStore.signup(user);
    authStore.signup(user);
  };
  return (
    <Container>
      <Text style={styles.textTitle}>Signup</Text>

      <Form>
        <Item floatingLabel>
          <Label>Username</Label>
          <Input onChangeText={(username) => setUser({ ...user, username })} />
        </Item>
        <Item floatingLabel>
          <Label>First Name</Label>
          <Input
            onChangeText={(firstName) => setUser({ ...user, firstName })}
          />
        </Item>
        <Item floatingLabel>
          <Label>Last Name</Label>
          <Input onChangeText={(lastName) => setUser({ ...user, lastName })} />
        </Item>
        <Item floatingLabel>
          <Label>Email</Label>
          <Input onChangeText={(email) => setUser({ ...user, email })} />
        </Item>
        <Item floatingLabel last>
          <Label>Password</Label>
          <Input
            secureTextEntry={true}
            onChangeText={(password) => setUser({ ...user, password })}
          />
        </Item>
        <Button block dark onPress={handleSubmit}>
          <Text style={styles.textButton}>Signup</Text>
        </Button>
      </Form>
    </Container>
  );
};

export default Signup;

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
