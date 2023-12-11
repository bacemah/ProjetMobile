import { StyleSheet } from "react-native";
import { Colors } from "../../../app.constants";

const formComponentStyles = StyleSheet.create({
    area: {
        width: '75%',
    },
    input: {
        height: 40,
        marginVertical: 12,
        borderWidth: 1,
        borderColor: Colors.black,
        backgroundColor: Colors.background,
        borderRadius: 20,
        marginBottom: 20,
        paddingLeft: 20,
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 1,
        color: Colors.white,
    },
    invalidInput: {
        borderColor: "rgba(255,90,102,0.3)",
        backgroundColor: "rgba(255,90,102,0.3)",
    },
    button: {
        marginTop : 40 , 
        paddingVertical: 12,
        borderRadius: 20,
        borderWidth: 1.5,
        borderColor: Colors.light,
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 1,
        textAlign: 'center',
        color: Colors.light,
    },
    error: {
        height: 40,
        marginVertical: 12,
        borderWidth: 1,
        borderColor: Colors.danger,
        backgroundColor: "#dc354533",
        borderRadius: 20,
        marginBottom: 20,
        justifyContent: 'center',
    },
    errorText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 1,
        color: Colors.danger,
        textAlign: 'center',
    },
    success: {
        height: 40,
        marginVertical: 12,
        borderWidth: 1,
        borderColor: Colors.success,
        backgroundColor: "#19875433",
        borderRadius: 20,
        marginBottom: 20,
        justifyContent: 'center',
    },
    checkBoxContainer : {
        display : "flex" ,
        flexDirection : 'row',
        justifyContent : 'space-evenly' ,

    } ,
    radiBoxContainer : {
        display : 'flex',
        flexDirection : "row" ,
        alignItems : 'center' ,

    } ,
    radioText : {
        fontSize : 15 ,
        color : Colors.secondary
    }

});

export default formComponentStyles;