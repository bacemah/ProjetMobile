import React, { useEffect, useState } from "react";
import { Dimensions, Image, SafeAreaView, Text, View } from "react-native";
import { getEventById } from "../../../api/categories";
import { FontAwesome } from "@expo/vector-icons";
import { styles } from "./EventDetailCss";
import MapView, { Marker } from "react-native-maps";
import { ScrollView } from "react-native-gesture-handler";

function EventDetail({ route }) {
  const [event, setEvent] = useState({});
  const [location, setLocation] = useState({});

  useEffect(() => {
    const data = async () => {
      const { id } = route.params;
      const event = await getEventById(id);
      setEvent(event);
      if (event?.EventCenterLocation) {
        setLocation(
          event.EventCenterLocation
            ? event.EventCenterLocation
            : ["41.015137", "28.979530"]
        );
      } else {
        setLocation(["41.015137", "28.979530"]);
      }
    };
    data();
  }, []);
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ width: "100%" }}>
          <View style={styles.imageContainer}>
            <Image source={{ uri: `${event.littleposter}` }} style={styles.img} />
            <View style={styles.cardInImage}>
              <View style={styles.cardInCardInImage}>
                <Text
                  style={{
                    fontSize: 17,
                    fontWeight: "bold",
                  }}
                >
                  {event.FirstName}
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 10,
                    marginTop: 5,
                  }}
                >
                  <FontAwesome name="map-marker" size={15} color="black" />
                  <Text>{event.EventCenter}</Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 10,
                    marginTop: 5,
                  }}
                >
                  <FontAwesome name="calendar" size={15} color="black" />
                  <Text>
                    {event.EventStartDate &&
                      event.EventStartDate.toString().split("T")[0] +
                        " " +
                        event.EventStartDate.toString()
                          .split("T")[1]
                          .slice(0, 5)}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    gap: 10,
                    marginTop: 5,
                  }}
                >
                  {event.Isitfree && (
                    <>
                      <FontAwesome name="money" size={15} color="black" />
                      <Text style={{ fontWeight: "bold" }}>
                        {event.Isitfree && "Ücretsiz"}
                      </Text>
                    </>
                  )}
                </View>
              </View>
            </View>
          </View>

          <View>
            <Text
              style={{
                fontSize: 19,
                fontWeight: "bold",
                marginTop: 20,
                marginLeft: 20,
              }}
            >
              Event's Details
            </Text>
            <Text
              style={{
                fontSize: 15,
                marginTop: 10,
                marginLeft: 20,
                marginRight: 20,
                fontStyle: "italic",
              }}
            >
              {event.ShortDescription}
            </Text>
            {event.Artist && (
              <>
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: "bold",
                    marginTop: 20,
                    marginHorizontal: 20,
                  }}
                >
                  Etkinlik Sanatçısı
                </Text>
                <Text
                  style={{
                    fontSize: 15,
                    marginTop: 10,
                    marginLeft: 20,
                    marginRight: 20,
                  }}
                >
                  {event?.Artist}
                </Text>
              </>
            )}
          </View>

          <View
            style={{
              marginVertical: 60,
              marginBottom: 100,
              alignItems: "center",
              borderRadius: 50,
              overflow: "hidden",
              shadowColor: "black",
              shadowOffset: {
                width: 10,
                height: 2,
              },
              shadowOpacity: 0.7,
              shadowRadius: 3.84,
              elevation: 5,
            }}
          >
            {event.EventCenterLocation ? (
              <MapView
                style={{
                  width: Dimensions.get("window").width,
                  height: 200,
                  borderRadius: 20,
                }}
                region={
                  location && {
                    latitude: parseFloat(location["Latitude"]),
                    longitude: parseFloat(location["longitudel"]),
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }
                }
                zoomEnabled={true}
                zoomControlEnabled={true}
                minZoomLevel={10}
                maxZoomLevel={20}
              >
                <Marker
                  coordinate={
                    location && {
                      latitude: parseFloat(location["Latitude"]),
                      longitude: parseFloat(location["longitudel"]),
                    }
                  }
                  title="Marker"
                />
              </MapView>
            ) : (
              <MapView
                style={{
                  width: Dimensions.get("window").width,
                  height: 200,
                  borderRadius: 20,
                }}
                region={
                  location && {
                    latitude: 19.058776,
                    longitude: 72.8856,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }
                }
                zoomEnabled={true}
                zoomControlEnabled={true}
                minZoomLevel={10}
                maxZoomLevel={20}
              >
                <Marker
                  coordinate={
                    location && {
                      latitude: 19.058776,
                      longitude: 72.8856,
                    }
                  }
                  title="Marker"
                />
              </MapView>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default EventDetail;
