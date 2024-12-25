import { FlatList, StyleSheet, SafeAreaView } from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import getEpisodeList from "../store/action/episodeAction";
import getCharecterList from "../store/action/charecterAction";
import EpisodeCard from "../components/ui/episodeCard";

const Episode = () => {
  const { episodeList, charecterList } = useSelector((state) => state.Charecter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEpisodeList());
    dispatch(getCharecterList());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={charecterList}
        renderItem={({ item }) => (
          <EpisodeCard character={item} episodeList={episodeList} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default Episode;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D8C4B6",
  },
});
