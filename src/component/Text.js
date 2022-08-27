import React from 'react';
import {Text as DefaultText} from 'react-native';
import {Colors, Fonts, Metrics} from '../themes';

export function Text(props) {
  const {children, style, ...restProps} = props;
  return (
    <DefaultText
      style={[
        {
          fontFamily: Fonts.type.regular,
          fontSize: Metrics.scaleSize(16),
          lineHeight: Metrics.scaleSize(25),
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
          fontFamily: Fonts.type.semiBold,
          fontSize: Metrics.scaleSize(24),
          lineHeight: Metrics.scaleSize(29),
          fontWeight: '600',
        },
        style,
      ]}
      {...restProps}>
      {children}
    </Text>
  );
}
