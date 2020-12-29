import { Card, CardItem, Content, Icon, List } from "native-base";
import styled from "styled-components/native";

export const HomeBackground = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`;

export const TopStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const Title = styled.Text`
  color: white;
 
  font-size: 60px;
 
  text-align: center;
  font-weight: bold;
`;
export const OverLayContainer = styled.View`
  flex: 1;
  background-color: rgba(100, 40, 60, 0.4);
`;
export const BottomStyling = styled.View`
  height: 40%;
  align-items: center;
  justify-content: center;
`;

export const ButtonStyled = styled.Text`
  font-size: 30px;
  color: white;
  font-weight: bold;
`;
export const BakeryItemStyled = styled.Text`
  color: #000;
  font-size: 18px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: -30;
  width: 100%;
`;

export const BakeryDetailWrapper = styled.View`
  margin-top: 50px;
`;

export const BakeryDetailImage = styled.Image`
  width: 150px;
  height: 150px;
`;

export const BakeryDetailTitle = styled.Text`
  font-weight: bold;
  font-size: 40px;
`;
export const TotalPrice = styled.Text`
  color: ${(props) => props.theme.pink};
  font-size: 15px;
  font-weight: bold;
  margin-left: 10px;
`;
export const ImageButtonStyled = styled(Icon)`
  color: black;
  font-size: 100px;
  margin-top: 50px;
  margin-left: 120px;
  height: 100px;
`;
export const CartTextStyled = styled.Text`
  color: ${(props) => props.theme.backgroundColor};
  font-size: 20px;
`;

export const CheckoutButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.pink};
  margin-top: 30px;
`;

export const CheckoutButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;
export const AuthContainer = styled.View`
  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.backgroundColor};
  padding-right: 60px;
  padding-left: 60px;
`;

export const AuthTitle = styled.Text`
  color: ${(props) => props.theme.pink};
  font-size: 24px;
  margin-bottom: 20px;
  border-bottom-color: ${(props) => props.theme.pink};
`;
export const AuthTextInput = styled.TextInput`
  align-self: stretch;
  text-align: left;
  height: 40px;
  margin-bottom: 30px;
  color: ${(props) => props.theme.pink};
  border-bottom-color: ${(props) => props.theme.pink};
  border-bottom-width: 1px;
`;
export const AuthButton = styled.TouchableOpacity`
  align-self: stretch;
  align-items: center;
  padding: 20px;
  background-color: ${(props) => props.theme.pink};
  margin-top: 30px;
`;

export const AuthButtonText = styled.Text`
  color: #fcfdff;
  font-weight: bold;
  font-size: 18px;
`;
export const AuthOther = styled.Text`
  color: gray;
  margin-top: 15px;
`;
EyeButtonStyled;

export const EyeButtonStyled = styled(Icon)`
  color: gray;
  margin-right: 10px;
`;

export const TripTitle = styled.Text`
  color: pink;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`;

export const TripCardItem = styled(CardItem)`
  background: black;
`;
export const TrashIcon = styled(Icon)`
  color: pink;
`;
export const RefreshIcon = styled(Icon)`
  color: pink;
`;

export const IconWrapper = styled(CardItem)`
  background-color: black;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

export const TripItemImage = styled.Image`
  height: 200px;
  width: 200px;
`;
export const TripListBackground = styled(List)`
  background-color: pink;
`;

export const DetailsWrapper = styled(Card)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 10px;
`;

export const TripOwner = styled.Text`
  color: pink;
  text-align: center;
  font-weight: bold;
  font-size: 10px;
`;

export const TripDes = styled.Text`
  color: pink;
  text-align: center;
  font-weight: bold;
  font-size: 20px;
`;

export const UserIcon = styled(Icon)`
  color: pink;
  margin-left: auto;
`;
