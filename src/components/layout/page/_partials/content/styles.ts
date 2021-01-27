import styled from 'styled-components';

export const Container = styled.main`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: column;

  z-index: ${props => props.theme.index.content};
`;
