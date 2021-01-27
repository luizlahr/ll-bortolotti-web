import { darken, transparentize } from 'polished';
import styled, { css } from 'styled-components';
import { AntSelectReset } from 'styles/resets';

interface ContainerProps {
  hasFocus: boolean;
  disabled: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  padding: 0 8px;

  max-width: 100%;

  border: ${props => `
    ${props.theme.forms.inputs.border.size}
    ${props.theme.forms.inputs.border.style} 
    ${props.theme.forms.inputs.border.color}
  `};

  border-radius: ${props => props.theme.border.radius.medium};
  
  height: ${props => props.theme.forms.inputs.height};

  ${props => props.hasFocus && css`
    box-shadow: none !important;
    border-color: ${props => props.theme.forms.inputs.highlight.border.color};
  `};

  ${props => props.disabled && css`
    .ant-select-selection-item {
      color: ${props.theme.colors.text.medium};
    }
    background-color: ${props.theme.colors.secondary}; 
    cursor: not-allowed;
  `};

  ${AntSelectReset};
`;
