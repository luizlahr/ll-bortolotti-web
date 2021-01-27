import { Skeleton } from 'antd';
import { Page } from 'components/layout/page';
import { ModelEntity } from 'entities/modelEntity';
import dynamic from 'next/dynamic';
import React from 'react';
import { createModel } from 'services/equipments/modelService';
import Yup from 'utils/yup';

const Categories: React.FC = () => { 
  const Form = dynamic(
    ()=> import('partials/equipments/models/form').then((mod)=>mod.ModelForm),
    {loading: () => <Skeleton active />}
  )
  
  const schema = Yup.object().shape({
    name: Yup.string().required(),
    categoryId: Yup.number().required().integer().positive(),
    brandId: Yup.number().required().integer().positive(),
  });

  const onSubmit = async (data: ModelEntity) => {
    await createModel(data);
  }

  return(
    <Page title="Novo Modelo" >
      <Form onSubmit={onSubmit} validator={schema} />
    </Page>
  );
}
export default Categories;