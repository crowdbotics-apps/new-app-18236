import React, { useEffect } from 'react';
import RootNavigator from './components/navigation/SwitchNavigator';
import RootProvider from './providers';
import SplashScreen from 'react-native-splash-screen';
import { enableScreens } from 'react-native-screens';

enableScreens();

function App(): React.ReactElement {

  useEffect(() => {
    // SplashScreen.hide();
  });

  return <RootNavigator />;
}

function ProviderWrapper(): React.ReactElement {
  return (
    <RootProvider>
      <App />
    </RootProvider>
  );
}

export default ProviderWrapper;
