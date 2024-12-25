import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const LocationCard = ({ item }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.type}>Type: {item.type}</Text>
      <Text style={styles.dimension}>Dimension: {item.dimension}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
   
    backgroundColor: '#F7D8D8', // Hafif gri arka plan
    marginVertical: 10,
    marginTop: 20,
    marginHorizontal: 10,
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3, // Android'de gölge için
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  type: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  dimension: {
    fontSize: 14,
    color: '#999',
  },
});

export default LocationCard;
