import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react'
import CharacterList from '../components/ui/charecterList'

const CharecterDetail = ({route}) => {
    const {item} = route.params
    //console.log(item)
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.name}>{item.name}</Text>
      <Image style={styles.image}
     source={{ uri: item.image }} 
      />
      </View>
      <View style={{flexDirection:"row", alignItems:"center", justifyContent:"space-evenly"}}>
        <View style={styles.viewContainer}>
        <Text style={styles.textBold} >{item.gender}</Text>
        <Text style={styles.text}>Gender</Text>
        </View>
        <View style={styles.viewContainer}>
        <Text style={styles.textBold}> {item.species}</Text>
        <Text style={styles.text}>Species</Text>
        </View>
        <View style={styles.viewContainer}>
        <Text style={styles.textBold}> {item.status}</Text>
        <Text style={styles.text}>Status</Text>
        </View>
        </View>

        <View style={styles.origin}>
         <Text style={styles.textBold}> {item.origin.name}</Text>
        <Text style={styles.text}>Origin</Text>
        </View>
        <View style={styles.origin}>
         <Text style={styles.textBold}> {item.location.name}</Text>
        <Text style={styles.text}>Location</Text>
        </View>
        <ScrollView>
          <CharacterList item={item}/>
        </ScrollView>
     
    </View>
  )
}

export default CharecterDetail
const styles = StyleSheet.create({
    container: {
        flex: 1,
       backgroundColor: "#374259",
  
    },
    image:{
        alignSelf: "center",
       justifyContent: "center",
        marginBottom: 20,
        width: 200,
        height: 200,
        borderRadius:250,
        resizeMode: "cover",
        borderWidth:3,
        borderColor: "#5C8984",
       
    },
    name:{
    fontSize:27,
    fontWeight:"400",
    color: "white",
    paddingVertical: 30,
    padding:15,
    fontStyle:"italic"
    },
    viewContainer:{
        backgroundColor: "#5C8984",
        width:120,
        height:60,
        borderRadius:10,
        padding:10,
        marginBottom:10,
    },
    origin:{
backgroundColor: "#F7D8D8",
width:"95%",
height: 70,
borderRadius:10,
padding:10,
margin:10,
marginBottom:10,

    },
    textBold:{
        color: "black",
        fontWeight:"bold",
        fontSize:18,
        textAlign: "center",
       padding:3,
        alignItems: "center",
       
       
    },
    text:{
        color: "black",
        fontSize:14,
        fontWeight:"300",
        alignItems: "center",
        textAlign: "center",
       
    }
})