import { Skeleton } from 'antd';
import { Page } from 'components/layout/page';
import { BrandEntity } from 'entities/brandEntity';
import dynamic from 'next/dynamic';
import React from 'react';
import { createBrand } from 'services/equipments//brandService';
import Yup from 'utils/yup';

const Brands: React.FC = () => { 
  const Form = dynamic(
    ()=> import('partials/equipments/brands/form').then((mod)=>mod.BrandForm),
    {loading: () => <Skeleton active />}
  )
  
  
  const schema = Yup.object().shape({
    name: Yup.string().required(),
  });

  const onSubmit = async (data: BrandEntity) => {
    await createBrand(data);
  }

  return(
    <Page title="Nova Marca" >
      <Form onSubmit={onSubmit} validator={schema} />
    </Page>
  );
}
export default Brands;