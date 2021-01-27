import React from 'react';

import { Layout } from './styles'
import { Sidebar } from './_partials/sidebar';
import { Header } from './_partials/header';
import { Content } from './_partials/content';
import { SearchFunction } from './_partials/searchBar';

interface PageProps {
  title?: string;
  newUrl?: string;
  onSearch?: SearchFunction;
}

export const Page: React.FC<PageProps> = ({children, title, newUrl, onSearch}) => {
  return(
    <Layout className="ll-layout"  aria-label="estrutura de layout">
      <Header title={title} newUrl={newUrl} onSearch={onSearch} />
      <Content>{children}</Content>
      <Sidebar>Sidebar</Sidebar>
    </Layout>
  );
}