import { View, Text, FlatList, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getCharecterList from '../store/action/charecterAction'
import CharecterCard from '../components/ui/charecterCard'
import SearchButton from '../components/ui/searchButton'

const Charecter = () => {
    const {charecterList, loading} = useSelector(state=>state.Charecter)
const dispatch = useDispatch()

useEffect(()=> {
    dispatch(getCharecterList())
    
},[])

  return (
    
    <View style={styles.container}> 
        <Text style={styles.text}>Rick and Morty Charecter</Text>
        <SearchButton/>
      <FlatList 
      numColumns={2}
      data={charecterList}
      renderItem={({item}) => <CharecterCard item={item}/>}
      />
    </View>
  )
}

export default Charecter

const styles = StyleSheet.create({
    container: {
        flex: 1,
       backgroundColor: "#545B77",
  
    },
    text:{
        color: "black",
        marginTop:45,
        fontSize:25,
        fontWeight:"bold",
        padding: 20
    }
    
  });


