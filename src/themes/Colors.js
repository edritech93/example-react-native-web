import {Appearance} from 'react-native';

const isDarkMode = Appearance.getColorScheme() === 'dark';

const Colors = {
  primary: '#3474F0',
  primaryDark: '#345BF0',
  accent: '#50C7F6',
  black: '#000',
  white: '#fff',
  textDark: '#171B2E',
  divider: 'rgba(23, 27, 46, 0.2)',
  red: 'red',
  background: isDarkMode ? '#121212' : 'white',
  textBackground: isDarkMode ? 'white' : 'black',
};

export default Colors;
