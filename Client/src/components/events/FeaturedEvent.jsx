import React from "react";
import { Image, Text, View } from "react-native";
import { styles} from "../../styles/screens/styles";

function FeaturedEvent({ data }) {
  const { FirstName, littleposter, EventStartDate } = data;
  const st = styles
  return (
    <View style={st.featuredEvent}>
      <View
        style={{
          width: "100%",
          height: 180,
          marginBottom: 40,
        }}
      >
        <Image
          source={
            littleposter
              ? { uri: littleposter }
              : require("../../../assets/featured.png")
          }
          style={{
            width: "100%",
            height: 180,
            borderRadius: 20,
          }}
        />
        <View style={st.eventInfoCard}>
          <Text style={st.textsHeader}>
            {FirstName != "" ? FirstName : "Music of the Spheres"}
          </Text>
          <Text style={st.texts}>
            Event Date:{" "}
            {EventStartDate != ""
              ? EventStartDate.split("T")[0]
                  .split("-")
                  .reverse()
                  .join(" ")
              : "2021-08-20"}
          </Text>
          <Text style={st.texts}>
            Event Time:{" "}
            {EventStartDate != ""
              ? EventStartDate.split("T")[1].split(":")[0] +
                ":" +
                EventStartDate.split("T")[1].split(":")[1]
              : "20:00"}{" "}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default FeaturedEvent;
