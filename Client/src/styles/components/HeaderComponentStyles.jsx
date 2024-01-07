import { StyleSheet } from "react-native";
import { Colors } from "../../../app.constants";

const HeaderComponentStyles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection : 'row' ,
        justifyContent: 'center',
        alignItems : "center",
        height: 120,
        paddingTop : 30 , 

    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: Colors.light,
    },
});

export default HeaderComponentStyles;