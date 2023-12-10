import React, {useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ButtonComponent from '../components/ButtonComponent';
import landingScreenStyles from '../styles/screens/LandingScreenStyles';
import { Colors } from '../../app.constants';


function LandingScreen({ navigation }) {
    const [token, setToken] = useState("");
    const [userInfo, setUserInfo] = useState(null);
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.welcome}>
                    Bienvenu(e) à :
                </Text>
                <Text style={[styles.welcome, styles.brand]}>
                    GROUP UP 
                </Text>
            </View>
            <ButtonComponent backgroundColor={Colors.light} color="black" title="Se Connecter" onPress={() => navigation.navigate('Login')} />
            <ButtonComponent color={Colors.light} title="S'inscrire" onPress={() => navigation.navigate('Register')} />
            <Text style={{ color: Colors.light }}>Ou</Text>
            <View style={{ width: '100%', alignItems: 'center' }} >
                <TouchableOpacity
                    style={[styles.button, { borderWidth: 0, backgroundColor: Colors.google }]}
                >
                    <Text style={[styles.buttonText, { color: 'white', }]}>Continuer avec Google </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.button, { backgroundColor: Colors.facebook }]}
                >
                    <Text style={[styles.buttonText, { color: 'white', }]}>Continuer avec Facebook </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = landingScreenStyles;

export default LandingScreen;