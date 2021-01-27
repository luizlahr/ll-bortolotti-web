import React from 'react';

import { Container } from './styles'

interface StatusProps {
  children: React.ReactNode,
  status: number
}

export function Tag({children, status}: StatusProps) {
  return(
     <Container status={status}>
       {children}
     </Container>
  );
}