import {IGenre} from '../../@types/IGenre';
import React, {useEffect, useState} from 'react';
import {getGenres} from '../../services/movieservice';
import ScrollContainer from '../../containers/ScrollContainer';
import Header from '../../components/Header';
import {Pressable, StyleSheet, Text} from 'react-native';

interface HomeProps {
  chooseGenre: (genre: IGenre) => void;
}

const Home = (props: HomeProps) => {
  const [genres, setGenre] = useState<IGenre[]>([]);

  useEffect(() => {
    setGenre(getGenres());
  }, []);

  return (
    <ScrollContainer>
      <Header text="Movie Genres" />
      {genres.map(genre => {
        return (
          <Pressable onPress={() => props.chooseGenre(genre)}>
            <Text style={styles.genreTitle}>{genre.name}</Text>
          </Pressable>
        );
      })}
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  genreTitle: {
    fontSize: 14,
    marginBottom: 2,
    padding: 16,
    backgroundColor: '#eaeaea',
  },
});
export default Home;
