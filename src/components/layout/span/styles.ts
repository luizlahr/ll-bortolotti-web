import styled, { css } from "styled-components";

interface ContainerProps {
  dir: 'vertical' | 'horizontal'
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  
  ${props => props.dir === 'horizontal' && css`
    flex-direction: row;
  `}

`;
