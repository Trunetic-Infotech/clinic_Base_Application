import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Tabs';
import ViewBill from '../components/patient/ViewBill';


import CreatePrescription from 'components/home/CreatePrescription';
import { NewPatients } from 'components/patient/NewPatient';
import Appointments from 'components/home/Appointments';
import FollowUp from 'components/home/FollowUpHome';



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
      <Stack.Screen name="NewPatient" component={NewPatients} />
      <Stack.Screen name="Prescription" component={CreatePrescription} />
      <Stack.Screen name="Appointments" component={Appointments} />
      <Stack.Screen name="FollowUp" component={FollowUp} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
