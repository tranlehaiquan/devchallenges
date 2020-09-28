import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    brand: PaletteColor;
  }

  interface PaletteOptions {
    brand: PaletteColorOptions;
  }
}
// Create a theme instance.
const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: '#1A9AF0',
      },
      brand: {
        main: '#EB5757',
      },
      background: {
        default: '#fff',
      },
    },
    typography: {
      fontFamily: [
        'Mulish',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },
  })
);

export default theme;
