import React, {  useEffect, useState } from 'react';
import { View} from 'react-native';
import TaskList from '../components/TaskListComponent';
import Header from '../components/HeaderComponent';
import Footer from '../components/FooterComponent';
import homeScreenStyles from '../styles/screens/HomeScreenStyles';
import { createStackNavigator } from '@react-navigation/stack';
import EventDetail from './EventDetail/EventDetail';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Colors } from '../../app.constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();
function HomeScreen({ navigation }) {
    const [Button, setButton] = useState('Home');
  const styles = homeScreenStyles;
  const [user , setUser] = useState(null)
  
  
  useEffect(() => {
      const fetchDataFromAsyncStorage = async () => {
              const localUser = await AsyncStorage.getItem('user');
              // console.log(localUser);
              setUser(JSON.parse(localUser));
  };
  fetchDataFromAsyncStorage()
  
  } , [])

    return (
                <View style={styles.container}>
                    <Header isHome={true}  title={`Hello ${user?.first_name}` || 'Loading...'}  />
            {/* <TaskList /> */}
                     <NavigationContainer independent={true} >
                         <Stack.Navigator screenOptions={{  headerShown: false }}>
                    <Stack.Screen name="HomeMainScreen"
                        component={TaskList}
                        options={{ cardStyle: { backgroundColor: Colors.dark }, headerShown: false }}
                    />
       <Stack.Screen
        name="EventsDetail"
        component={EventDetail}
        options={({ route }) => ({
          title: route.params.title,
          headerShown: true,
          headerStyle: {
            backgroundColor: Colors.dark,
            shadowColor: Colors.dark,
            elevation: 0,
          },
          headerTintColor: "#76468F",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        })}
      />
                         </Stack.Navigator>
                    </NavigationContainer>
                    <Footer />
                </View>
                )
                
}
export default HomeScreen;
