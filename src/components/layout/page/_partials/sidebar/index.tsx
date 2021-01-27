import React from 'react';

import {Container} from './styles'

interface SidebarProps {
  isOpen?: boolean
}

export const Sidebar: React.FC<SidebarProps> = ({isOpen = false}) => {
  return(
     <Container
      className="ll-sidebar"
      open={isOpen}
      aria-label="Barra lateral de menu"
    >
      Sidebar
    </Container>
  );
}