import { createDrawerNavigator } from '@react-navigation/drawer';
import React, { useEffect } from 'react';
import MenuNavigation1 from './MenuNavigation1';
import MenuNavigation2 from './MenuNavigation1';

const Drawer = createDrawerNavigator();

const MainNavigation = ({ navigation }) => {
    //const { t } = useTranslation();
    // const dispatch = useDispatch();
    // const { screenToMove } = useSelector(state => state.pushNotiReducer);

    useEffect(() => {

    }, [])

    return (
        <Drawer.Navigator initialRouteName="DemoNav1">
            <Drawer.Screen name="DemoNav1" component={MenuNavigation1} />
            <Drawer.Screen name="DemoNav2" component={MenuNavigation2} />
        </Drawer.Navigator>
    )
}

export default MainNavigation