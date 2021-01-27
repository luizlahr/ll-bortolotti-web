import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  height: 100%;

  label {
    font-family: ${props => props.theme.forms.inputs.radio.label.fontFamily};
    font-weight: ${props => props.theme.forms.inputs.radio.label.fontWeight};
  }

  .ant-radio-checked .ant-radio-inner {
    border-color: ${props => props.theme.forms.inputs.border.color};
  }

  .ant-radio-inner::after {
    background-color: ${props => props.theme.colors.primary};
  }
`;
