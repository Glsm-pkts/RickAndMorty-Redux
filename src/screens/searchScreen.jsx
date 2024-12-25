import React, { useState } from 'react';
import { View, TextInput, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { SearchNormal } from 'iconsax-react-native';
import { CHARECTERDETAIL } from '../utils/routes';

const SearchScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { charecterList } = useSelector((state) => state.Charecter);
  const navigation = useNavigation();

  // Arama sorgusuna uygun sonuçları filtreleme
  const filteredCharacters = charecterList.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCharacterPress = (item) => {
    navigation.navigate(CHARECTERDETAIL, { item }); 
  };

  return (
    <View style={styles.container}>
      {/* Search Input */}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor="#D8C4B6"
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)} // Arama sorgusunu güncelleme
        />
        <SearchNormal size={20} color="#D8C4B6" style={styles.icon} />
      </View>

      {/* Arama Sonuçları */}
      <FlatList
        data={filteredCharacters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCharacterPress(item)} style={styles.item}>
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#545B77',
  },
  inputContainer: {
    marginTop: 29,
    margin: 10,
    position: 'relative',
  },
  input: {
    backgroundColor: 'rgba(255, 255, 255)',
    color: 'white',
    borderWidth: 1,
    borderColor: '#D8C4B6',
    borderRadius: 10,
    padding: 10,
    paddingLeft: 45, 
  },
  icon: {
    position: 'absolute',
    left: 15,
    top: 10, 
  },
  item: {
    backgroundColor: 'transparent',
    borderBottomWidth: 0.5,
    borderColor: 'gray',
    marginBottom: 5,
    padding: 15,
    borderRadius: 10,
    padding: 10,
    marginBottom: 5,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 1,
  },
  itemText: {
    color: '#D8C4B6',
    fontWeight: 'bold',
  },
});
