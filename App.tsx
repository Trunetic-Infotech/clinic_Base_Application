import './global.css';
import { Home } from './components/Home';
import Tabs from './Screens/Tabs'; // default export
import { SafeAreaView } from 'react-native-safe-area-context';
import { View } from 'react-native';
// import Login from 'Pages/Login';


export default function App() {
  return (
    <SafeAreaView>
      {/* Main Home Page */}
      <View className='h-screen' >
        <Home />
      </View>

      {/* <Login /> */}

      {/* Bottom Tabs */}
    
    </SafeAreaView>
  );
}


