import styled from 'styled-components';

export const Container = styled.h6`
  display: flex;
  width: 100%;

  margin: 0 0 ${props => props.theme.spacing[4]};

  &::not(::first-of-type) {
    margin: ${props => props.theme.spacing[5]} 0 ${props => props.theme.spacing[4]};
  }
`;
