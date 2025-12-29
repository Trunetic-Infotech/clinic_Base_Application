import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {LinearGradient} from 'expo-linear-gradient';
import Tabs from '../Screens/Tabs';

export class Home extends Component {
  render() {
    return (
      <SafeAreaView className="flex-1">
        <LinearGradient
          colors={['#A2ECFF', '#FFFFFF']} // top to bottom gradient
          className="flex-1 p-4">
          {/* Main Content */}
          <Text className="mb-4 text-2xl font-bold">Home</Text>

          <View className="flex-1 mt-[10%] rounded-tl-[9%] rounded-tr-[9%] bg-white p-4">
            <Text className="text-lg font-semibold">Todays Overview</Text>
          </View>
        </LinearGradient>

        {/* Bottom Tabs */}
        <View className="h-16">
          <Tabs />
        </View>
      </SafeAreaView>
    );
  }
}

export default Home;


//example
// import React from 'react';
// import { View, Text, ScrollView } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import QuickActionButton from './QuickActionButton';

// export const Home: React.FC = () => {
//   return (
//     <SafeAreaView className="flex-1 bg-[#A2ECFF]">
//       {/* Header */}
//       <View className="p-6">
//         <Text className="text-3xl font-bold text-white">My Clinic</Text>
//         <Text className="mt-1 text-white">Welcome Back!</Text>
//       </View>

//       {/* Today's Overview */}
//       <View className="flex-1 rounded-t-[30px] bg-white p-6">
//         <Text className="mb-4 text-xl font-bold">Today's Overview</Text>

//         {/* Quick Action Buttons */}
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           <QuickActionButton iconName="people-outline" label="Patients" onPress={() => {}} />
//           <QuickActionButton iconName="calendar-outline" label="Appointments" onPress={() => {}} />
//           <QuickActionButton iconName="receipt-outline" label="Bills" onPress={() => {}} />
//           <QuickActionButton iconName="person-outline" label="Profile" onPress={() => {}} />
//         </ScrollView>

//         {/* Additional content */}
//         <View className="mt-6">
//           <Text className="mb-2 text-lg font-semibold">Today's Patients</Text>
//           <Text>No patients scheduled yet.</Text>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// export default Home;

