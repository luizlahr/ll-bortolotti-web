import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  width: 100%;
  max-width: 250px;

  input { 
    display: flex;
    flex: 1;
    align-items: center;
    color: ${props => props.theme.colors.text.dark};
    background-color: ${props => props.theme.colors.secondary};
    border: none;
    padding: 0 ${props => props.theme.spacing[2]};

    width: 100%;

    height: ${props => props.theme.forms.inputs.height};
    border-radius: ${props => props.theme.border.radius.large};
    margin-right: ${props => props.theme.spacing[1]};

    &::placeholder {
      color: ${props => darken(0.1, props.theme.colors.text.light)};
    }
  }
`;
