import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

import Routing from './modules/navigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }}>
        <Routing />
      </SafeAreaView>
    </>
  );
};

export default App;
