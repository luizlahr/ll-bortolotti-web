import { Skeleton } from 'antd';
import { Page } from 'components/layout/page';
import { CategoryEntity } from 'entities/categoryEntity';
import dynamic from 'next/dynamic';
import React from 'react';
import { createCategory } from 'services/equipments//categoryService';
import Yup from 'utils/yup';

const Categories: React.FC = () => { 
  const Form = dynamic(
    ()=> import('partials/equipments/categories/form').then((mod)=>mod.CategoryForm),
    {loading: () => <Skeleton active />}
  )
  
  
  const schema = Yup.object().shape({
    name: Yup.string().required(),
  });

  const onSubmit = async (data: CategoryEntity) => {
    await createCategory(data);
  }

  return(
    <Page title="Nova Categoria" >
      <Form onSubmit={onSubmit} validator={schema} />
    </Page>
  );
}
export default Categories;