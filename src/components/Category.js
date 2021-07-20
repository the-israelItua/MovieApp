import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import Poster from './Poster';
import categories from '../../assets/data/categories';
import {IMAGE_URL} from '@env';

const Category = ({category, title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={category}
        renderItem={({item}) => (
          <Poster image={`${IMAGE_URL}${item.poster_path}`} movieId={item.id} />
        )}
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
