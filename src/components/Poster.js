import React from 'react';
import {Pressable, Text, Image, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Poster = ({image}) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() => navigation.navigate('Details')}
      style={styles.container}>
      <Image
        style={styles.poster}
        source={{
          uri: image,
        }}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 5,
  },
  poster: {
    width: 150,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 5,
  },
});

export default Poster;
