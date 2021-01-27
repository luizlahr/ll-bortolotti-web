import { Page } from 'components/layout/page';
import { ContactEntity } from 'entities/contactEntity';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Skeleton } from 'partials/contacts/skeleton';
import React from 'react';
import { readContact, updateContact } from 'services/contacts/contactService';
import { readOrder } from 'services/orders/orderService';
import Yup from 'utils/yup';


const UpdateOrder: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({formData}) => {
  const router = useRouter ()
  const { id } = router.query

  const Form = dynamic(
    ()=> import('partials/contacts/form').then((mod)=>mod.ContactForm),
    {loading: () => <Skeleton />}
  )

  const schema = Yup.object().shape({
    name: Yup.string().required(),
  });

  const onSubmit = async (data: ContactEntity) => {
    await updateContact(Number(id), data);
  }

  return(
    <Page title={`Editando ${formData?.status?.id === 1 ? 'Rascunho' : 'Ordem'} ${formData?.id}`}>
      <Form onSubmit={onSubmit} validator={schema} loadedData={formData} />
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps = async(context) => {
  const { id } = context.query;
  const formData = await readOrder(Number(id));
  return {
    props: {formData},
  }
}

export default UpdateOrder;