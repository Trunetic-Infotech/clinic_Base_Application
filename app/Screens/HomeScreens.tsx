import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1">
      <Text className="mb-4 text-center text-2xl font-bold">Home</Text>
      <View className="flex-1 rounded-tl-[9%] rounded-tr-[9%] bg-white p-4">
        <Text className="text-lg font-semibold">Today's Overview</Text>
      </View>
    </SafeAreaView>
  );
}
