import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Login: React.FC = () => {
  const [phone, setPhone] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    if (!phone || !email || !password) {
      Alert.alert('Error', 'Please fill all fields.');
      return;
    }

    if (phone.length !== 10) {
      Alert.alert('Error', 'Enter a valid 10-digit phone number.');
      return;
    }

    // Example: simple login check
    Alert.alert('Success', `Logged in with ${email} / ${phone}`);
  };

  return (
    <SafeAreaView className="flex-1 justify-center bg-[#A2ECFF] px-6">
      <View className="rounded-3xl bg-white p-8 shadow-md">
        <Text className="mb-6 text-center text-3xl font-bold">Login</Text>

        {/* Phone Input */}
        <TextInput
          placeholder="Phone Number"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          maxLength={10}
          className="mb-4 rounded-lg border border-gray-300 px-4 py-3 text-base"
        />

        {/* Email Input */}
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          className="mb-4 rounded-lg border border-gray-300 px-4 py-3 text-base"
        />

        {/* Password Input */}
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          className="mb-6 rounded-lg border border-gray-300 px-4 py-3 text-base"
        />

        {/* Login Button */}
        <TouchableOpacity
          onPress={handleLogin}
          className="items-center rounded-lg bg-blue-600 py-3">
          <Text className="text-lg font-bold text-white">Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
