import './global.css';
import { Home } from './components/Home';
import Tabs from './Screens/Tabs'; // default export
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
// import Login from 'Pages/Login';

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        {/* Main Home Page */}
        <View style={{ flex: 1 }}>
          <Home />
        </View>

        {/* Bottom Tabs */}
        {/* <Tabs /> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
