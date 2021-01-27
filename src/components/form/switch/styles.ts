import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 100%;

  label {
    font-family: ${props => props.theme.forms.inputs.radio.label.fontFamily};
    font-size: ${props => props.theme.forms.inputs.radio.label.fontSize};
    font-weight: ${props => props.theme.forms.inputs.radio.label.fontWeight};
  }

  .ant-switch {
    background-color: ${props => props.theme.colors.terciary};
    
    .ant-switch-inner {
      color: ${props => props.theme.colors.text.dark};
    }
  }

  .ant-switch-checked {
    background-color: ${props => props.theme.colors.primary};

    .ant-switch-inner {
      color: ${props => props.theme.colors.light};
    }
  }
`;
