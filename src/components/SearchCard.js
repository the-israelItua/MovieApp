import React from 'react';
import {View, Text, Image, StyleSheet, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';

const SearchCard = ({searchItem}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate('Details', {movieId: searchItem.id})}>
      <View>
        <View style={styles.row}>
          <Image style={styles.image} source={{uri: searchItem.poster}} />
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{searchItem.name}</Text>
          </View>
          <AntDesign name="download" size={24} />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 7,
    backgroundColor: '#fff',
    borderRadius: 4,
    paddingRight: 8,
    height: 110,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  image: {
    height: '100%',
    aspectRatio: 12 / 9,
    resizeMode: 'cover',
    borderRadius: 3,
  },
  titleContainer: {
    flex: 1,
    padding: 5,
  },
  title: {},
  duration: {
    color: 'darkgrey',
    fontSize: 10,
  },
  plot: {
    marginVertical: 10,
    color: 'grey',
  },
});

export default SearchCard;
