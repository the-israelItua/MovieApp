import React from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View,
  Pressable,
  SafeAreaView,
} from 'react-native';
import Category from '../components/Category';
import EpisodeCard from '../components/EpisodeCard';
import movie from '../../assets/data/movie';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

const DetailsScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Image
        source={{uri: movie.seasons.items[0].episodes.items[0].poster}}
        style={styles.image}
      />
      <ScrollView>
        <View style={{padding: 12}}>
          <Text style={styles.title}>{movie.title}</Text>
          <View style={styles.barContainer}>
            <Text style={styles.match}>98% match</Text>
            <Text style={styles.year}>{movie.year}</Text>
            <View style={styles.ageContainer}>
              <Text style={styles.age}>12+</Text>
            </View>
            <Text>{movie.numberOfSeasons} Seasons</Text>
            <MaterialIcons name="hd" size={24} />
          </View>

          <Pressable style={styles.play}>
            <Entypo name="controller-play" size={24} />
            <Text style={styles.playText}>Play</Text>
          </Pressable>

          <Pressable style={styles.download}>
            <AntDesign name="download" size={24} color="white" />
            <Text style={styles.downloadText}>Download</Text>
          </Pressable>

          <Text style={styles.plot}>{movie.plot}</Text>
          <Text style={styles.cast}>Cast: {movie.cast}</Text>

          <View style={styles.iconContainer}>
            <View style={styles.iconButton}>
              <AntDesign name="plus" size={24} />
              <Text style={styles.iconButtonText}>My List</Text>
            </View>

            <View style={styles.iconButton}>
              <Feather name="thumbs-up" size={24} />
              <Text style={styles.iconButtonText}>Rate</Text>
            </View>

            <View style={styles.iconButton}>
              <Ionicons name="share-social" size={24} />
              <Text style={styles.iconButtonText}>Share</Text>
            </View>
          </View>
        </View>
        {movie.seasons.items[0].episodes.items.map(episode => (
          <EpisodeCard episode={episode} key={episode.id} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    aspectRatio: 5 / 3,
    resizeMode: 'cover',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  barContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  match: {
    color: '#00aa00',
    fontWeight: 'bold',
  },
  year: {
    color: '#757575',
  },
  ageContainer: {
    backgroundColor: '#e6e229',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
    paddingHorizontal: 12,
  },
  age: {
    color: 'black',
    fontWeight: 'bold',
  },
  play: {
    flexDirection: 'row',
    backgroundColor: '#B8B8B8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    borderRadius: 4,
    marginVertical: 5,
  },
  playText: {
    fontSize: 18,
    marginLeft: 10,
  },
  download: {
    flexDirection: 'row',
    backgroundColor: '#2b2b2b',
    justifyContent: 'center',
    alignItems: 'center',
    height: 44,
    borderRadius: 4,
    marginVertical: 5,
  },
  downloadText: {
    fontSize: 18,
    color: 'white',
    marginLeft: 10,
  },
  plot: {
    marginVertical: 10,
    fontSize: 16,
  },
  cast: {
    color: 'grey',
  },
  iconContainer: {
    flexDirection: 'row',
  },
  iconButton: {
    marginHorizontal: 20,
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // borderBottomWidth: 3,
    // borderBottomColor: 'red',
    // width: 60,
  },
  iconButtonText: {
    color: 'grey',
    marginTop: 10,
  },
});

export default DetailsScreen;
