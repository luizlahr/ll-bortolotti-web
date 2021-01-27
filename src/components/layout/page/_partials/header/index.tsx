import React from 'react';
import { SearchBar, SearchFunction } from '../searchBar';
import { NewLink } from './new';
import { Container } from './styles';

interface HeaderProps {
  title?: string;
  newUrl?: string
  urlMask?: string;
  onSearch?: SearchFunction;
}

export const Header: React.FC<HeaderProps> = ({children, title, newUrl, urlMask, onSearch}) => {
  return(
     <Container className="ll-header" aria-label="cabeçalho da página">
       <h1  aria-label={`titulo da página - ${title}`}>{title}</h1>
       {children}
       {onSearch && <SearchBar onSearch={onSearch} />}
       {newUrl && <NewLink href={newUrl} as={urlMask} /> }
     </Container>
  );
}