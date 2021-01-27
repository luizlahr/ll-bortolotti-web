import React, { ChangeEvent, KeyboardEvent, useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { Container } from './styles';

export type SearchFunction = (term?: string) => void;

interface SearchProps {
  onSearch: SearchFunction;
}

export const SearchBar: React.FC<SearchProps> = ({onSearch}) => {
  const [term, setTerm] = useState<string>();

  const handleKeyUp = ({key}: KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') onSearch(term);
  }

  const handleChange  = useDebouncedCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setTerm(event.target.value);
    },
    500
  );

  useEffect(()=>{
    onSearch(term);
  }, [term])

  return(
    <Container>
      <input 
        arial-label="Campo de busca" 
        title="Buscar"
        name="search"
        placeholder="Buscar..."
        onKeyUp={handleKeyUp}
        onChange={handleChange.callback} 
      />
    </Container>
  );
}