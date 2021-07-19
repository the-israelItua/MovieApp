import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import Poster from './Poster';
import categories from '../../assets/data/categories';

const Category = ({category}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{category.title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={category.movies}
        renderItem={({item}) => <Poster image={item.poster} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 8,
  },
});

export default Category;
