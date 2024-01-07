import React, {  useState } from 'react';
import { View} from 'react-native';
import TaskList from '../components/TaskListComponent';
import Header from '../components/HeaderComponent';
import Footer from '../components/FooterComponent';
import homeScreenStyles from '../styles/screens/HomeScreenStyles';



function HomeScreen({ navigation }) {
    const [Button, setButton] = useState('Home');
    const styles = homeScreenStyles


    return (
                <View style={styles.container}>
                    <Header isHome={true} title='Hello User' />
                    <TaskList />
                    <Footer />
                </View>
                )
                
}
export default HomeScreen;
