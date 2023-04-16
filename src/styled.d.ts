import 'styled-components';
interface IPalette {
  main: string;
  contrastText: string;
}
declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: {
      desktop: string;
      laptop: string;
      tabletLan: string;
      tabletPor: string;
      mobile: string;
    };
    colors: {
      [key: string]: string;
      blue: string;
      red: string;
      yellow: string;
      black: string;
      white: string;
    };
  }
}
