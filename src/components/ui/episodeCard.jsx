import React, { useState } from "react";
import { View, Text, StyleSheet, Image, Modal, Pressable, TouchableOpacity, Linking } from "react-native";
import characterGifs from "../../utils/charecterUrlGif"; // GIF URL'leri
import { CloseSquare } from "iconsax-react-native";

const EpisodeCard = ({ character, episodeList }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [episodeDetails, setEpisodeDetails] = useState(null);

  const handlePress = () => {
    // Karakterle eşleşen episode'u bul
    const matchedEpisode = episodeList.find((ep) =>
      character.episode.some((url) => url.includes(ep.id))
    );

    if (matchedEpisode) {
      setEpisodeDetails(matchedEpisode);
    } else {
      console.log("Eşleşen episode bulunamadı!");
    }

    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setEpisodeDetails(null);
  };

  // Karakterin adına göre GIF URL'sini al
  const characterGif = characterGifs[character.name] || null;

  // Episode linkine gitmek için fonksiyon
  const openEpisodeLink = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Episode link açılamadı:", err)
    );
  };

  return (
    <View style={styles.container}>
      {/* Karakter resmi ve adı */}
      <Pressable onPress={handlePress} style={{flexDirection:"row", padding:20, alignItems:"center"}}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: character.image }}
            style={{ width: 100, height: 100, borderRadius: 50 }}
          />
        </View>
        <Text style={styles.name}>{character.name}</Text>
      </Pressable>

      {/* Modal */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {/* Episode Detayları */}
            {episodeDetails ? (
              <>
                 <View style={{flexDirection:"row", alignItems:"center",  justifyContent:"center", borderRadius:15, paddingVertical:5, margin:5}}>
                 <Text style={styles.modalDetails}> Name: </Text>
                 <Text style={styles.episodeText}>{episodeDetails.name} </Text> 
                   </View>
                   <View style={{flexDirection:"row", alignItems:"center",  justifyContent:"center", borderRadius:15, paddingVertical:5, margin:5}}>
                <Text style={styles.modalDetails}> Episode:</Text>
                  <TouchableOpacity onPress={() => openEpisodeLink(episodeDetails.url)}>
                    <Text style={{ color: "blue" , padding:5}}>
                      {episodeDetails.episode} 
                      </Text>
                  </TouchableOpacity>
               
                  </View> 
                   <View style={{flexDirection:"row", alignItems:"center",justifyContent:"center", borderRadius:15, paddingVertical:5, margin:5}}>
                 <Text style={styles.modalDetails}> Air Date: </Text>
                 <Text style={styles.episodeText}>{episodeDetails.air_date} </Text> 
                   </View>

              </>
            ) : (
              <Text>Episode bilgisi bulunamadı!</Text>
            )}
            {/* Karakter GIF'i */}
            {characterGif ? (
              <Image source={{ uri: characterGif }} style={styles.modalImage} />
            ) : (
              <Text>GIF bulunamadı</Text>
            )}
            <TouchableOpacity style={styles.button} onPress={closeModal}>
              <CloseSquare size={32} color="#9B111E" variant="Bold" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default EpisodeCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 20,
    backgroundColor: "#5C8984",
    borderRadius: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "500",
    color: "white",
    marginBottom: 10,
    textTransform: "capitalize",
    marginLeft: -50,
  },
  imageContainer: {
    width: 180,
    height: 100,
    borderRadius: 10,
    overflow: "hidden",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: 350,
    backgroundColor: "#D8C4B6",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  modalImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderColor: "#374259",
    borderWidth: 2,
    marginBottom: 15,
  },
  modalName: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#374259",
    fontStyle: "italic",
  },
  modalDetails: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
    color: "#5C8984"
   

  },
  button: {
    position: "absolute",
    top: 1,
    right: 1,
    padding: 5,
    borderRadius: 5,
  },
  episodeText: {
    color: "#fff",
    fontWeight: "bold",
    textTransform: "capitalize",
    fontSize: 15,
    marginLeft:3,
    color: "#374259",
  }
});
