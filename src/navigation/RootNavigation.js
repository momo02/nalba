import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { useSelector } from 'react-redux';
import LoginContainer from '../container/LoginContainer';
import MainNavigation from './MainNavigation';

const Stack = createStackNavigator();

const RootNavigation = ({ navigation }) => {

    const { userToken } = useSelector(state => state.authReducer)

    return (
        <Stack.Navigator>
            {userToken == null ? (
                // 로그인 하지 않은 상태 
                <Stack.Screen
                    name="Login"
                    component={LoginContainer}
                    options={{
                        headerShown: false,
                        //title: '로그인',
                        // When logging out, a pop animation feels intuitive
                        // You can remove this if you want the default 'push' animation
                        //animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                    }}
                />
            ) : (
                    // 로그인 한 상태 
                    <Stack.Screen name="Main" component={MainNavigation} options={{ headerShown: false }} />
                )}
        </Stack.Navigator>
    )
}

export default RootNavigation;