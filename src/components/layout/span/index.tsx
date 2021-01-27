import React from 'react';

import {Container} from  './styles'

interface SpanProps {
  dir?: 'vertical' | 'horizontal';
}

export const Span: React.FC<SpanProps> = ({children, dir = 'vertical'}) => {
  return(
     <Container dir={dir}>{children}</Container>
  );
}