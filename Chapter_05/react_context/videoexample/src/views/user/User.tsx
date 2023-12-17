import React, {Pressable, StyleSheet, Text} from 'react-native';
import {
  ColorConstants,
  FontConstants,
  SizeConstants,
} from '../../constants/StyleConstants.ts';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {UserStackParamList} from '../../@types/Stacks';
import {useUser} from '../../context/UserContext.tsx';
import ScrollContainer from '../../containers/ScrollContainer.tsx';

type UserProps = NativeStackScreenProps<UserStackParamList, 'User'>;

const User = (props: UserProps) => {
  const {getFavsAsArray} = useUser();
  const _favsArray = getFavsAsArray();
  return (
    <ScrollContainer>
      {_favsArray.map(movie => {
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

export default User;
