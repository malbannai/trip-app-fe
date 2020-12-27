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
import tripStore from "../stores/tripStore";

// Styling

const Home = ({ navigation }) => {
  return (
    <HomeBackground source={bgimage}>
      <OverLayContainer>
        <TopStyling>
          <Title> Explore Trips</Title>
        </TopStyling>
        <BottomStyling>
          <ButtonStyled
            onPress={() => {
              navigation.navigate("TripList");
            }}
          >
            Click here to skip
          </ButtonStyled>
        </BottomStyling>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default observer(Home);
