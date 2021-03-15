import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import Header from '../comn/ComnHeader';

//공통 style
const cs = require('../comn/ComnStyle');

export const ComnLayout = ({ headerShown = true, headerTitle, headerSubTitle, isRootScreen = false, render, navigation }) => {
    return (
        <>
            {/* Set different colors on Top in SafeAreaView component */}
            <SafeAreaView style={{ flex: 0, backgroundColor: cs.header.backgroundColor }} />
            <StatusBar barStyle="light-content" />
            <SafeAreaView style={cs.container}>
                {headerShown ? <Header hasBackBtn={!isRootScreen} title={headerTitle} subtitle={headerSubTitle} navigation={navigation}></Header> : null}
                <View style={cs.body}>
                    {render}
                </View>
            </SafeAreaView >
        </>
    );
}