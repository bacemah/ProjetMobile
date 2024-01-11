import React, { useEffect , useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Modal, View, Text, TouchableOpacity, Alert, Switch, TextInput, Image, ActivityIndicator, ScrollView, Platform, ImageBackground, Button } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Header from './HeaderComponent';
import accordionCoponentStyles from '../styles/components/AccordionComponentStyles';
import DialogInput from 'react-native-dialog-input';
import SelectMultiple from 'react-native-select-multiple'
import ButtonComponent from './ButtonComponent';
import {GlobalConstants, Colors} from '../../app.constants';
import AddButton from './actions/AddButton'
import GoBackButton from './actions/GoBackButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import EditButton    from './actions/EditButton';
import DeleteButton from './actions/DeleteButton';
import ViewButton from './actions/ViewButton';


const Accordion = ({ title, content, icon, type  }) => { 
    const [dateModalVisible, setDateModalVisible] = useState(false);
    const [editGroupVisible, setEditGroupVisible] = useState(false);
    const [editCardVisible, setEditCardVisible] = useState(false);
    const [editTagVisible, setEditTagVisible] = useState(false);
    const [isEnabled, setIsEnabled] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const [tagButton, setTagButton] = useState('');
    const [groupButton, setGroupButton] = useState('');
    const [cardButton, setCardButton] = useState('');

    const [user, setUser] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [tagName, setTagName] = useState('');
    const [updatedTag, setUpdatedTag] = useState('');
    const [selectedTag, setSelectedTag] = useState('');
    const [tags, setTags] = useState('');

    const [selectedCard, setSelectedCard] = useState('');
    const [cards, setCards] = useState([]);

    const [selectedGroup, setSelectedGroup] = useState('');
    const [groups, setGroups] = useState([]);

    const [groupName, setGroupName] = useState('');
    const [groupDescription, setGroupDescription] = useState('');
    const [groupType, setGroupType] = useState('');
    const [updatedGroupName, setUpdatedGroupName] = useState('');
    const [updatedGroupDescription, setUpdatedGroupDescription] = useState('');
    const [updatedGroupFrequency, setUpdatedGroupFrequency] = useState('');
    const [groupSelectedTags, setGroupSelectedTags] = useState('');
    const [groupSelectedTypes, setGroupSelectedTypes] = useState('');

    const [dialogVisible, setDialogVisible] = React.useState(false);
    const [emailInput, setEmailInput] = React.useState('');

    const [code, setVerificationCode] = useState('0');
    const [groupSearch, setGroupSearch] = useState('');

    const [cardTitle, setCardTitle] = useState('');
    const [cardDescription, setCardDescription] = useState('');
    const [cardDuration, setCardDuration] = useState('');
    const [cardImage, setCardImage] = useState(null);
    const [cardType, setCardType] = useState(1);
    const [updatedCardTitle, setUpdatedCardTitle] = useState('');
    const [updatedCardDescription, setUpdatedCardDescription] = useState('');
    const [updatedCardDuration, setUpdatedCardDuration] = useState('');
    const [updatedCardImage, setUpdatedCardImage] = useState('');
    const [updatedCardType, setUpdatedCardType] = useState('');
    const [cardSelectedTags, setCardSelectedTags] = useState('');
    const [cardTags, setCardTags] = useState('');

    const [groupHobby, setGroupHobby] = useState('');


    const [editUserVisible, setEditUserVisible] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const navigation = useNavigation();
    const apiURL = GlobalConstants.apiURL;
    

    useEffect(() => {
        const fetchDataFromAsyncStorage = async () => {
            try {
                const localUser = await AsyncStorage.getItem('user');
                // console.log(localUser);
                setUser(JSON.parse(localUser));
                if (localUser) {
                const parsedUser = JSON.parse(localUser);
                    setFirstName(parsedUser.first_name);
                    setLastName(parsedUser.last_name);
                    setEmail(parsedUser.email);
                }
            } catch (error) {
                // Handle error
            };
        }
        fetchDataFromAsyncStorage();
    },[]);

    setTimeout(
        () => {
            if (!user) {
                return null
            }
        }
    ,3000)

    const canEdit = ()=>{ return true }

    const toggleAccordion = () => {
        if (content != '') {
            setIsExpanded(!isExpanded);
        }
        if (type == "button") {
            navigation.navigate("Landing");
        }
    };
    const editUser = async () => {
        setIsLoading(true);
        const response = await fetch(`${apiURL}/users/${user.id}/update`, {
            method: "PATCH",
            body: JSON.stringify({ 'first_name': firstName, 'last_name': lastName, 'email': email, 'password': password }),
            headers: { 'Content-Type': 'Application/json' }
        });

        const jsonResponse = await response.json();
        if (jsonResponse.status == '200') {
            setIsLoading(false);
            await AsyncStorage.clear();
            navigation.navigate('Login');
        } else {
            setIsLoading(false);
            alert(jsonResponse.message);
        }
    }


    const closeEditUser = () => {
        setEditUserVisible(false);
    }

    const openEditUser = () => {
        setEditUserVisible(true);
    }
    const openEditGroup = ()=>{
        setEditGroupVisible(true)
    }
    const closeEditGroup = ()=>{
        setEditCardVisible(false)
    }


    const addGroupHandler = ()=> {
        setGroupButton('add')
    }

    const goBackToGroups = ()=>{
        setGroupButton('')
    }
    const goBackToSettings = () => {
    setEditGroupVisible(false)
}


    // USER HANDLERS
    const handleFirstNameChange = (text) => {
        setFirstName(text);
    }

    const handleLastNameChange = (text) => {
        setLastName(text);
    }

    const handleEmailChange = (text) => {
        setEmail(text);
    }

    const handlePasswordChange = (text) => {
        setPassword(text);
    }
    const handleCardTitleChange = (text) => {
        setCardTitle(text);
    }

    const handleCardDescriptionChange = (text) => {
        setCardDescription(text);
    }

    const handleCardDurationChange = (text) => {
        setCardDuration(text);
    }

    const handleCardSelectionTags = (selectedCardTags) => {
        setCardSelectedTags(selectedCardTags);
    }


    const handleUpdatedCardTitleChange = (text) => {
        setUpdatedCardTitle(text);
    }

    const handleUpdatedCardDescriptionChange = (text) => {
        setUpdatedCardDescription(text);
    }

    const handleUpdatedCardDurationChange = (text) => {
        setUpdatedCardDuration(text);
    }

    const handleUpdatedCardSelectionTags = (selectedCardTags) => {
        setCardSelectedTags(selectedCardTags);
    }


    const handleGroupSearch = (value) => {
        setGroupSearch(value);
    };

    const handleGroupNameChange = (text) => {
        setGroupName(text);
    }

    const handleGroupDescriptionChange = (text) => {
        setGroupDescription(text);
    }

    const handleGroupFrequencyChange = (text) => {
        setGroupType(text);
    }

    const handleGroupSelectionTags = (selectedGroupTags) => {
        setGroupSelectedTags(selectedGroupTags);
    }

    const handleGroupSelectionTypes = (selectedGroupTypes) => {
        setGroupSelectedTypes(selectedGroupTypes);
    }

    const handleUpdatedGroupNameChange = (text) => {
        setUpdatedGroupName(text);
    }

    const handleUpdatedGroupDescriptionChange = (text) => {
        setUpdatedGroupDescription(text);
    }

    const handleUpdatedGroupFrequencyChange = (text) => {
        setUpdatedGroupFrequency(text);
    }

    const handleGroupHobbyChange = (text) => {
        setGroupHobby(text);
    }
    
    const navigateHome = () => { navigation.navigate("Home") };
    const getGroups = async () => {
        const response = await fetch(`${apiURL}/groups`,
            {
                method: "GET",
            });

        const data = await response.json();
        setGroups(data);
        return groups;
    }
    useEffect(() => {
        getGroups();
    },[])


     const createGroup = async () => {
         const response = await fetch(`${apiURL}/groups`,
            {
                method: "POST",
                body: JSON.stringify({ 'name': groupName, 'creator_id': user.id, 'description': groupDescription, 'type': groupType, 'hobby' : groupHobby}),
                headers: {
                    'Content-Type': 'Application/json'
                }
            });

         const data = await response.json();
         goBackToGroups();
    }


    return (
        <View style={styles.container}>

            {/* Edit User Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={editUserVisible}
                onRequestClose={closeEditUser}
            >
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <View style={{ backgroundColor: Colors.background, borderRadius: 8, width: '100%', height: '100%', justifyContent: "center", alignItems: "center" }}>
                        <View style={{ width: '100%' }}>
                            <Header isHome={false} title='Profil' />
                        </View>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor={Colors.secondary}
                            placeholder="Nom"
                            value={lastName}
                            onChangeText={handleLastNameChange}
                            
                        />
                        <TextInput
                            style={styles.input}
                            placeholderTextColor={Colors.secondary}
                            placeholder="Prénom"
                            value={firstName}
                            onChangeText={handleFirstNameChange}
                            
                        />
                        <TextInput
                            style={styles.input}
                            placeholderTextColor={Colors.secondary}
                            placeholder="Email"
                            value={email}
                            onChangeText={handleEmailChange}
                            
                        />
                        {canEdit() && (
                            <>
                                <Text style={{ margin: 0, color: 'gray', fontSize: 10 }}>Vous pouvez laisser ce champ vide*</Text>
                                <TextInput
                                    style={styles.input}
                                    placeholderTextColor={Colors.secondary}
                                    placeholder="Mot de passe"
                                    value={password}
                                    onChangeText={handlePasswordChange}
                                />
                            </>
                        )}

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <TouchableOpacity  style={styles.button} onPress={closeEditUser}>
                                <Text style={{ color: Colors.light, textAlign: 'center' }}>Retour</Text>
                            </TouchableOpacity>


                            {canEdit() && (
                                <>
                                    <TouchableOpacity style={styles.button}
                                        onPress={editUser}
                                    >
                                        {isLoading ? (
                                            <ActivityIndicator color={Colors.light} />
                                        ) : (
                                            <Text style={{ color: Colors.light, textAlign: 'center' }}>Sauvegarder</Text>
                                        )}
                                    </TouchableOpacity>
                                </>
                            )}
                        </View>
                    </View>
                </View>
            </Modal>
             < Modal
                animationType="slide"
                transparent={false}
                visible={editGroupVisible}
                onRequestClose={closeEditGroup} >
                <View style={{ backgroundColor: Colors.background, borderRadius: 8, width: '100%', height: '100%', justifyContent: "center", alignItems: "center" }}>
                    <View style={{ position: 'absolute', top: 50, width: '100%' }}>
                        <GoBackButton onPress= {goBackToSettings}/>
                        <Header isHome={false} title='Groupes' />
                    </View>

                    <View style={{ height: '75%', width: '100%', }}>
                        <ScrollView style={{ flexGrow: 0 }}>
                            {(groupButton == '') && (
                                <View >
                                    {Array.isArray(groups) ? groups.map((group) => (
                                        <View style={[styles.taskContainer, { width: 300, display:  'flex' , alignSelf: 'center', backgroundColor:  Colors.dark  }]}>
                                            <View style={{ justifyContent: 'space-around', padding: 5, flexDirection: 'row' }}>
                                                <View style={styles.topTagContainer}>
                                                    <Text style={styles.taskTitle}>{group.name}</Text>
                                                    <Text style={[styles.taskDescription, { fontSize: 10, color: 'gray' }]}>{group.description}</Text>
                                                </View>
                                            </View>
                                               <View style={{ justifyContent: 'center', flexDirection: 'row', marginTop: 5 }}>
                                                <ViewButton onPress={() => handleViewGroup(group.id)} />
                                                {(!group.is_paused) && (group.creator_id == user.id) && (
                                                    <View style={{ flexDirection: 'row' }}>
                                                        <EditButton onPress={() => handleEditGroup(group.id)} />
                                                    </View>
                                                )}
                                                {(group.creator_id == user.id) && (
                                                    <DeleteButton onPress={() => handleDeleteGroup(group.id)} />
                                                )}
                                            </View>
                                        </View>
                                    )) : null}
                                </View>
                            )}
                            {(groupButton == 'add') && (
                                <View style={{ width: '75%', alignSelf: 'center' }}>
                                    <TextInput
                                        style={[styles.taskContainer, { color: 'white' }]}
                                        placeholder="Nom de Groupe"
                                        placeholderTextColor={Colors.secondary}
                                        value={groupName}
                                        onChangeText={handleGroupNameChange}
                                    />
                                    <TextInput
                                        style={[styles.taskContainer, { color: 'white' }]}
                                        placeholder="Description de Groupe"
                                        placeholderTextColor={Colors.secondary}
                                        multiline={true}
                                        numberOfLines={3}
                                        value={groupDescription}
                                        onChangeText={handleGroupDescriptionChange}
                                    />
                                    <View style={{ paddingHorizontal: 16 }}>
                                        <Text style={{ color: Colors.light, }}>Type du groupe :</Text>
                                    </View>
                                    <TextInput
                                        style={[styles.taskContainer, { color: 'white' }]}
                                        placeholder="Type du Groupe"
                                        placeholderTextColor={Colors.secondary}
                                        value={groupType}
                                        onChangeText={handleGroupFrequencyChange}
                                    />

                                    <View style={{ paddingHorizontal: 16 }}>
                                        <Text style={{ color: Colors.light, }}>Hobby :</Text>
                                    </View>
                                    <TextInput
                                        style={[styles.taskContainer, { color: 'white' }]}
                                        placeholder="Hobby"
                                        placeholderTextColor={Colors.secondary}
                                        value={groupHobby}
                                        onChangeText={handleGroupHobbyChange}
                                    />


                                    <View style={{ justifyContent: 'center', alignSelf: 'center', flexDirection: 'row' }}>
                                        <TouchableOpacity onPress={goBackToGroups} style={[styles.button, { backgroundColor: 'transparent' }]}>
                                            <Text style={{ color: Colors.light, textAlign: 'center' }}>Retour</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={styles.button} onPress={createGroup}>
                                            <Text style={{ color: Colors.light, textAlign: 'center' }}>Ajouter</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                            {(groupButton == 'delete') && (
                                <View style={{ width: '75%', alignSelf: 'center' }}>
                                    <Text style={styles.title}>Etes vous sur que vous voulez effacer le groupe {selectedGroup.name} ?</Text>
                                    <View style={{ justifyContent: 'center', alignSelf: 'center', flexDirection: 'row', marginTop: 10, }}>
                                        <TouchableOpacity onPress={goBackToGroups} style={[styles.button, { backgroundColor: 'transparent' }]}>
                                            <Text style={{ color: Colors.light, textAlign: 'center' }}>Retour</Text>
                                        </TouchableOpacity>
                                        {selectedGroup.is_paused ? (
                                            <TouchableOpacity onPress={() => activateGroup(selectedGroup.id)} style={styles.button}>
                                                <Text style={{ color: Colors.light, textAlign: 'center' }}>Activer</Text>
                                            </TouchableOpacity>
                                        ) : (
                                            <TouchableOpacity onPress={() => pauseGroup(selectedGroup.id)} style={styles.button}>
                                                <Text style={{ color: Colors.light, textAlign: 'center' }}>Mettre en pause</Text>
                                            </TouchableOpacity>
                                        )}
                                        <TouchableOpacity onPress={() => deleteGroup(selectedGroup.id)} style={styles.button}>
                                            <Text style={{ color: Colors.light, textAlign: 'center' }}>Effacer</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                            {(groupButton == 'edit') && (
                                <View style={{ width: '75%', alignSelf: 'center' }}>
                                    <TextInput
                                        style={[styles.taskContainer, { color: 'white' }]}
                                        placeholder="Nom de Groupe"
                                        placeholderTextColor={Colors.secondary}
                                        value={updatedGroupName}
                                        onChangeText={handleUpdatedGroupNameChange}
                                    />
                                    <TextInput
                                        style={[styles.taskContainer, { color: 'white' }]}
                                        placeholder="Description de Groupe"
                                        placeholderTextColor={Colors.secondary}
                                        multiline={true}
                                        numberOfLines={3}
                                        value={updatedGroupDescription}
                                        onChangeText={handleUpdatedGroupDescriptionChange}
                                    />
                                    <TextInput
                                        style={[styles.taskContainer, { color: 'white' }]}
                                        placeholder="Fréquence par jours du groupe"
                                        placeholderTextColor={Colors.secondary}
                                        value={updatedGroupFrequency.toString()}
                                        onChangeText={handleUpdatedGroupFrequencyChange}
                                    />
                                    <View style={{ paddingHorizontal: 16 }}>
                                        <Text style={{ color: Colors.light, }}>Tags associés aux groupe :</Text>
                                    </View>
                                    <SelectMultiple
                                        items={groupTags}
                                        selectedItems={groupSelectedTags}
                                        onSelectionsChange={handleGroupSelectionTags}
                                        max={2}
                                        style={{

                                            backgroundColor: 'transparent',
                                            borderRadius: 8,
                                            paddingVertical: 10,
                                            paddingHorizontal: 16,
                                            display: 'flex',


                                        }}
                                        rowStyle={{ backgroundColor: Colors.dark, borderRadius: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                                        checkboxStyle={{ tintColor: Colors.white }}
                                        labelStyle={{ color: Colors.white, marginTop: 2, }}
                                        selectedCheckboxStyle={{
                                            tintColor: '#FF0000',
                                        }}
                                        selectedLabelStyle={{
                                            color: '#FF0000',
                                            fontWeight: 'bold',
                                        }}
                                    />
                                    <View style={{ paddingHorizontal: 16 }}>
                                        <Text style={{ color: Colors.light, }}>Type(s) du groupe :</Text>
                                    </View>
                                    <SelectMultiple
                                        items={groupTypes}
                                        selectedItems={groupSelectedTypes}
                                        onSelectionsChange={handleGroupSelectionTypes}
                                        max={2}
                                        style={{
                                            backgroundColor: 'transparent',
                                            borderRadius: 8,
                                            paddingVertical: 10,
                                            paddingHorizontal: 16,
                                        }}
                                        rowStyle={{ backgroundColor: Colors.dark, borderRadius: 8 }}
                                        checkboxStyle={{ tintColor: Colors.white }}
                                        labelStyle={{ color: Colors.white }}
                                        selectedCheckboxStyle={{
                                            tintColor: '#FF0000',
                                        }}
                                        selectedLabelStyle={{
                                            color: '#FF0000',
                                            fontWeight: 'bold',
                                        }}
                                    />
                                    <View style={{ paddingHorizontal: 16, paddinBottom: 10 }}>
                                        <Text style={{ color: Colors.light, marginBottom: 5 }}>Adhérents sur le groupe :</Text>
                                    </View>
                                    {Array.isArray(selectedGroup.users) ? selectedGroup.users.map((user) => (
                                        <View style={styles.taskContainer}>
                                            <View>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                                                    <Text style={styles.taskTitle}>{user.first_name} {user.last_name}</Text>
                                                    {selectedGroup.creator_id != user.id ? (
                                                        <DeleteButton onPress={() => handleDeleteUserFromGroup(user)} />
                                                    ) : (
                                                        <EditButton onPress={() => { setGroupButton(''); closeEditGroup(); openEditUser(); }} />
                                                    )}
                                                </View>
                                            </View>
                                        </View>
                                    )) : null}

                                    <View style={{ justifyContent: 'center', alignSelf: 'center', flexDirection: 'row' }}>
                                        <TouchableOpacity onPress={goBackToGroups} style={[styles.button, { backgroundColor: 'transparent' }]}>
                                            <Text style={{ color: Colors.light, textAlign: 'center' }}>Retour</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => editGroup(selectedGroup.id)} style={styles.button}>
                                            <Text style={{ color: Colors.light, textAlign: 'center' }}>Sauvegarder</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                            {(groupButton == 'view') && (
                                <View style={{ width: '75%', alignSelf: 'center' }}>
                                    <View style={{ paddingHorizontal: 16, paddinBottom: 10 }}>
                                        <Text style={{ color: Colors.light, marginBottom: 5 }}>Adhérents sur le groupe :</Text>
                                    </View>
                                    {Array.isArray(selectedGroup.users) ? selectedGroup.users.map((groupUser) => (
                                        <View style={[styles.taskContainer, { backgroundColor: (groupUser.pivot.is_validated == 1) ? Colors.dark : 'transparent' }]}>
                                            <View>
                                                <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                                    <Text style={[styles.taskTitle, { width: '75%' }]}>{groupUser.first_name} {groupUser.last_name}</Text>
                                                    {(user.id == groupUser.id && selectedGroup.creator_id != user.id) && (
                                                        <QuitButton onPress={() => handleQuitGroup(selectedGroup)} />
                                                    )}
                                                    {(selectedGroup.creator_id == groupUser.id) && (
                                                        <KingButton />
                                                    )}
                                                </View>
                                            </View>
                                        </View>
                                    )) : null}

                                    <DialogInput
                                        isDialogVisible={dialogVisible}
                                        title={"Inviter"}
                                        hintInput={"utilisateur@email.com"}
                                        submitInput={(inputText) => {
                                            setEmailInput(inputText);
                                            inviteUserToGroup(inputText, selectedGroup.id);
                                        }}
                                        closeDialog={() => setDialogVisible(false)}>
                                    </DialogInput>

                                    <View style={{ justifyContent: 'center', alignSelf: 'center', flexDirection: 'row' }}>
                                        <TouchableOpacity onPress={goBackToGroups} style={[styles.button, { backgroundColor: 'transparent' }]}>
                                            <Text style={{ color: Colors.light, textAlign: 'center' }}>Retour</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => setDialogVisible(true)} style={[styles.button, { backgroundColor: Colors.primary }]}>
                                            <Text style={{ color: Colors.light, textAlign: 'center' }}>Inviter</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            )}
                            {(groupButton == 'validate') && (
                                <View style={{ width: '75%', alignSelf: 'center' }}>
                                    <View style={{ width: '100%' }}>
                                        <Header isHome={false} title='Joindre un Groupe' />
                                    </View>
                                    <View style={{ marginTop: 30, }}>
                                        <SearchBar onValueSelect={handleGroupSearch} />
                                    </View>
                                    <SixNumberBoxes onCodeInput={handleCodeInput} />
                                    <View style={{ flexDirection: 'row', }}>
                                        <View style={{ alignItems: 'center', width: '50%' }}>
                                            <ButtonComponent color={Colors.light} title="Rejoindre" onPress={verifyUserGroup} />
                                        </View>
                                        <View style={{ alignItems: 'center', width: '50%' }}>
                                            <ButtonComponent color={Colors.light} title="Retour" onPress={() => setGroupButton('')} />
                                        </View>
                                    </View>
                                </View>
                            )}
                        </ScrollView>
                    </View>
                </View >
                 {
                    (groupButton == '') && (
                        <View>
                            <AddButton onPress={addGroupHandler} />
                        </View>
                    )
                }
                
            </Modal >







            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.titleContainer}
                onPress={toggleAccordion}
                >
                <View style={styles.iconContainer}>
                    <Icon name={icon} size={20} color={Colors.light} />
                </View>
                <Text style={styles.title}>{title}</Text>


                
                {!isExpanded && content != "" && (
                    <View style={styles.iconContainer}>
                        <Icon name="chevron-right" size={20} color={Colors.light} />
                    </View>
                )}
                {isExpanded && (
                    <View style={styles.iconContainer}>
                        <Icon name="chevron-left" size={20} color={Colors.light} />
                    </View>
                )}
                {type == "boolean" && (
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        value={isEnabled}
                    />
                )}
                {type == "pick" && (
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        
                        value={isEnabled}
                    />
                )}
                {type == "button" && (
                    <View style={styles.iconContainer} >
                        <Icon name="" size={20} color={Colors.light} />
                    </View>
                )}
                {type == "cronjob" && (
                    <View style={styles.iconContainer}>
                        <Icon name="" size={20} color={Colors.light} />
                    </View>
                )}
            </TouchableOpacity>
            {
                isExpanded && (
                    <View style={styles.content}>
                        <Text>{content}</Text>
                        {type == "user" && (
                            <TouchableOpacity onPress={openEditUser} style={styles.button}>
                                <Text style={{ color: Colors.light, textAlign: 'center' }}>Consulter</Text>
                            </TouchableOpacity>
                        )}
                        {type == "group" && (
                            <TouchableOpacity onPress={openEditGroup} style={styles.button}>
                                <Text style={{ color: Colors.light, textAlign: 'center' }}>Consulter</Text>
                            </TouchableOpacity>
                        )}
                        {type == "card" && (
                            <TouchableOpacity onPress={openCardGroup} style={styles.button}>
                                <Text style={{ color: Colors.light, textAlign: 'center' }}>Consulter</Text>
                            </TouchableOpacity>
                        )}
                        {type == "tag" && (
                            <TouchableOpacity onPress={openEditTag} style={styles.button}>4e
                                <Text style={{ color: Colors.light, textAlign: 'center' }}>Consulter</Text>
                            </TouchableOpacity>
                        )}

                    </View>
                )
            }
        </View >
    );
};

const styles = accordionCoponentStyles;

export default Accordion;
