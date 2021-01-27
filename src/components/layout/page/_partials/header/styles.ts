import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.header`
  position: relative;
  display: flex;
  align-items: center;

  margin-bottom: 24px;

  h1 {
    flex: 1;
  }

  z-index: ${props => props.theme.index.header};
`;


export const NewLinkContainer = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  height: ${props => props.theme.buttons.height.regular};
  width: ${props => props.theme.buttons.height.regular};
  border-radius: 50%;
  
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.light};
  transition: background 0.3;

  &:hover, &:active, &:focus {
    background-color: ${props => darken(0.1, props.theme.colors.primary)};
    color: ${props => props.theme.colors.light};
  }
`;