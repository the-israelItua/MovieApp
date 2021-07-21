import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const EpisodeCard = ({episode, hidePlot}) => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.row}>
          <Image style={styles.image} source={{uri: episode.poster}} />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{episode.title}</Text>
            <Text style={styles.duration}>{episode.duration}</Text>
          </View>
          <AntDesign name="download" size={24} />
        </View>
        {!hidePlot && <Text style={styles.plot}>{episode.plot}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    height: 75,
    aspectRatio: 16 / 9,
    resizeMode: 'cover',
    borderRadius: 3,
  },
  titleContainer: {
    flex: 1,
    padding: 5,
  },
  title: {
    //    color: 'darkgrey',
    // fontSize: 18,
  },
  duration: {
    color: 'darkgrey',
    fontSize: 10,
  },
  plot: {
    marginVertical: 10,
    color: 'grey',
  },
});

export default EpisodeCard;
