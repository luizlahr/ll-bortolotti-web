import styled, { css } from 'styled-components';

interface ContainerProps {
  open: boolean;
}

export const Container = styled.aside<ContainerProps>`
  position: absolute;
  display: flex;
  
  top: 0;
  left: 0;
  bottom: 0;
  width: 300px;

  transform: translateX(-270px);
  background-color: transparent;

  ${props => props.open && css`
    transform: translateX(0px);
    background-color: ${props => props.theme.colors.secondary};
  `}

  z-index: ${props => props.theme.index.sidebar};
`;
