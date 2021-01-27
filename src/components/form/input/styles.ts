import styled, { css } from 'styled-components';
import { AntInputReset } from 'styles/resets';

interface ContainerProps {
  hasFocus: boolean;
  disabled: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  align-items: center;

  border: ${props => `${props.theme.forms.inputs.border.size} ${props.theme.forms.inputs.border.style} ${props.theme.forms.inputs.border.color}`};
  height: ${props => props.theme.forms.inputs.height};
  border-radius: ${props => props.theme.border.radius.medium};

  ${props => props.hasFocus && css`
    box-shadow: ${props => props.theme.forms.inputs.highlight.boxShadow};
    border-color: ${props => props.theme.forms.inputs.highlight.border.color};
  `};

  ${props => props.disabled && css`
    background-color: ${props.theme.colors.secondary}; 
    cursor: not-allowed;

    input[disabled] {
      color: ${props.theme.colors.text.medium};
      cursor: not-allowed;
    }
  `};

  ${AntInputReset};
`;
