import { Skeleton } from 'antd';
import { Page } from 'components/layout/page';
import { ContactEntity } from 'entities/contactEntity';
import dynamic from 'next/dynamic';
import React from 'react';
import { createContact } from 'services/contacts/contactService';
import Yup from 'utils/yup';

const Contacts: React.FC = () => { 
  const Form = dynamic(
    ()=> import('partials/contacts/form').then((mod)=>mod.ContactForm),
    {loading: () => <Skeleton active />}
  )
  
  
  const schema = Yup.object().shape({
    name: Yup.string().required(),
  });

  const onSubmit = async (data: ContactEntity) => {
    await createContact(data);
  }

  const defaultValues = {
    business: false,
    tags: ['cliente'],
    whatsapp: false,
    state: 'SP'
  };

  return(
    <Page title="Novo Contato" newUrl="/" >
      <Form onSubmit={onSubmit} validator={schema} defaultValues={defaultValues}  />
    </Page>
  );
}
export default Contacts;