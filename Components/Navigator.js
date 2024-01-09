// components/Dashboard.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { View, Text, FlatList, ScrollView } from 'react-native';
import CurrencyExchange from './CurrencyExchange';
import IpoDetail from './IpoDetail';

const Dashboard = ({ navigation }) => {
  const [ipoData, setIpoData] = useState([]);
  const [currencyExchangeData, setCurrencyExchangeData] = useState([]);

  useEffect(() => {
    const IEX_CLOUD_API_KEY = 'pk_4ae8586f91034a6ca4fec666aa27435c';
    const ipoApiUrl = `https://api.iex.cloud/v1/stock/market/upcoming-ipos?token=${IEX_CLOUD_API_KEY}`;
    const exchangeApiUrl = `https://api.iex.cloud/v1/fx/latest?symbols=USDCAD,GBPUSD,USDJPY&token=${IEX_CLOUD_API_KEY}`;

    const fetchIpoData = async () => {
      try {
        const ipoResponse = await axios.get(ipoApiUrl);
        setIpoData(ipoResponse.data);
      } catch (error) {
        console.error('Error fetching IPO data:', error);
      }
    };

    const fetchCurrencyExchangeData = async () => {
      try {
        const exchangeResponse = await axios.get(exchangeApiUrl);
        setCurrencyExchangeData(exchangeResponse.data);
      } catch (error) {
        console.error('Error fetching currency exchange data:', error);
      }
    };

    fetchIpoData();
    fetchCurrencyExchangeData();
  }, []);

  const renderCurrencyExchangeItem = ({ item }) => <CurrencyExchange exchangeData={item} />;
  const renderIpoDetailItem = ({ item }) => <IpoDetail ipo={item} />;

  return (
    <ScrollView style={{ flex: 1, padding: 20, backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Currency Exchange</Text>
      <FlatList
        data={currencyExchangeData}
        renderItem={renderCurrencyExchangeItem}
        keyExtractor={(item) => item.symbol}
        style={{ marginTop: 10 }}
      />

      <Text style={{ fontSize: 24, fontWeight: 'bold', marginTop: 20 }}>Upcoming IPOs</Text>
      <FlatList
        data={ipoData}
        renderItem={renderIpoDetailItem}
        keyExtractor={(item) => item.symbol}
        style={{ marginTop: 10 }}
      />
    </ScrollView>
  );
};

export default Dashboard;
