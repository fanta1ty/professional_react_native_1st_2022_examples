import React, {Pressable, StyleSheet, Text} from 'react-native';
import {useEffect, useState} from 'react';
import {IGenre} from '../../@types/IGenre';
import {getGenres} from '../../services/movieService.ts';
import ScrollContainer from '../../containers/ScrollContainer.tsx';
import {
  ColorConstants,
  FontConstants,
  SizeConstants,
} from '../../constants/StyleConstants.ts';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../@types/Stacks';

type HomeProps = NativeStackScreenProps<MainStackParamList, 'Home'>;

const Home = (props: HomeProps) => {
  const [genres, setGenres] = useState<IGenre[]>([]);

  useEffect(() => {
    setGenres(getGenres());
  }, []);

  return (
    <ScrollContainer>
      {genres.map(genre => {
        return (
          <Pressable
            onPress={() => props.navigation.navigate('Genre', {genre: genre})}>
            <Text style={styles.genreTitle}>{genre.name}</Text>
          </Pressable>
        );
      })}
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  genreTitle: {
    fontSize: FontConstants.sizeRegular,
    marginBottom: SizeConstants.paddingSmall,
    padding: SizeConstants.paddingLarge,
    backgroundColor: ColorConstants.backgroundLight,
    color: ColorConstants.font,
  },
});
export default Home;
