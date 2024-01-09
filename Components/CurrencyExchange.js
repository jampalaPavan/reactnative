// components/CurrencyExchange.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CurrencyExchange = ({ exchangeData }) => {
  return (
    <View style={styles.exchangeContainer}>
      <Text style={styles.exchangeText}>
        {`${exchangeData.symbol}: ${exchangeData.rate}`}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  exchangeContainer: {
    marginBottom: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  exchangeText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CurrencyExchange;
