import React from 'react';
import YouTube from 'react-native-youtube';

const Poster = ({videoId}) => {
  return (
    <YouTube
      videoId={videoId}
      play
      fullscreen
      loop
      // onReady={() => onReady(true)}
      //   onChangeState={e => this.setState({status: e.state})}
      //   onChangeQuality={e => this.setState({quality: e.quality})}
      //   onError={e => this.setState({error: e.error})}
      style={{alignSelf: 'stretch', height: 300, backgroundColor: 'black'}}
    />
  );
};

export default Poster;
