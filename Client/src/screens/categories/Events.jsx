import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { getEventsByCategory } from "../../../api/categories";
import SearchCard from "../../components/Search/SearchCard";
import { styles } from "../../styles/categories/categoriesStyle";
import { FlatList } from "react-native";

function Events({ route, navigation }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const eventsByCategory = getEventsByCategory(route.params.title);
    setEvents(eventsByCategory);
  }, []);
  return (
    <View style={styles.categoryContainer}>
      <FlatList
        data={events}
        renderItem={({ item }) => (
          <SearchCard
            title={item.FirstName}
            image={item.littleposter}
            date={item.EventStartDate}
            location={item.EventCenter}
            onPress={() => navigation.navigate("EventDetail", { id: item.Id })}
          />
        )}
        keyExtractor={(item) => item.Id}
        scrollEnabled={true}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default Events;
