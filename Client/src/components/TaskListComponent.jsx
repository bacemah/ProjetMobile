import React, { useEffect, useRef, useState } from 'react';
import { View, Text, FlatList, ScrollView, Image, TouchableOpacity, ActivityIndicator, SafeAreaView, Modal, ImageBackground, TextInput, Alert, PermissionsAndroid, RefreshControl } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import taskListComponentStyles from '../styles/components/TaskListComponentStyles';
import { Colors } from '../../app.constants' ;
import styleloader from '../styles/screens/TaskListStyles';

const TaskList = (props) => {
    const [refreshing, setRefreshing] = useState(false);
    const [notificationsModalVisible, setNotificationsModalVisible] = useState(false);
    const [selectedCardGroup, setSelectedCardGroup] = useState('');
    const [selectedCard, setSelectedCard] = useState('');
    const [loader, setLoader] = useState(false);
    const stLoader = styleloader;
    const styles = taskListComponentStyles;
    let content;
    if (!loader) {
        content =
            <View style={stLoader.lottie}>
                <ActivityIndicator color={Colors.light} size="large" />
            </View>
    }

    return (
        <>
            {content}
        </>
    );
};


export default TaskList;
