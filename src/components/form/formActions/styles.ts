import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;

  font-size: 20px;
  font-weight: bold;
  
  margin: ${props => props.theme.spacing[5]} 0 0;

  .ll-button + .ll-button {
    margin-right: ${props => props.theme.spacing[1]};
  }
`;
