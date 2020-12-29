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
import authStore from "../stores/authStore";

const Home = ({ navigation }) => {
  const onClickNext = () => {
    authStore.user.id >= 0
      ? navigation.navigate("TripList")
      : alert("You are not passing home");
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

export default Home;
