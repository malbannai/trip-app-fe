import React from "react";
import authStore from "../stores/authStore";
import { useNavigation } from "@react-navigation/native";
import { UserIcon } from "../styles";
import { observer } from "mobx-react";
import { Alert } from "react-native";

const ActionBarImage = () => {
  const navigation = useNavigation();
  const alertUser = () => {
    Alert.alert(
      "Signin",
      "You need to signin before looking at your profile",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Signin", onPress: () => navigation.navigate("Signin") },
      ],
      { cancelable: false }
    );
  };

  const handleUser = () => {
    authStore.user.id === 0
      ? navigation.navigate("GuestUserProfile")
      : navigation.navigate("Profile", { profileOwner: authStore.user });
  };
  return (
    <>
      {authStore.user.id >= 0 ? (
        <UserIcon name="person" type="Ionicons" onPress={() => handleUser()} />
      ) : null}
    </>
  );
};

export default observer(ActionBarImage);
