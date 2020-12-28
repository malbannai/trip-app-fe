import { Body, Card, Left } from "native-base";
import { TouchableOpacity, Alert ,Image} from "react-native";
import React from "react";
import { observer } from "mobx-react";
import authStore from "../stores/authStore";
import tripStore from "../stores/tripStore";

import usersStore from "../stores/usersStore";
import ip from "../stores/ipaddress";
import {
  TripTitle,
  TripCardItem,
  IconWrapper,
  RefreshIcon,
  TrashIcon,
  TripItemImage,
} from "../styles";
const TripItem = ({ trip, navigation }) => {
  const owner = usersStore.users.find((user) => user.id === trip.userId);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("TripDetail", { trip: trip })}
    >
      <Card>
        <TripCardItem>
          <Left>
            <Body>
// showOnwerOfTrip
//               <Text
//                 note
//                 onPress={() =>
//                   navigation.navigate("Profile", { profileOwner: owner })
//                 }
//               >
//                 By {owner.username}
//               </Text>
//             </Body>
//           </Left>
//         </CardItem>
//         <CardItem cardBody>
//           <Image
//             source={{ uri: trip.image.replace("localhost", ip) }}
//             style={{ height: 200, width: null, flex: 1 }}
//           />
//         </CardItem>
//         <CardItem>
//           {/* <Left>
//           <Button transparent>
//             <Icon active name="thumbs-up" />
//             <Text>12 Likes</Text>
//           </Button>
//         </Left>
//         <Body>
//           <Button transparent>
//             <Icon active name="chatbubbles" />
//             <Text>4 Comments</Text>
//           </Button>
//         </Body>
//         <Right>
//           <Text>11h ago</Text>
//         </Right> */}
//         </CardItem>
//         <CardItem>
//           <Right>
//             <Icon
//               name="trash"
//               type="Ionicons"
//               onPress={() => tripStore.removeTrip(trip.id)}
///
              <TripTitle>{trip.title}</TripTitle>
            </Body>
          </Left>
          {trip.image ? (
            <TripItemImage
              source={{
                uri: trip.image.replace("localhost", "192.168.8.100"),
              }}
// main
            />
          ) : null}
        </TripCardItem>
        <IconWrapper>
          {authStore.user.id === trip.userId ? (
            <>
              <RefreshIcon
                active
                name="refresh"
                onPress={() =>
                  navigation.navigate("TripUpdate", { trip: trip })
                }
              />
              <TrashIcon
                name="trash"
                type="Ionicons"
                onPress={() => tripStore.removeTrip(trip.id)}
              />
            </>
          ) : null}
          {authStore.user
            ? null
            : Alert.alert(
                "Signin",
                "You need to sign in before completing your order",
                [
                  {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                  },
                  {
                    text: "Signin",
                    onPress: () => navigation.navigate("Signin"),
                  },
                ],
                { cancelable: false }
              )}
        </IconWrapper>
      </Card>
    </TouchableOpacity>
  );
};

export default observer(TripItem);
