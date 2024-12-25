import { View, Text, TextInput, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import Charecter from '../../screens/charecter';

import { CHARECTERDETAIL } from '../../utils/routes';
import { useNavigation } from '@react-navigation/native';

const CharecterCard = ({item}) => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>

    <Pressable
    onPress={()=>navigation.navigate(CHARECTERDETAIL,{item})}
    style={styles.card}>
      <Text numberOfLines={2} style={styles.text}>{item.name}</Text>
      <View style={styles.imageContainer}>
      <Image 
     source={{ uri: item.image }} 
     style={{ width: 100, height: 100, borderRadius: 50}} />
      </View>

      </Pressable>

    </View>
  )
}

export default CharecterCard

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
       marginHorizontal:20,
      marginVertical:20
       
    },
    text:{
        fontSize:15,
        fontWeight:"500",
        padding:15,
        alignItems: "center",
        justifyContent: "center",
        textAlign:"center",
        color: "white",
        fontStyle: 'italic',
    },

    card:{
        backgroundColor: "#374259",
        width:140,
        height:180,
        borderRadius:15,
        shadowColor: "#000",
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 1
    },
    imageContainer:{
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 10,
        resizeMode: "contain"
       
        
        
    }

  });


