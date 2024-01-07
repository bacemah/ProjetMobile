import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import headerComponentStyles from '../styles/components/HeaderComponentStyles';

const Header = (props) => {
    const {title } = props;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>{title}</Text> 
            </View>
        );

    }

const styles = headerComponentStyles;

export default Header;
