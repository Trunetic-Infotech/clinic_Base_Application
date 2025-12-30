import './global.css';
import Tabs from './Screens/Tabs';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AppBackground from 'components/AppBackground';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <SafeAreaProvider>
      <AppBackground>
        <NavigationContainer>
          <Tabs />
        </NavigationContainer>
      </AppBackground>
    </SafeAreaProvider>
  );
}
