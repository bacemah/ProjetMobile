import { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, ScrollView, Image, TouchableOpacity, ActivityIndicator, SafeAreaView, Modal, ImageBackground, TextInput, Alert, PermissionsAndroid, RefreshControl } from 'react-native';
import EventsList from './events/EventsList'; 
import FeaturedEvent from './events/FeaturedEvent';
import { getAllEvent, getOldEvents } from "../../api/categories";
import { styles } from '../styles/screens/styles';


/* Fetch Api */

function TaskList({ navigation }) {
   const [data, setData] = useState([]);
  const [todayEvent, setTodayEvent] = useState([]);
  const [featuredEvent, setFeaturedEvent] = useState([]);
  const [loading, setLoading] = useState(true);
  const [oldEvents, setOldEvents] = useState([]);
  const [randomNumber, setRandomNumber] = useState(0);

  const weekendEventGet = async () => {
    setTodayEvent([]);
    if (data.length === 0) return;
    const today = new Date();
    const willComeEvents = await data.filter((item) => {
      const eventDate = new Date(item.EventStartDate);
      return eventDate > today;
    });
    const thisWeekEvents = willComeEvents.filter((item) => {
      const eventDate = new Date(item.EventStartDate);
      const diffTime = eventDate.getTime() - today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays <= 7;
    });
    setTodayEvent(thisWeekEvents);
  };

  const getFeaturedEvent = async () => {
    setFeaturedEvent([]);
    if (data.length === 0) return;
    const today = new Date();
    const willComeEvents = await data.filter((item) => {
      const eventDate = new Date(item.EventStartDate);
      return eventDate > today;
    });
    const featuredEventData = await willComeEvents.filter((item) => {
      const eventDate = new Date(item.EventStartDate);
      const diffTime = eventDate.getTime() > today.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays >= 0 && diffDays <= 30;
    });
    let randomFeaturedEvents = [];

    for (let i = 0; i < 10; i++) {
      let randomNumber = Math.floor(Math.random() * featuredEventData.length);
      for (let j = 0; j <= randomFeaturedEvents.length; j++) {
        if (featuredEventData[randomNumber] === randomFeaturedEvents[j]) {
          randomNumber = Math.floor(Math.random() * featuredEventData.length);
        }
      }
      randomFeaturedEvents.push(featuredEventData[randomNumber]);
    }

    setFeaturedEvent(randomFeaturedEvents);
  };
  const fetchData = async () => {
    const allData = await getAllEvent();
    await setData(allData);
  };

  useEffect(() => {
    fetchData();
    weekendEventGet();
    getFeaturedEvent();
  }, []);

  useEffect(() => {
    weekendEventGet();
    getFeaturedEvent();
    const oldEvents = getOldEvents();
    setOldEvents(oldEvents);
  }, [data]);

  useEffect(() => {
    if (todayEvent.length > 0 && featuredEvent.length > 0) {
      setLoading(false);
    }
  }, [todayEvent, featuredEvent]);
  const st = styles;

  return (
    <SafeAreaView style={st.container}>
      {loading ? (
        <View
          style={{
            flex: 1,
            alignItems: "center",
            top: "40%",
          }}
        >
          <View>
            <ActivityIndicator size="large" color="#76468F" />
          </View>
        </View>
      ) : (
        <View>
          <ScrollView>
            <View style={st.firstView}>
              <FeaturedEvent data={featuredEvent[0]} />
            </View>
            <View style={st.secondView}>
              <EventsList
                title={"This Week's Events"}
                data={todayEvent}
                navigation={navigation}
              />
              <EventsList
                title={"Featured Events"}
                data={featuredEvent}
                navigation={navigation}
              />
              <EventsList
                title={"Past Events"}
                data={oldEvents}
                navigation={navigation}
              />
            </View>
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
  


}


export default TaskList;
