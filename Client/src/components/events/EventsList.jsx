import React, { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../styles/screens/styles";
import Card from "./Card";

const EventsList = ({ data, title, navigation }) => {
  const st = styles;
  return (
    <View>
      {data.length > 0 ? (
        <>
          <View style={st.eventListHeader}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: "bold",
                color : "white"
              }}
            >
              {title}
            </Text>
            <TouchableOpacity>
              <Text style={{
                color : 'white'
              }}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={st.cards}>
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <Card
                  key={item.Id}
                  title={
                    item.FirstName.length > 20
                      ? item.FirstName.slice(0, 20) + "..."
                      : item.FirstName
                  }
                  location={
                    item.EventCenter.length > 20
                      ? item?.EventCenter.slice(0, 20) + "..."
                      : item?.EventCenter
                  }
                  date={item.EventStartDate.toString().split("T")[0]}
                  price={item.Isitfree}
                  id={item.Id}
                  eventImage={item.littleposter}
                  navigation={navigation}
                />
              )}
              keyExtractor={(item) => item.Id.toString() || index.toString()}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </>
      ) : (
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            {title}
          </Text>
          <Text>No Events</Text>
        </View>
      )}
    </View>
  );
};

export default EventsList;
