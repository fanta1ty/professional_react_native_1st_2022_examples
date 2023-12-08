import {IGenre} from '../../@types/IGenre';
import {IMovie} from '../../@types/IMovie';
import React, {useEffect, useState} from 'react';
import {getMovieByGenreId} from '../../services/movieservice';
import ScrollContainer from '../../containers/ScrollContainer';
import {Pressable, StyleSheet, Text} from 'react-native';
import Header from '../../components/Header';

interface GenreProps {
  genre: IGenre | undefined;
  backToHome: () => void;
  chooseMovie: (movie: IMovie) => void;
}

const Genre = (props: GenreProps) => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    if (typeof props.genre !== 'undefined') {
      setMovies(getMovieByGenreId(props.genre.id));
    }
  }, [props.genre]);

  return (
    <ScrollContainer>
      <Pressable onPress={props.backToHome} style={styles.backButton}>
        <Text>Back to home</Text>
      </Pressable>
      <Header text="Movies" />
      {movies.map(movie => {
        return (
          <Pressable onPress={() => props.chooseMovie(movie)}>
            <Text style={styles.movieTitle}>{movie.title}</Text>
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
  backButton: {
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#dddddd',
  },
  movieTitle: {
    fontSize: 14,
    marginBottom: 2,
    padding: 16,
    backgroundColor: '#eaeaea',
  },
});

export default Genre;
