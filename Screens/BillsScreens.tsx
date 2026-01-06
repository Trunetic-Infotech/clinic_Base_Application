import React, { useState } from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { Search } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import PaidBill from 'components/Bills.tsx/PaidBill';
import PendingBill from 'components/Bills.tsx/PendingBill';
import BillCard from 'components/common/Card';




type BillTab = 'ALL' | 'PAID' | 'PENDING';

const BillsScreens: React.FC = () => {
  const [search, setSearch] = useState('');
  const [activeTab, setActiveTab] = useState<BillTab>('ALL');

  return (
    <LinearGradient
      colors={['rgba(162, 236, 255, 0.89)', '#FFFFFF']}
      locations={[0.03, 0.95]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={{ flex: 1 }}>
      <SafeAreaView className="flex-1">
        <Text className="mt-4 text-center text-3xl font-bold text-indigo-900">Bills</Text>

        {/* Search */}
        <View className="p-4">
          <View className="flex-row items-center rounded-2xl border border-gray-300 bg-white px-3 py-1 shadow-sm">
            <Search size={20} color="#6B7280" />
            <TextInput
              placeholder="Search bill..."
              value={search}
              onChangeText={setSearch}
              className="ml-3 flex-1 text-base"
            />
          </View>
        </View>

        {/* Tabs */}
        <View className="mx-4 flex-row">
          {(['ALL', 'PAID', 'PENDING'] as BillTab[]).map((tab) => (
            <Pressable
              key={tab}
              onPress={() => setActiveTab(tab)}
              className={`flex-1 items-center rounded-xl py-3 ${
                activeTab === tab ? 'bg-indigo-600' : ''
              }`}>
              <Text
                className={`font-semibold ${activeTab === tab ? 'text-white' : 'text-gray-700'}`}>
                {tab}
              </Text>
            </Pressable>
          ))}
        </View>

        {/* Content */}
        <View className="flex-1 p-4">
          {activeTab === 'ALL' && (
            <>
              <BillCard
                name="Rahul Sharma"
                date="12 Sep 2025"
                amount={1200}
                status="PAID"
                onViewInvoice={() => console.log('Open Invoice')}
              />
              <BillCard
                name="Anita Verma"
                date="14 Sep 2025"
                amount={850}
                status="PENDING"
                onViewInvoice={() => console.log('Open Invoice')}
              />

              <BillCard
                name="Anita Verma"
                date="14 Sep 2025"
                amount={850}
                status="PENDING"
                onViewInvoice={() => console.log('Open Invoice')}
              />

              <BillCard
                name="Anita Verma"
                date="14 Sep 2025"
                amount={850}
                status="PENDING"
                onViewInvoice={() => console.log('Open Invoice')}
              />
            </>
          )}

          {activeTab === 'PAID' && <PaidBill />}
          {activeTab === 'PENDING' && <PendingBill />}
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default BillsScreens;
