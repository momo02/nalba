

import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './src/store';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import RootNavigation from './src/navigation/RootNavigation';

import ActivityLoadingModule from './src/module/loading/AcitityLoadingModule';


const App = () => {
  return (
    <>
      <Provider store={store}>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <ActivityLoadingModule />
          <NavigationContainer>
            <RootNavigation />
          </NavigationContainer>
        </ApplicationProvider>
      </Provider>
    </>
  );
}

export default App;
