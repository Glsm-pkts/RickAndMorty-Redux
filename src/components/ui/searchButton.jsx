import { useNavigation } from '@react-navigation/native';
import {  SearchNormal } from 'iconsax-react-native';

import { View, Text, TextInput, TouchableOpacity, StyleSheet, Pressable } from 'react-native';
import { SEARCHSCREEN } from '../../utils/routes';

const SearchButton = () => {
 
  const navigation = useNavigation()
  return (
    <Pressable onPress={()=> navigation.navigate(SEARCHSCREEN)} style={styles.container}>
      {/* Search Input */}
      <View
      style={styles.inputContainer}>
        <TextInput onPress={()=> navigation.navigate(SEARCHSCREEN)}
          style={styles.input}
          placeholder="Search..."
          placeholderTextColor={"#D8C4B6"}
          
        />
        <SearchNormal size={20} color="#D8C4B6"  style={styles.icon} />
      </View>

      {/* Search Button */}
     
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    padding: 10,
  },
  inputContainer: {
    flex: 1,
    position: 'relative',
    justifyContent: 'center',
    
  },
  input: {
    backgroundColor: "rgba(255, 255, 255)",
    color:"white",
    flex: 1,
    
    borderWidth: 1,
    borderColor: '#D8C4B6',
    borderRadius: 10,
    padding: 20,
    paddingLeft: 45, 
    
  },
  icon: {
    position: 'absolute',
    left: 15,
  },
  button: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#D8C4B6',
    borderRadius: 10,
    padding: 15,
    marginLeft: 10,
    
  },
  buttonText: {
    color: '#D8C4B6',
    fontWeight: 'bold',
  },
});

export default SearchButton;
