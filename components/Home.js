import React from "react";
import bgimage from "../onroad.jpg";

// Styling
import {
  BottomStyling,
  ButtonStyled,
  HomeBackground,
  OverLayContainer,
  Title,
  TopStyling,
} from "../styles";

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
              navigation.navigate("Signin");
            }}
          >
            Click here to skip
          </ButtonStyled>
        </BottomStyling>
      </OverLayContainer>
    </HomeBackground>
  );
};

export default Home;
