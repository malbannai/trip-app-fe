import { Button, Container, Form, Input, Item, Label } from "native-base";
import React, { useState } from "react";
import { StyleSheet, Text } from "react-native";

import { AuthOther } from "../styles";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";

/**
 * Same comments from Signin component
 */

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSubmit = async () => {
    await authStore.signup(user);
    if (authStore.user) navigation.navigate("Profile");
  };
  return (
    <Container>
      <Text style={styles.textTitle}>Signup</Text>

      <Form>
        <Item floatingLabel>
          <Label>Username</Label>
          <Input
            onChangeText={(username) => setUser({ ...user, username })}
            autoCapitalize="none"
            required
          />
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
          <Input
            onChangeText={(email) => setUser({ ...user, email })}
            autoCapitalize="none"
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
          <Text style={styles.textButton}>Signup</Text>
        </Button>
      </Form>
      <AuthOther onPress={() => navigation.replace("Signin")}>
        Click here to sign in!
      </AuthOther>
    </Container>
  );
};

export default observer(Signup);

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
