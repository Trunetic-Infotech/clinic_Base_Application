import { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';

type AppBackgroundProps = {
  children: ReactNode;
};

export default function AppBackground({ children }: AppBackgroundProps) {
  return (
    <LinearGradient
      colors={['rgba(162, 236, 255, 0.89)', '#FFFFFF']}
      locations={[0.03, 0.55]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={{ flex: 1 }}>
      <SafeAreaView className="flex-1">{children}</SafeAreaView>
    </LinearGradient>
  );
}
