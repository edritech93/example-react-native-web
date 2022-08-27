import React from 'react';
import {Text as DefaultText} from 'react-native';
import {Colors, Fonts} from '../themes';

export function Text(props) {
  const {children, style, ...restProps} = props;
  return (
    <DefaultText
      style={[
        {
          // fontFamily: Fonts.type.regular,
          fontSize: 16,
          lineHeight: 25,
          color: Colors.textBackground,
        },
        style,
      ]}
      {...restProps}>
      {children}
    </DefaultText>
  );
}

export function Title(props) {
  const {children, style, ...restProps} = props;
  return (
    <Text
      style={[
        {
          // fontFamily: Fonts.type.semiBold,
          fontSize: 24,
          lineHeight: 29,
          fontWeight: '600',
        },
        style,
      ]}
      {...restProps}>
      {children}
    </Text>
  );
}
