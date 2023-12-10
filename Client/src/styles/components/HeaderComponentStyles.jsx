import { StyleSheet } from "react-native";
import { Colors } from "../../../app.constants";

const HeaderComponentStyles = StyleSheet.create({
        container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: 70,
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        color: Colors.light,
    },
});

export default HeaderComponentStyles;