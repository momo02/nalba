import React from 'react';
import { Button, Text } from 'react-native';
import { ComnLayout } from '../comn/ComnLayout';

const LoginScreen = ({ api, data }) => {

    const clickLoginBtn = () => {
        api.login();
    }

    return (
        <>
            {ComnLayout({
                //title: '샘플스크린1',
                headerShown: false,
                render:
                    <>
                        <Text>NALBA</Text>
                        <Button title='로그인' onPress={clickLoginBtn} />
                    </>
            })}
        </>
    )
}

export default LoginScreen;