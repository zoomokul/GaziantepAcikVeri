// screens/HomeScreen.js

import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { styles } from '../styles/Home'; 

const HomeScreen = ({ navigation, route }) => {
  const { endpoints } = route.params;

  const navigateToDetails = (endpoint) => {
    navigation.navigate(`${endpoint.name.replace(/ /g, '')}Details`, { endpointData: endpoint });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {endpoints.map((endpoint, index) => (
        <View key={index} style={styles.buttonContainer}>
          <Button
            title={endpoint.name}
            onPress={() => navigateToDetails(endpoint)}
            style={styles.button}
          />
        </View>
      ))}
    </ScrollView>
  );
};


export default HomeScreen;
