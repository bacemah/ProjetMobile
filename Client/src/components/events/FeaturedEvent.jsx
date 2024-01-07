import React from "react";
import { Image, Text, View } from "react-native";
import { styles} from "../../styles/screens/styles";

function FeaturedEvent({ data }) {
  const { Adi, KucukAfis, EtkinlikBaslamaTarihi } = data;
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
            KucukAfis
              ? { uri: KucukAfis }
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
            {Adi != "" ? Adi : "Music of the Spheres"}
          </Text>
          <Text style={st.texts}>
            Event Date:{" "}
            {EtkinlikBaslamaTarihi != ""
              ? EtkinlikBaslamaTarihi.split("T")[0]
                  .split("-")
                  .reverse()
                  .join(" ")
              : "2021-08-20"}
          </Text>
          <Text style={st.texts}>
            Event Time:{" "}
            {EtkinlikBaslamaTarihi != ""
              ? EtkinlikBaslamaTarihi.split("T")[1].split(":")[0] +
                ":" +
                EtkinlikBaslamaTarihi.split("T")[1].split(":")[1]
              : "20:00"}{" "}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default FeaturedEvent;
