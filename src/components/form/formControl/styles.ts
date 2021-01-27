import { transparentize } from 'polished';
import styled, { css } from 'styled-components';

interface ContainerProps {
  hasError: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;

  margin-bottom: ${props => props.theme.spacing[3]};
  width: 100%;
  max-width: 100%;

  label {
    font-weight: ${props => props.theme.forms.labels.fontWeight};
    font-size: ${props => props.theme.forms.labels.fontSize};
    margin-bottom: ${props => props.theme.forms.labels.marginBottom};
  }

  .ll-form-conrtol-error {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;

    color: ${props => props.theme.forms.errors.color};
    font-size: ${props => props.theme.forms.errors.fontSize};
    margin-top: ${props => props.theme.forms.errors.marginTop};
  }

  ${props => props.hasError && css`
    label { 
      color: ${props => props.theme.forms.errors.color};
    }

    .ll-input{
      border: ${props => props.theme.forms.errors.input.border};

      .ant-input {
        color: ${props => props.theme.forms.errors.input.color};
      }
    }

    .ll-input-focused {
      box-shadow: 0 0 0 2px ${props => transparentize(0.8, props.theme.colors.danger)};
    }
  `}
`;
