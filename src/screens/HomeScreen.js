import React, {useEffect} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {useDispatch} from 'react-redux';
import {fetchActionMovies} from '../store/actions';
import Category from '../components/Category';
import categories from '../../assets/data/categories';

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchActionMovies());
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={categories.items}
        renderItem={({item}) => <Category category={item} />}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;
