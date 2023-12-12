import React, {Pressable, StyleSheet, Text} from 'react-native';
import {ColorConstants, SizeConstants} from '../constants/StyleConstants.ts';

interface BackButtonProps {
  text: string;
  onPress: () => void;
}

const BackButton = (props: BackButtonProps) => {
  return (
    <Pressable onPress={props.onPress} style={styles.backButton}>
      <Text>{props.text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  backButton: {
    padding: SizeConstants.paddingLarge,
    marginBottom: SizeConstants.paddingLarge,
    backgroundColor: ColorConstants.backgroundMedium,
  },
});
export default BackButton;
