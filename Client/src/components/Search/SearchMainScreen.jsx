import React, { useState, useEffect } from "react";
import { FlatList, TouchableOpacity, Modal } from "react-native";
import { SafeAreaView, Text, TextInput, View } from "react-native";

import { styles } from "../../styles/search/searchStyle";
import { FontAwesome } from "@expo/vector-icons";
import { Colors } from "../../../app.constants";

import SearchCard from "./SearchCard";

// import Modal from "react-native-modal";

import CalendarPicker from "react-native-calendar-picker";
import { getAllEvent } from "../../../api/categories";

function SearchMainScreen({ navigation }) {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedStartDate, setSelectedStartDate] = useState("YYYY-MM-DD");
  const [selectedEndDate, setSelectedEndDate] = useState("YYYY-MM-DD");
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [lastResultsEvents, setLastResultsEvents] = useState([]);

  const showFilterModal = () => {
    setIsOpen(true);
  };

  const minDate = new Date();
  const maxDate = new Date(2024, 12, 31);

  const onDateChange = (date, type) => {
    const newDate = JSON.stringify(date);
    const newDate2 = newDate.substring(1, newDate.length - 1);
    const dates = newDate2.split("T");
    const date1 = dates[0];

    if (type === "END_DATE") {
      if (date1 == undefined) {
        setSelectedEndDate("YYYY-MM-DD");
      } else {
        setSelectedEndDate(date1);
      }
    } else {
      setSelectedStartDate(date1);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await getAllEvent();
      setEvents(data);
    };
    fetchData();
  }, []);

  const handler = () => {setIsOpen(false)}
    
  useEffect(() => {
    if (selectedStartDate === "YYYY-MM-DD")
      return  ; 

    if (selectedEndDate === "YYYY-MM-DD") {
      const filteredWithStartDateEvents = events.filter((event) => {

        if (event.EventStartDate === undefined)
          return false  ;

        const date = event.EventStartDate.split("T")[0];

        return date >= selectedStartDate;
      });

      setFilteredEvents(filteredWithStartDateEvents);
      console.log(filteredEvents)
    }
    const filteredWithDateEvents = events.filter((event) => {
      if (event.EventStartDate === undefined) return false;

      const date = event.EventStartDate.split("T")[0];
      return date >= selectedStartDate && date <= selectedEndDate;

    });
    setFilteredEvents(filteredWithDateEvents);
    setLastResultsEvents(filteredWithDateEvents, ...searchResults);
  }, [selectedStartDate, selectedEndDate]);
  

  const handleSearch = (text) => {
    setSearchText(text);
    if (selectedStartDate == "YYYY-MM-DD") {
      const filtredWithText = events.filter((event) => {
        return event.FirstName.toLowerCase().includes(text.toLowerCase());
      });
      setSearchResults(filtredWithText);
      setLastResultsEvents(filtredWithText, ...filtredWithText);
    } else {
      const filteredEventsWithDateAndText = filteredEvents.filter((event) => {
        return event.FirstName.toLowerCase().includes(text.toLowerCase());
      });
      setSearchResults(filteredEventsWithDateAndText);
      setLastResultsEvents(filteredEventsWithDateAndText, ...filteredEvents);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.searchHeader}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
          }}
        >
          Search
        </Text>
      </View>
      <View style={styles.searchbarContainer}>
        <FontAwesome name="search" size={18} color="grey" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search Events"
          placeholderTextColor="grey"
          onChangeText={handleSearch}
          value={searchText}
        />
        <TouchableOpacity onPress={showFilterModal}>
          <FontAwesome name="calendar" size={18} color="grey" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchBody}>
        <FlatList
          data={searchResults.length > 0 || filteredEvents.length >  0 ? searchResults : events }
          renderItem={({ item }) => (
            <SearchCard
              title={item.FirstName}
              date={item.EventStartDate}
              location={item.EventCenter}
              image={item.littleposter}
              onPress={() => {
                navigation.navigate("EventDetail", {
                  title: item.FirstName,
                  id: item.Id,
                });
              }}
            />
          )}
          keyExtractor={(item) => item.Id.toString() || index.toString()}
        />
      </View>
       <Modal
        visible={isOpen}
        onRequestClose={handler}
          style={{
            justifyContent: "flex-end",
            margin: 0,
          }}
        >
          <View style={{
              backgroundColor: "white",
              borderRadius: 10,
              alignItems: "center",
              height: 400,
            }}
          >
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  marginTop: 20,
                  marginBottom: 20,
                }}
              >
                  Filter Your Search
              </Text>

              <View
                style={{
                  width: "100%",
                }}
              >
                <CalendarPicker
                  startFromMonday={true}
                  allowRangeSelection={true}
                  minDate={minDate}
                  maxDate={maxDate}
                  todayBackgroundColor="#f2e6ff"
                  selectedDayColor="#7300e6"
                  selectedDayTextColor="#FFFFFF"
                  onDateChange={onDateChange}
                  weekdays={["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Satur"]}
                  months={[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                  ]}
                  previousTitle="Previous"
                  nextTitle="Next"
                  width={350}
                />
              </View>
               <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity  style={styles.button} onPress={handler}>
                                <Text style={{ color: Colors.light, textAlign: 'center' }}>Accept Date</Text>
                            </TouchableOpacity>
                </View> 

          
          </View>
        </Modal>

    </SafeAreaView>
  );
}

export default SearchMainScreen;
