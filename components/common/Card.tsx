import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';

type BillCardProps = {
  name: string;
  date: string;
  amount: number;
  status: 'PAID' | 'PENDING';
  onViewInvoice: () => void;
};

const BillCard: React.FC<BillCardProps> = ({ name, date, amount, status, onViewInvoice }) => {
  const isPaid = status === 'PAID';

  return (
    <View className="mb-4 flex-row items-center rounded-xl bg-white p-4 shadow-md border border-gray-300">
      {/* Left */}
      <Image
        source={{ uri: 'https://i.pravatar.cc/100' }}
        className="mr-3 h-12 w-12 rounded-full"
      />

      {/* Middle */}
      <View className="flex-1">
        <Text className="text-base font-semibold text-gray-800">{name}</Text>
        <Text className="mt-1 text-sm text-gray-500">{date}</Text>
      </View>

      {/* Right */}
      <View className="items-end">
        <Text className="text-base font-bold text-indigo-700">₹ {amount}</Text>

        <Text
          className={`mt-1 text-sm font-semibold ${isPaid ? 'text-green-600' : 'text-red-500'}`}>
          {isPaid ? 'Paid' : 'Pending'}
        </Text>

        <Pressable onPress={onViewInvoice} className="mt-2 rounded-lg bg-indigo-600 px-3 py-1.5">
          <Text className="text-xs font-semibold text-white">View Invoice</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default BillCard;
