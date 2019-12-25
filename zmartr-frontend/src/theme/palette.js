import { colors } from '@material-ui/core';

// Dark   : #022449
// Orange : #F27D42
// DBlue  : #558DCA
// LBlue  : #96FFFF
// Gray   : #C8EFF9


const white = '#FFFFFF';

export default {
  primary: {
    contrastText: white,
    dark: "#022449",
    main: '#F27D42',
    light: colors.indigo[100]
  },
  secondary: {
    contrastText: white,
    dark: colors.blue[900],
    main: '#022449',
    light: colors.blue.A400
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: colors.red[600],
    light: colors.red[400]
  },
  text: {
    primary: '#05386b',
    h1: "#edf5e1",
    link: colors.blue[600]
  },
  link: colors.blue[800],
  icon: colors.blueGrey[600],
  background: {
    gray: '#C8EFF9',
    paper: white
  },
  divider: colors.grey[200]
};
