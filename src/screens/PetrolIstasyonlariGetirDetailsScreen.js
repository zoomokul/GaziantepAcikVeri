import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import { styles } from '../styles/Detail'; 

const PetrolIstasyonlariGetirDetailsScreen = ({ route }) => {
  const { endpointData } = route.params;
  const [loading, setLoading] = useState(true);
  const [responseData, setResponseData] = useState([]);

  // Function to fetch data from the API endpoint
  const fetchData = async () => {
    try {
      const response = await fetch(endpointData.url);
      const data = await response.json();
      setResponseData(data.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data:', error);
      setLoading(false);
    }
  };



  useEffect(() => {
    fetchData();
  }, []);

  return (
    
    <ScrollView style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" style={styles.loadingIndicator} />
      ) : responseData && responseData.length > 0 ? (
        responseData.map((item, index) => (
          <Card key={index} containerStyle={styles.cardContainer}>
            <Text style={styles.text}>İstasyon Id: {item.id}</Text>
            <Text style={styles.text}>İstasyon Türü: {item.istasyonTuru}</Text>
            <Text style={styles.text}>Adres: {item.adres}</Text>
            <Text style={styles.text}>İlçe: {item.ilceAdi}</Text>
            <Text style={styles.text}>İstasyon Durumu: {item.istasyonDurumu}</Text>
          </Card>
        ))
      ) : (
        <View style={styles.noDataContainer}>
          <Text style={styles.noDataText}>No data available</Text>
        </View>
      )}
    </ScrollView>
  );
};



export default PetrolIstasyonlariGetirDetailsScreen;
