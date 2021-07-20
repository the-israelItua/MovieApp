import React, {useEffect} from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fetchActionMovies} from '../store/actions';
import Category from '../components/Category';
import categories from '../../assets/data/categories';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const {action} = useSelector(state => state.movies);

  return (
    <SafeAreaView>
      {/* <FlatList
        data={categories.items}
        renderItem={({item}) => <Category category={item} />}
      /> */}
      <Category category={action} title="Action" />
    </SafeAreaView>
  );
};

export default HomeScreen;
