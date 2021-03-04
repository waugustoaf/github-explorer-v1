import 'styled-components';

// and extend it
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      [propName: string]: string;
    };
    breakpoints: {
      [propName: string]: string;
    };
    fontSizes: {
      [propName: string]: string;
    };
    fonts: string[];
  }
}
