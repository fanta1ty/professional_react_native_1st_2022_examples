import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../@types/Stacks';
import React, {Pressable, StyleSheet, Text, View} from 'react-native';
import {ColorConstants, FontConstants} from '../../constants/StyleConstants.ts';
import ScrollContainer from '../../containers/ScrollContainer.tsx';
import Header from '../../components/Header.tsx';
import {useUser} from '../../context/UserContext.tsx';

type MovieProps = NativeStackScreenProps<MainStackParamList, 'Movie'>;

const Movie = (props: MovieProps) => {
  const {isFav, addFavById, removeFav} = useUser();
  const _isFav = isFav(props.route.params.movie.id);

  return (
    <ScrollContainer>
      {props.route.params.movie ? (
        <>
          <View>
            <Header text={props.route.params.movie.title} />
            <Text style={styles.overview}>
              {props.route.params.movie.overview}
            </Text>
          </View>
          <Pressable
            style={styles.pressableContainer}
            onPress={
              _isFav
                ? () => removeFav(props.route.params.movie.id)
                : () => addFavById(props.route.params.movie.id)
            }>
            <Text style={styles.pressableText}>
              {_isFav ? '👎 Remove from favs' : '👍 Add to favs'}
            </Text>
          </Pressable>
        </>
      ) : undefined}
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  overview: {
    fontSize: FontConstants.sizeRegular,
    color: ColorConstants.font,
  },
  pressableContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginTop: 4,
    borderRadius: 4,
    backgroundColor: ColorConstants.backgroundLight,
  },
  pressableText: {
    color: ColorConstants.font,
  },
});
export default Movie;
