import React, { useEffect, useRef } from 'react';
import { Animated, FlatList, Image, StyleSheet, View, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import getCharecterList from '../../store/action/charecterAction';
import { useNavigation } from '@react-navigation/native';
import { CHARECTERDETAIL } from '../../utils/routes';

const CharacterList = () => {
  const { charecterList } = useSelector(state => state.Charecter);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const animation = useRef(new Animated.Value(1)).current; // Animasyon için başlangıç değeri

  useEffect(() => {
    dispatch(getCharecterList());

    // Animasyonu başlat ve döngü halinde çalıştır
    Animated.loop(
      Animated.sequence([
        Animated.timing(animation, {
          toValue: 1.2, // Büyüme oranı
          duration: 1000, // Büyüme süresi
          useNativeDriver: true,
        }),
        Animated.timing(animation, {
          toValue: 1, // Küçülme oranı
          duration: 1000, // Küçülme süresi
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={charecterList}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate(CHARECTERDETAIL, { item })} 
          >
            <Animated.View
              style={[
                styles.item,
                {
                  transform: [{ scale: animation }], // Animasyonlu ölçekleme
                },
              ]}
            >
              <Image source={{ uri: item.image }} style={styles.image} />
            </Animated.View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    marginHorizontal: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    resizeMode: 'cover',
    margin:10
  },
});

export default CharacterList;
