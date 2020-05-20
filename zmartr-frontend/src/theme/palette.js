import { colors } from '@material-ui/core';

// Red (Main) : #F76C6C
// Orange : #F27D42
// DBlue (Text)  : #243053
// LBlue  : #A8D0E6


const white = '#FFFFFF';

export default {
  primary: {
    contrastText: white,
    dark: '#3f3f44',
    main: '#3f3f44',
    light: colors.indigo[100],
  },
  secondary: {
    contrastText: white,
    dark: colors.blue[900],
    main: '#022449',
    light: colors.blue.A400,
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400],
  },
  text: {
    primary: '#3f3f44',
    h1: '#edf5e1',
    link: colors.blue[600],
    light: '#fff',
    dark: '#3f3f44',
  },
  link: colors.blue[800],
  icon: colors.blueGrey[600],
  background: {
    gray: '#3f3f44',
    drag: '#A8DDEA',
    paper: white,
    white: '#ffffff',
  },
  divider: colors.grey[200],
};
