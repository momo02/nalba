import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import SampleScreen1 from '../sample/SampleScreen1';
import SampleScreen2 from '../sample/SampleScreen2';

const Stack = createStackNavigator();

const MenuNavigation1 = ({ navigation }) => {

    return (
        <Stack.Navigator initialRouteName="Screen1">
            <Stack.Screen name="Screen1" component={SampleScreen1} options={{ headerShown: false }} />
            <Stack.Screen name="Screen2" component={SampleScreen2} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export default MenuNavigation1;