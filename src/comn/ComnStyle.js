'use strict';
import { StyleSheet } from 'react-native';

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        ////Set different colors on Top in SafeAreaView component 
        backgroundColor: '#eee',
    },
    header: {
        backgroundColor: '#eee'
    },
    body: {
        flex: 1,
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#fff'
    },
})