// MobileDetail.js

import React from 'react';
import { View, Text } from 'react-native';

const MobileDetail = ({ name, brand }) => {
  return (
    <View>
      <Text>Name: {name}</Text>
      <Text>Brand: {brand}</Text>
    </View>
  );
}

export default MobileDetail;
