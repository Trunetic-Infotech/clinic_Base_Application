import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Tabs';
import ViewBill from '../components/patient/ViewBill';

export type RootStackParamList = {
  Tabs: undefined;
  ViewBill: { billId: number }; // ✅ MATCH NAME
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="ViewBill" component={ViewBill} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
