import React, { useState, useEffect } from 'react';
import { SafeAreaView, TextInput, TouchableOpacity, Text, View, ActivityIndicator} from 'react-native';
import { RadioButton } from 'react-native-paper';
import formComponentStyles from '../styles/components/FormComponentStyles'
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../../app.constants';

const FormComponent = (props) => {
    const { type } = props;
    const navigation = useNavigation();
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [password, setPassword] = useState('');
    const [confirm_password, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [nomTouched, setNomTouched] = useState(false);
    const [prenomTouched, setPrenomTouched] = useState(false);
    const [passwordTouched, setPasswordTouched] = useState(false);
    const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);
    const [verification, setVerification] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [forgotPassword, setForgotPassword] = useState(false)
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [checked , setChecked] = useState('')

    const handleNomChange = (text) => {
        setNom(text);
        setNomTouched(true);
    }

    const handlePrenomChange = (text) => {
        setPrenom(text);
        setPrenomTouched(true);
    }

    const handlePasswordChange = (text) => {
        setPassword(text);
        setPasswordTouched(true);
    }

    const handleForgotPassword = () => {
        setForgotPassword(true);
    }

    const handleConfirmPasswordChange = (text) => {
        setConfirmPassword(text);
        if (confirm_password == password && password.trim().length > 0) {
            setConfirmPasswordTouched(true);
        }
    }

    const handleEmailChange = (text) => {
        setEmail(text);
        setEmailTouched(true);
    }
    const handleSubmit = async () => {
        if (type === 'login') await navigation.navigate('Home');
        if (type === 'register') await register();
    }

    const validateEmail = () => {
        const emailStructur =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/  // bacem@supcom.tn
        return emailStructur.test(email);
    }

    const isFormValid = () => {
        if (type === 'login') return password.trim().length > 0 && emailTouched && validateEmail();
        if (type === 'register') return nom.trim().length > 0 && prenom.trim().length > 0 && emailTouched && validateEmail() && password == confirm_password && password.trim().length > 0 && checked.length > 0 ;

    }
    const radioAdminHander = ()=>{
        setChecked("Admin")
    }
    const radioUserHandler = ()=>{
        setChecked('User')
    }

    const styles = formComponentStyles;

    return (
        <SafeAreaView style={styles.area}>
            {type == 'register' && (
                <>
                    <TextInput
                        style={[styles.input, nomTouched && nom.trim().length === 0 && styles.invalidInput]}
                        placeholderTextColor={Colors.secondary}
                        placeholder="Nom"
                        value={nom}
                        onChangeText={handleNomChange} />
                    <TextInput
                        style={[styles.input, prenomTouched && prenom.trim().length === 0 && styles.invalidInput]}
                        placeholderTextColor={Colors.secondary}
                        placeholder="Prénom"
                        value={prenom}
                        onChangeText={handlePrenomChange} />
                    <TextInput
                        style={[styles.input, emailTouched && !validateEmail() && styles.invalidInput]}
                        placeholderTextColor={Colors.secondary}
                        placeholder="Email"
                        value={email}
                        onChangeText={handleEmailChange}
                        keyboardType="email-address" />
                    <TextInput
                        style={[styles.input, passwordTouched && password.trim().length === 0 && styles.invalidInput]}
                        placeholderTextColor={Colors.secondary}
                        placeholder="Mot de passe"
                        value={password}
                        onChangeText={handlePasswordChange}
                        secureTextEntry={true}
                        textContentType={'password'} />
                    <TextInput
                        style={[styles.input, confirmPasswordTouched && confirm_password.trim().length === 0 && styles.invalidInput]}
                        placeholderTextColor={Colors.secondary}
                        placeholder="Confirmer Mot de passe"
                        value={confirm_password}
                        onChangeText={handleConfirmPasswordChange}
                        secureTextEntry={true}
                        textContentType={'password'} />
                    <View style={styles.checkBoxContainer}>
                        <View style={styles.radiBoxContainer}>
                            <RadioButton 
                            value='Admin'
                            color={Colors.light}
                            onPress={radioAdminHander}
                            status={ checked === 'Admin' ? 'checked' : 'unchecked'  }

                        />
                            <Text style={styles.radioText}> Admin </Text>
                        </View>
                        <View style={styles.radiBoxContainer}>
                             <RadioButton 
                                value='User'
                                color={Colors.light}
                                onPress={radioUserHandler}
                                status={checked === 'User' ? 'checked' : 'unchecked'}
                            />  
                            <Text style={styles.radioText}> User </Text>
                        </View>
                        
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.button }
                            disabled={!isFormValid()}
                            onPress={handleSubmit}>
                            {isLoading ? (
                                <ActivityIndicator color={Colors.light} />
                            ) : (
                                <Text style={styles.buttonText}>S'inscrire</Text>
                            )}
                        </TouchableOpacity> 
                    </View>
                </>
            )
            }
            {type == 'login' && (
                <>
                    {(forgotPassword == false) && (
                        <View>
                            <View style={[styles.error, { 'display': !error ? 'none' : 'flex' }]}>
                                <Text style={[styles.errorText, { fontSize: 12 }]}>{error}</Text>
                            </View>
                            <View style={[styles.success, { 'display': !success ? 'none' : 'flex' }]}>
                                <Text style={[styles.errorText, { fontSize: 12, color: Colors.success }]}>{success}</Text>
                            </View>
                            <TextInput
                                style={[styles.input, emailTouched && !validateEmail() && styles.invalidInput]}
                                placeholderTextColor={Colors.secondary}
                                placeholder="Email"
                                value={email}
                                onChangeText={handleEmailChange}
                                keyboardType="email-address" />
                            <TextInput
                                style={[styles.input, passwordTouched && password.trim().length === 0 && styles.invalidInput]}
                                placeholderTextColor={Colors.secondary}
                                placeholder="Password"
                                value={password}
                                onChangeText={handlePasswordChange}
                                secureTextEntry={true}
                                textContentType={'password'} />
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    style={styles.button}
                                    disabled={isFormValid()}
                                    onPress={handleSubmit}>
                                    {isLoading ? (
                                        <ActivityIndicator color={Colors.light} />
                                    ) : (
                                        <Text style={styles.buttonText}>Se connecter</Text>
                                    )}
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={[styles.button, { borderWidth: 0 }]}
                                    onPress={handleForgotPassword}>
                                    <Text style={styles.buttonText}>Mot de passe oublié ?</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}

                    {(forgotPassword == true) && (
                        <View>
                            <View style={[styles.error, { 'display': !error ? 'none' : 'flex' }]}>
                                <Text style={[styles.errorText, { fontSize: 12 }]}>{error}</Text>
                            </View>
                            <View style={[styles.success, { 'display': !success ? 'none' : 'flex' }]}>
                                <Text style={[styles.errorText, { fontSize: 12, color: Colors.success }]}>{success}</Text>
                            </View>
                            <Text style={[styles.buttonText, { TextAlign: 'end' }]}>Inserer votre adresse mail </Text>
                            <TextInput
                                style={[styles.input, emailTouched && !validateEmail() && styles.invalidInput]}
                                placeholderTextColor={Colors.secondary}
                                placeholder="Email"
                                value={email}
                                onChangeText={handleEmailChange}
                                keyboardType="email-address" />
                            <TouchableOpacity
                                style={[styles.button,]}
                                onPress={sendForgotPassword}>
                                {isLoading ? (
                                    <ActivityIndicator color={Colors.light} />
                                ) : (
                                    <Text style={styles.buttonText}>Envoyer</Text>
                                )}
                            </TouchableOpacity>
                        </View>
                    )}

                </>
            )}
        </SafeAreaView >
    );
}

export default FormComponent;
