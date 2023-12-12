import React, {StyleSheet, Text, View} from 'react-native';
import {
  ColorConstants,
  FontConstants,
  SizeConstants,
} from '../../constants/StyleConstants.ts';

const User = () => {
  return (
    <View style={styles.placeholderContainer}>
      <Text style={styles.placeholder}>We will create user area here.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  placeholderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: ColorConstants.background,
  },
  placeholder: {
    fontSize: FontConstants.sizeRegular,
    marginBottom: SizeConstants.paddingSmall,
    padding: SizeConstants.paddingLarge,
    color: ColorConstants.font,
  },
});

export default User;
