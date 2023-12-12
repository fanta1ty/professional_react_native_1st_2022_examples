import React from 'react-native';
import {
  ColorConstants,
  FontConstants,
  SizeConstants,
} from '../constants/StyleConstants.ts';
import styled from 'styled-components/native';

interface HeaderProps {
  text: string;
}

const Header = (props: HeaderProps) => {
  return <StyledText>{props.text}</StyledText>;
};

const StyledText = styled.Text`
  font-size: ${FontConstants.sizeTitle};
  font-weight: ${FontConstants.weightBold};
  margin-bottom: ${SizeConstants.paddingLarge};
  color: ${ColorConstants.font};
`;

export default Header;
