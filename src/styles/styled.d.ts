import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      second: string;
      textDark: string;
      text: string;
      background: string;
      border: string;
    };
  }
}
