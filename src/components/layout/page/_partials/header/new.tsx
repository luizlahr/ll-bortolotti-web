import React from 'react';
import Link from 'next/link'
import { Plus } from 'react-feather';

import { NewLinkContainer } from './styles'

interface NewLinkProps {
  href: string;
  as?: string;
}

export const NewLink: React.FC<NewLinkProps> = ({href, as}) => {
  return(
    <Link href={href} as={as}>
      <NewLinkContainer aria-label="Botão para adicionar novo registro">
        <Plus />
      </NewLinkContainer>
    </Link>
  );
}