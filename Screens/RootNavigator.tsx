import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Tabs';
import ViewBill from '../components/patient/ViewBill';
import PatientProfileScreen from 'components/patient/patient-profile/PatientDetailProfile';

import CreatePrescription from 'components/home/CreatePrescription';
import { NewPatients } from 'components/patient/NewPatient';
import Appointments from 'components/home/Appointments';

import AddVisit from '../components/patient/patient-detail-tab/AddVisit';
import FollowUp from 'components/home/FollowUpHome';
import NewAppointment from 'components/appointment/NewAppointment';

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
      <Stack.Screen name="NewPatient" component={NewPatients} />
      <Stack.Screen name="Prescription" component={CreatePrescription} />
      <Stack.Screen name="Appointments" component={Appointments} />
      <Stack.Screen name="FollowUp" component={FollowUp} />
      <Stack.Screen name="AddVisit" component={AddVisit} />
      <Stack.Screen name="NewAppointments" component={NewAppointment} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
