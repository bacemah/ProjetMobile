import React, {useState } from 'react';
import { View, Text} from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import landingScreenStyles from '../styles/screens/LandingScreenStyles';
import { Colors } from '../../app.constants';


function LandingScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.welcome}>
                    {'Bienvenu(e)  à  :'}
                </Text>
                <Text style={[styles.welcome, styles.brand]}>
                    GROUP UP
                </Text>
            </View>
            <ButtonComponent backgroundColor={Colors.light} color={Colors.facebook} title="Se Connecter" onPress={() => navigation.navigate('Login')} />
            <ButtonComponent backgroundColor={Colors.light} color={Colors.facebook} title="S'inscrire" onPress={() => navigation.navigate('Register')} />
            <Text style={{ color: Colors.light }}>Ou</Text>
            <View style={styles.containerFac}>
                <ButtonComponent backgroundColor={Colors.google} color={Colors.light} title="Continuer avec Google " />
                <ButtonComponent backgroundColor={Colors.facebook} color={Colors.light}title="Continuer avec Facebook "  />
            </View>

        </View>
    );
}

const styles = landingScreenStyles;

export default LandingScreen;