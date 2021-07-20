import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View,
  Pressable,
  SafeAreaView,
  ActivityIndicator,
} from 'react-native';
import {useRoute} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {fetchSelectedMovie} from '../store/actions';
import Category from '../components/Category';
import VideoPlayer from '../components/VideoPlayer';
import EpisodeCard from '../components/EpisodeCard';
import movie from '../../assets/data/movie';
import ErrorIcon from '../../assets/svgs/empty';

const DetailsScreen = () => {
  const [loading, setLoading] = useState(false);
  const route = useRoute();
  const dispatch = useDispatch();

  const movieId = route.params.movieId;

  useEffect(() => {
    setLoading(true);
    dispatch(fetchSelectedMovie(movieId, () => setLoading(false)));
  }, []);

  const details = useSelector(state => state.movies.selectedMovie);
  const fetchError = useSelector(state => state.movies.detailsFetchError);

  return (
    <SafeAreaView style={{flex: 1}}>
      {loading ? (
        <View>
          <View style={styles.emptyVideo}>
            {!fetchError && <ActivityIndicator />}
          </View>
          <View style={styles.emptyDetails}>
            {fetchError ? (
              <View style={styles.error}>
                <ErrorIcon />
                <Text>A error occurred.</Text>
                <Text>Check your iternet connectivity</Text>
              </View>
            ) : (
              <>
                <Text>{fetchError}</Text>
                <ActivityIndicator />
              </>
            )}
          </View>
        </View>
      ) : (
        <>
          <VideoPlayer videoId={details.videos?.results[0].key} />
          <ScrollView>
            <View style={{padding: 12}}>
              <Text style={styles.title}>{details.title}</Text>
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

              <Text style={styles.plot}>{details.overview}</Text>
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
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  emptyVideo: {
    backgroundColor: 'black',
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyDetails: {
    width: '100%',
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  barContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 24,
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
  },
  iconButtonText: {
    color: 'grey',
    marginTop: 10,
  },
  error: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailsScreen;
