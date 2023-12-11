import React from 'react';
import { View } from 'react-native';
import FormComponent from '../components/FormComponent';
import registerScreenStyles from '../styles/screens/RegisterScreenStyles';
import ButtonComponent from '../components/ButtonComponent';
import { Colors } from '../../app.constants';
import { useNavigation } from '@react-navigation/native';


function RegisterScreen() {
    const navigation = useNavigation()
    const navigatelanding = () => {navigation.navigate('Landing')}
    return (
        <View style={styles.container}>
            <FormComponent type="register" />
            <View style={styles.ButtonContainer}>
                <ButtonComponent  title={"Retour"} color={Colors.facebook} backgroundColor={Colors.light} onPress={navigatelanding}/>
            </View>
        </View>
    );
}

const styles = registerScreenStyles;

export default RegisterScreen;
