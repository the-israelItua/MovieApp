import React, {useEffect} from 'react';
import {SafeAreaView, FlatList, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  fetchActionMovies,
  fetchAdventureMovies,
  fetchSciFiMovies,
  fetchDocumentaryMovies,
  fetchAnimationMovies,
} from '../store/actions';
import Category from '../components/Category';
import categories from '../../assets/data/categories';

const SplashScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchActionMovies());
    dispatch(fetchAdventureMovies());
    dispatch(fetchAnimationMovies());
    dispatch(fetchSciFiMovies());
    dispatch(fetchDocumentaryMovies());
  }, []);

  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="movie-roll" color="#e91e63" size={64} />
      <Text style={styles.roll}>HD-Roll</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  roll: {
    fontSize: 24,
    marginTop: 12,
    color: '#e91e63',
  },
});

export default SplashScreen;
