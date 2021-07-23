import React, {useEffect, useState, useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {searchForMovie} from '../store/actions';
import SearchCard from '../components/SearchCard';
import movie from '../../assets/data/movie';

const SearchScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const searchedMovies = useSelector(state => state.movies.searchedMovies);

  const onSearch = () => {
    dispatch(searchForMovie(searchTerm, () => setSearchTerm('')));
  };

  return (
    <View>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchContainer}>
          <AntDesign
            name="arrowleft"
            color="grey"
            size={24}
            onPress={() => navigation.navigate('Home')}
          />
          <TextInput
            placeholder="Enter movie title"
            style={styles.input}
            value={searchTerm}
            onChangeText={text => setSearchTerm(text)}
            returnKeyLabel="search"
            returnKeyType="search"
            enablesReturnKeyAutomatically={true}
            onSubmitEditing={onSearch}
            ref={inputRef}
          />
          {searchTerm.length > 0 && (
            <AntDesign
              name="close"
              color="grey"
              size={24}
              onPress={() => setSearchTerm('')}
            />
          )}
        </View>
      </SafeAreaView>
      {searchedMovies.length === 0 ? (
        <View style={styles.body}>
          <MaterialCommunityIcons
            name="movie-search-outline"
            color="grey"
            size={64}
            onPress={() => setSearchTerm('')}
          />

          <Text style={styles.bodyText}>Search movie keyword</Text>
        </View>
      ) : (
        <ScrollView style={{marginTop: 10}}>
          {searchedMovies.map(movie => (
            <SearchCard searchItem={movie} key={movie.id} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    backgroundColor: 'white',
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
  },
  input: {
    flex: 1,
    marginHorizontal: 10,
    fontSize: 18,
  },
  body: {
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodyText: {
    color: 'grey',
    marginTop: 24,
  },
});

export default SearchScreen;
