import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getListLocation from '../store/action/locationAction'
import LocationCard from '../components/locationCard'

const Location = () => {
  const {locationList, loading} = useSelector(state=>state.Charecter)
  const dispatch = useDispatch()
  
  useEffect(()=> {
      dispatch(getListLocation())
      
  },[])
  
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={locationList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <LocationCard item={item} />}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    
    flex: 1,
    backgroundColor: '#374259', // Beyaz arka plan
  },
  listContent: {
    paddingVertical: 10,
  },
});


export default Location