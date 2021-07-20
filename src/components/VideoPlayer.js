import React from 'react';
import {Pressable, Text, Image, StyleSheet} from 'react-native';
import YouTube from 'react-native-youtube';

const Poster = ({episode}) => {
  return (
    <YouTube
      videoId="KVZ-P-ZI6W4"
      play
      fullscreen
      loop
      //   onReady={e => this.setState({isReady: true})}
      //   onChangeState={e => this.setState({status: e.state})}
      //   onChangeQuality={e => this.setState({quality: e.quality})}
      //   onError={e => this.setState({error: e.error})}
      style={{alignSelf: 'stretch', height: 300}}
    />
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
