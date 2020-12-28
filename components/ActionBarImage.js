import React from "react";
import authStore from "../stores/authStore";
import { useNavigation } from "@react-navigation/native";
import { UserIcon } from "../styles";
import { observer } from "mobx-react";

const ActionBarImage = () => {
  const navigation = useNavigation();
  return (
    <>
      {authStore.user ? (
        <UserIcon
          name="person"
          type="Ionicons"
          onPress={() =>
            navigation.navigate("Profile", { profileOwner: authStore.user })
          }
        />
      ) : (
        navigation.navigate("Signin")
      )}
    </>
  );
};

export default observer(ActionBarImage);
