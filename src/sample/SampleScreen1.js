import React, { useEffect } from 'react';
import { Button, SafeAreaView, StyleSheet, Text, View, StatusBar } from 'react-native';
import { ComnLayout } from '../comn/ComnLayout';
import { useSelector } from 'react-redux'

//공통 style
const cs = require('../comn/ComnStyle');

const SampleScreen1 = ({ navigation }) => {

    const { isLogin, userToken, userInfo } = useSelector(state => state.authReducer);

    useEffect(() => {
        console.log(">>>>> isLogin", isLogin)

    }, [isLogin, userToken, userInfo])

    return (
        <>
            {ComnLayout({
                headerTitle: '샘플스크린1',
                isRootScreen: true,
                render:
                    <View style={cs.body}>
                        <Text style={style.text}>바디 영역</Text>
                        <Text style={style.text}>로그인 여부 : {isLogin ? 'Y' : 'N'}</Text>
                        <Text style={style.text}>로그인 유저 토큰 : {userToken}</Text>
                        <Text style={style.text}>로그인 유저 정보 : {JSON.stringify(userInfo)}</Text>
                        <Button title='페이지 이동' onPress={() => { navigation.navigate('Screen2') }} />
                    </View>,
            })}
        </>
    )
}

const style = StyleSheet.create({
    //해당 screen을 위한 style
    text: {
        padding: 10
    }
})

export default SampleScreen1;