import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import {fetchActionMovies} from '../store/actions';
import Category from '../components/Category';
import categories from '../../assets/data/categories';

const HomeScreen = () => {
  const {action, adventure, scifi, documentary, animation} = useSelector(
    state => state.movies,
  );

  return (
    <SafeAreaView>
      <ScrollView>
        <Category category={adventure} title="Adventure Movies" />
        <Category category={action} title="Action Movies" />
        <Category category={scifi} title="Science Fictions" />
        <Category category={animation} title="Animation Movies" />
        <Category category={documentary} title="Documentaries" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
