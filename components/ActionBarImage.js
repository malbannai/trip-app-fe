import React from "react";
import authStore from "../stores/authStore";
import { useNavigation } from "@react-navigation/native";
import { UserIcon } from "../styles";

const ActionBarImage = () => {
  const navigation = useNavigation();
  return (
    <>
      {authStore.user ? (
        <UserIcon
          name="person"
          type="Ionicons"
          onPress={() => navigation.navigate("Profile")}
        />
      ) : (
        navigation.navigate("Signin")
      )}
    </>
  );
};

export default ActionBarImage;
