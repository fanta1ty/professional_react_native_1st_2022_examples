import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../@types/Stacks';
import React, {Pressable, StyleSheet, Text} from 'react-native';
import {
  ColorConstants,
  FontConstants,
  SizeConstants,
} from '../../constants/StyleConstants.ts';
import {useEffect, useState} from 'react';
import {IMovie} from '../../@types/IMovie';
import {getMovieByGenreId} from '../../services/movieService.ts';
import ScrollContainer from '../../containers/ScrollContainer.tsx';
import {useUser} from '../../context/UserContext.tsx';

type GenreProps = NativeStackScreenProps<MainStackParamList, 'Genre'>;

const Genre = (props: GenreProps) => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const {isFav} = useUser();

  useEffect(() => {
    if (typeof props.route.params.genre !== 'undefined') {
      setMovies(getMovieByGenreId(props.route.params.genre.id));
    }
  }, [props.route.params.genre]);

  return (
    <ScrollContainer>
      {movies.map(movie => (
        <Pressable
          style={styles.movieTitleContainer}
          onPress={() => props.navigation.navigate('Movie', {movie: movie})}>
          {isFav(movie.id) ? (
            <Text style={styles.movieTitleFav}>👍</Text>
          ) : undefined}
          <Text style={styles.movieTitle}>{movie.title}</Text>
        </Pressable>
      ))}
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  movieTitleContainer: {
    marginBottom: SizeConstants.paddingSmall,
    padding: SizeConstants.paddingLarge,
    backgroundColor: ColorConstants.backgroundLight,
    flexDirection: 'row',
  },
  movieTitleFav: {
    marginRight: 4,
  },
  movieTitle: {
    fontSize: FontConstants.sizeRegular,
    color: ColorConstants.font,
  },
});
export default Genre;
