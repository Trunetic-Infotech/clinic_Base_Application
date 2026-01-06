import './global.css';
import Tabs from './Screens/Tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from 'Screens/RootNavigator';

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        {/* <Tabs /> */}
        <RootNavigator/>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
