import styled from 'styled-components'

export const Layout = styled.section`
  position: relative;
  display: flex;
  flex: 1 1;
  flex-direction: column;
  
  padding: 24px 40px 40px;
  overflow: auto;

  background-color: ${props => props.theme.general.background.color};
  color: ${props => props.theme.colors.text.dark};

  z-index: ${props => props.theme.index.page};
`;