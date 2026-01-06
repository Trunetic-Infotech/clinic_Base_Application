import { View, Text } from 'react-native'
import React from 'react'
import BillCard from 'components/common/Card'

const PaidBill = () => {
  return (
    <View>
      <BillCard
        name="Amar"
        date="12 Sep 2025"
        amount={1200}
        status="PAID"
        onViewInvoice={() => console.log('Open Invoice')}
      />
    </View>
  );
}

export default PaidBill