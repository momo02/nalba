import React from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { ComnLayout } from '../comn/ComnLayout';

//공통 style
const cs = require('../comn/ComnStyle');

const SampleScreen2 = ({ navigation }) => {
    return (
        <>
            {ComnLayout({
                headerTitle: '샘플스크린2',
                headerSubTitle: '서브타이틀',
                navigation,
                render:
                    <View style={cs.body}>
                        <Text>바디 영역22222</Text>
                    </View>,
            })}
        </>
    );
}

const style = StyleSheet.create({
    //해당 screen을 위한 style
})

export default SampleScreen2;