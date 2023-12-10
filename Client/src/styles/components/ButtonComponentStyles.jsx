import { StyleSheet } from "react-native";

const buttonComponentStyles = StyleSheet.create({
    button: {
        marginBottom: 25,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 20,
        borderWidth: 1.75,
        width: '80%',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: '300',
        letterSpacing: 1,
    },
});

export default buttonComponentStyles;