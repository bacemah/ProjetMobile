import { StyleSheet } from "react-native";
import { Colors } from "../../../app.constants";

const landingScreenStyles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight : '200' ,
        color: Colors.light,
    },
    brand: {
        fontSize: 50,
        fontWeight: '300',
        marginBottom: 40,
    },
    button: {
        paddingVertical: 12,
        marginTop: 25,
        width: '75%',
        borderRadius: 20,
    },
    buttonText: {
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 1,
        textAlign: 'center',
        color: Colors.light,
    },
    containerFac : {
        width:  '100%' , 
        display : 'flex' ,
        flexDirection : 'column' , 
        alignItems : 'center' , 
        justifyContent : 'center',
        marginTop : 20 ,
    }
});

export default landingScreenStyles;