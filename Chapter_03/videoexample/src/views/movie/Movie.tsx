import {IMovie} from '../../@types/IMovie';
import ScrollContainer from '../../containers/ScrollContainer';
import React, {Pressable, StyleSheet, Text, View} from 'react-native';
import Header from '../../components/Header';

interface MovieProps {
  movie: IMovie | undefined;
  backToGenre: () => void;
}

const Movie = (props: MovieProps) => {
  return (
    <ScrollContainer>
      <Pressable onPress={props.backToGenre} style={styles.backButton}>
        <Text>Back to genre</Text>
      </Pressable>
      {props.movie ? (
        <View>
          <Header text={props.movie.title} />
          <Text style={styles.overview}>{props.movie.overview}</Text>
        </View>
      ) : undefined}
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  backButton: {
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#dddddd',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  overview: {
    fontSize: 14,
  },
});

export default Movie;
