import React from "react";
import { Text } from "react-native";
import { Icon } from "native-base";
import authStore from "../stores/authStore";
import { useNavigation } from "@react-navigation/native";
import { observer } from "mobx-react";

const ActionBarImage = () => {
  const navigation = useNavigation();
  return (
    <>
      {authStore.user ? (
        <Icon
          name="person"
          type="Ionicons"
          style={{ marginLeft: "auto" }}
          onPress={() => navigation.navigate("Profile")}
        />
      ) : (
        <Text onPress={() => navigation.navigate("Signin")}>Signin</Text>
      )}
    </>
  );
};

export default observer(ActionBarImage);
