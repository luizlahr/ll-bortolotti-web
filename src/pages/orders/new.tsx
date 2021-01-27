import { Skeleton } from 'antd';
import { Page } from 'components/layout/page';
import { OrderEntity } from 'entities/orderEntity';
import dynamic from 'next/dynamic';
import React from 'react';
import { createOrder } from 'services/orders/orderService';
import Yup from 'utils/yup';

const CreateOrder: React.FC = () => { 
  const Form = dynamic(
    ()=> import('partials/orders/createForm').then((mod)=>mod.CreateOrderForm),
    {loading: () => <Skeleton active />}
  )
  
  const schema = Yup.object().shape({
    name: Yup.string().required(),
  });

  const onSubmit = async (data: OrderEntity) => {
    await createOrder(data);
  }

  return(
    <Page title="Nova Ordem" newUrl="/" >
      <Form onSubmit={onSubmit} validator={schema} />
    </Page>
  );
}
export default CreateOrder;