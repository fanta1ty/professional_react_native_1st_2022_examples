import ScrollContainer from '../../containers/ScrollContainer.tsx';
import React, {StyleSheet, Text, View} from 'react-native';
import Header from '../../components/Header.tsx';
import {ColorConstants, FontConstants} from '../../constants/StyleConstants.ts';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {MainStackParamList} from '../../@types/Stacks';

type MovieProps = NativeStackScreenProps<MainStackParamList, 'Movie'>;

const Movie = (props: MovieProps) => {
  return (
    <ScrollContainer>
      {props.route.params.movie ? (
        <View>
          <Header text={props.route.params.movie.title} />
          <Text style={styles.overview}>
            {props.route.params.movie.overview}
          </Text>
        </View>
      ) : undefined}
    </ScrollContainer>
  );
};

const styles = StyleSheet.create({
  overview: {
    fontSize: FontConstants.sizeRegular,
    color: ColorConstants.font,
  },
});

export default Movie;
