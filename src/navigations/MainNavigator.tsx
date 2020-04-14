import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import RegulatorNavigator from './RegulatorNavigator';
import ConsigneeNavigator from './ConsigneeNavigator';
import SupplierNavigator from './SupplierNavigator';
import ShipperNavigator from './ShipperNavigator';
import ResellerNavigator from './ResellerNavigator';
import OperatorNavigator from './OperatorNavigator';

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Regulator" component={RegulatorNavigator} />
      <Stack.Screen name="Consignee" component={ConsigneeNavigator} />
      <Stack.Screen name="Supplier" component={SupplierNavigator} />
      <Stack.Screen name="Shipper" component={ShipperNavigator} />
      <Stack.Screen name="Reseller" component={ResellerNavigator} />
      <Stack.Screen name="Operator" component={OperatorNavigator} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
