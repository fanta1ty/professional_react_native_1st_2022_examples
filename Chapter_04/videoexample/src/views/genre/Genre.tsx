import {IMovie} from '../../@types/IMovie';
import {useEffect, useState} from 'react';
import {getMovieByGenreId} from '../../services/movieService.ts';
import ScrollContainer from '../../containers/ScrollContainer.tsx';
import React, {Pressable, StyleSheet, Text} from 'react-native';
import {
  ColorConstants,
  FontConstants,
  SizeConstants,
} from '../../constants/StyleConstants.ts';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../@types/Stacks';

type GenreProps = NativeStackScreenProps<MainStackParamList, 'Genre'>;

const Genre = (props: GenreProps) => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    if (typeof props.route.params.genre !== 'undefined') {
      setMovies(getMovieByGenreId(props.route.params.genre.id));
    }
  }, [props.route.params.genre]);

  return (
    <ScrollContainer>
      {movies.map(movie => {
        return (
          <Pressable
            onPress={() => props.navigation.navigate('Movie', {movie: movie})}>
            <Text style={styles.movieTitle}>{movie.title}</Text>
          </Pressable>
        );
      })}
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  movieTitle: {
    fontSize: FontConstants.sizeRegular,
    marginBottom: SizeConstants.paddingSmall,
    padding: SizeConstants.paddingLarge,
    backgroundColor: ColorConstants.backgroundLight,
    color: ColorConstants.font,
  },
});
export default Genre;
