import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';

const darkTheme = {
  type: 'dark',
  primary: {
    main: green[600],
    light: green[100],
    dark: green[900],
    contrastText: '#ffffff',
  },
  secondary: {
    main: red[600],
    light: red[100],
    dark: red[900],
    contrastText: '#ffffff',
  },
  text: {
    primary: '#ffffff',
    secondary: '#ffffff',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)',
  },
  background: {
    paper: '#424242',
    default: '#2a2a2a',
  },
  contrastThreshold: 3,
  tonalOffset: 0.2,
};
const lightTheme = {
  type: 'light',
  primary: {
    main: green[600],
    light: green[100],
    dark: green[900],
    contrastText: '#000000',
  },
  secondary: {
    main: red[600],
    light: red[100],
    dark: red[900],
    contrastText: '#000000',
  },
  text: {
    primary: '#000000',
    secondary: '#000000',
    disabled: 'rgba(255, 255, 255, 0.5)',
    hint: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)',
  },
  background: {
    paper: '#e0e0e0',
    default: '#aeaeae',
  },
  contrastThreshold: 3,
  tonalOffset: 0.2,
};
export { darkTheme, lightTheme };
