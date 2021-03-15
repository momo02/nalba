import { Icon, TopNavigation, TopNavigationAction, Divider, OverflowMenu, MenuItem } from '@ui-kitten/components';
import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import store from '../store';
import * as AuthActions from '../action/AuthAction'
import { useDispatch } from 'react-redux'

const cs = require('../comn/ComnStyle');

const ComnHeader = ({ hasBackBtn = true, title, subtitle, navigation }) => {

    const [menuVisible, setMenuVisible] = useState(false);
    const dispatch = useDispatch();

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    const navigateBack = () => {
        navigation.goBack();
    };

    const logout = () => {
        dispatch(AuthActions.logout());
    }

    const BackIcon = (props) => (
        <Icon {...props} name='arrow-back' />
    );

    // const EditIcon = (props) => (
    //     <Icon {...props} name='edit' />
    // );

    const MenuIcon = (props) => (
        <Icon {...props} name='more-vertical' />
    );

    const InfoIcon = (props) => (
        <Icon {...props} name='info' />
    );

    const LogoutIcon = (props) => (
        <Icon {...props} name='log-out' />
    );

    const renderBackAction = () => (
        hasBackBtn ?
            <TopNavigationAction icon={BackIcon} onPress={navigateBack} />
            : null
    );

    const renderMenuAction = () => (
        <TopNavigationAction icon={MenuIcon} onPress={toggleMenu} />
    );




    const renderRightActions = () => (
        <React.Fragment>
            {/* <TopNavigationAction icon={EditIcon} /> */}
            <OverflowMenu
                anchor={renderMenuAction}
                visible={menuVisible}
                onBackdropPress={toggleMenu}>
                <MenuItem accessoryLeft={InfoIcon} title='About' />
                <MenuItem accessoryLeft={LogoutIcon} title='Logout' onPress={logout} />
            </OverflowMenu>
        </React.Fragment>
    );

    return (
        //  <View style={ls.header}>
        <>
            <TopNavigation
                style={cs.header}
                alignment='center'
                accessoryLeft={renderBackAction}
                accessoryRight={renderRightActions}
                title={title}
                subtitle={subtitle}
            />
            <Divider />
        </>
        //   </View>
    );
}

// const style = StyleSheet.create({
//     topNav: {
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: 'blue',
//     },

// })

export default ComnHeader;