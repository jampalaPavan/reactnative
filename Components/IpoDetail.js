// components/IpoDetail.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const IpoDetail = ({ ipo }) => {
  return (
    <View style={styles.ipoCard}>
      <Text style={styles.companyName}>{ipo.companyName}</Text>
      <Text>{`Symbol: ${ipo.symbol}`}</Text>
      <Text>{`Price Range: ${ipo.priceRange}`}</Text>
      <Text>{`Filed Date: ${ipo.filedDate}`}</Text>
      <Text>{`First Day Close: ${ipo.firstDayClose}`}</Text>
      <Text>{`Lockup Period: ${ipo.lockupPeriod}`}</Text>
      <Text>{`Offering Date: ${ipo.offeringDate}`}</Text>
      <Text>{`Price Range High: ${ipo.priceRangeHigh}`}</Text>
      <Text>{`Price Range Low: ${ipo.priceRangelow}`}</Text>
      <Text>{`Shares: ${ipo.shares}`}</Text>
      <Text>{`Status: ${ipo.status}`}</Text>
      <Text>{`Volume: ${ipo.volume}`}</Text>
      {ipo.underwriters && (
        <Text>{`Underwriters: ${ipo.underwriters.join(', ')}`}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  ipoCard: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    margin: 5,
  },
  companyName: {
    fontWeight: 'bold',
  },
});

export default IpoDetail;
