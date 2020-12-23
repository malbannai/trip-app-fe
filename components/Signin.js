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
    // Remove this commented line
    // await authStore.signup(user);
    authStore.signin(user);
  };
  return (
    <Container>
      <Text style={styles.textTitle}>Signin</Text>

      {/* You're not using this <Form>, if it doesn't change styling, remove it. */}
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

// Move your styles to styled components.
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
