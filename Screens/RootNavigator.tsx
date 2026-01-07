import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Tabs';
import ViewBill from '../components/patient/ViewBill';
import PatientProfileScreen from 'components/patient/patient-profile/PatientDetailProfile';

export type RootStackParamList = {
  Tabs: undefined;
  ViewBill: { billId: number }; // ✅ MATCH NAME
  PatientProfile: { patientId: string } | undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="ViewBill" component={ViewBill} />
      <Stack.Screen name="PatientProfile" component={PatientProfileScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
