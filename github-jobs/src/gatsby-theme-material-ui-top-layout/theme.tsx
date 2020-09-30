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
        default: '#f6f7fb',
      },
      text: {
        primary: '#334680'
      }
    },
    typography: {
      fontFamily: [
        'Roboto',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
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
