import {
  BottomStyling,
  ButtonStyled,
  HomeBackground,
  OverLayContainer,
  Title,
  TopStyling,
} from "../styles";

import React from "react";
import bgimage from "../onroad.jpg";
import { observer } from "mobx-react";
import authStore from "../stores/authStore";
// Styling

const Home = ({ navigation }) => {
  const onClickNext = () => {
    authStore.user
      ? navigation.navigate("TripList")
      : navigation.navigate("Signin");
  };
  return (
    <HomeBackground source={bgimage}>
      <OverLayContainer>
        <TopStyling>
          <Title> Explore Trips</Title>
        </TopStyling>
        <BottomStyling>
          <ButtonStyled onPress={() => onClickNext()}>
            Click here to start
          </ButtonStyled>
        </BottomStyling>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default observer(Home);
