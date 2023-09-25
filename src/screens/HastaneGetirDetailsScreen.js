// screens/PetrolIstasyonlariDetailsScreen.js
import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
import {Card} from 'react-native-elements';
import axios from 'axios';
import { styles } from '../styles/Detail'; 

const HastaneGetirDetailsScreen = ({route}) => {
  const {endpointData} = route.params;
  const [loading, setLoading] = useState(true);
  const [responseData, setResponseData] = useState([]);

  // Function to fetch data from the API endpoint
  const fetchData = async () => {
    try {
      const response = await fetch(endpointData.url);
      const data = await response.json();
      setResponseData(data);
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
    <ScrollView>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : responseData && responseData.length > 0 ? (
        responseData.map((item, index) => (
          <Card key={index} containerStyle={styles.cardContainer}>
            <Text style={styles.text}>Adı: {item.adi}</Text>
            <Text style={styles.text}>İlçe: {item.ilce}</Text>
            <Text style={styles.text}>Mahalle: {item.mahalle}</Text>
          </Card>
        ))
      ) : (
        <View>
          <Text>No data available</Text>
        </View>
      )}
    </ScrollView>
  );
};

export default HastaneGetirDetailsScreen;
