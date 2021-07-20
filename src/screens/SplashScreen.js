import React, {useEffect} from 'react';
import {SafeAreaView, FlatList, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {fetchActionMovies} from '../store/actions';
import Category from '../components/Category';
import categories from '../../assets/data/categories';
import SplashIcon from '../../assets/svgs/splash';
const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchActionMovies());
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <SplashIcon />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
