import { createGlobalStyle } from "styled-components";
import { theme } from './theme'

export default createGlobalStyle`

  html {
    overflow: hidden;
  }

  #__next {
    position: relative;
    display: flex;
    height: 100%;
  }

  font-family: ${theme.type.text.family};

  h1 {
    font-family: ${theme.type.heading.h1.family};
    font-size: ${theme.type.heading.h1.size};
    line-height: ${theme.type.heading.h1.lineHeight};
    margin: ${theme.type.heading.h1.margin};
  }

  h2 {
    font-family: ${theme.type.heading.h2.family};
    font-size: ${theme.type.heading.h2.size};
    line-height: ${theme.type.heading.h2.lineHeight};
    margin: ${theme.type.heading.h2.margin};
  }

  h3 {
    font-family: ${theme.type.heading.h3.family};
    font-size: ${theme.type.heading.h3.size};
    line-height: ${theme.type.heading.h3.lineHeight};
    margin: ${theme.type.heading.h3.margin};
  }

  h4 {
    font-family: ${theme.type.heading.h4.family};
    font-size: ${theme.type.heading.h4.size};
    line-height: ${theme.type.heading.h4.lineHeight};
    margin: ${theme.type.heading.h4.margin};
  }

  h5 {
    font-family: ${theme.type.heading.h5.family};
    font-size: ${theme.type.heading.h5.size};
    line-height: ${theme.type.heading.h5.lineHeight};
    margin: ${theme.type.heading.h5.margin};
  }

  h6 {
    font-family: ${theme.type.heading.h6.family};
    font-size: ${theme.type.heading.h6.size};
    line-height: ${theme.type.heading.h6.lineHeight};
    margin: ${theme.type.heading.h6.margin};
  }

  h1, h2, h3, h4, h5, h6 {
    display: flex;
    color: ${theme.colors.text.dark};
  }

  button {
    &:focus, &:active {
      box-shadow: none;
      outline: none;
    }
  }

  input {
    &:focus, &:active {
      outline: none;
    }
  }
`;