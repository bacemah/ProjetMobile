import React from 'react';
import { View} from 'react-native';
import FormComponent from '../components/FormComponent';
import ButtonComponent from '../components/ButtonComponent';
import registerScreenStyles from '../styles/screens/RegisterScreenStyles' ;
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../app.constants';



function LoginScreen() {
    const navigation = useNavigation();
    const navigatelanding = () => {navigation.navigate('Landing')}
    return (
        <View style={styles.container}>
            <FormComponent type="login" />
            <View style={styles.ButtonContainer}>
                <ButtonComponent  title={"Retour"} color={Colors.facebook} backgroundColor={Colors.light} onPress={navigatelanding}/>
            </View>
        </View>
    );
}
const styles = registerScreenStyles;
export default LoginScreen;