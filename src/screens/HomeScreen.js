import React from 'react';
import {SafeAreaView, FlatList} from 'react-native';
import Category from '../components/Category';
import categories from '../../assets/data/categories';

const HomeScreen = () => {
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
