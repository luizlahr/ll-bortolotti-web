import React from 'react';
import { Container } from './styles';

export const Content: React.FC = ({children}) => {
  return(
     <Container className="ll-content" aria-label="conteúdo principal">
       {children}
     </Container>
  );
}