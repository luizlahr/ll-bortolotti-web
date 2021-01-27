import { Page } from 'components/layout/page';
import { ModelEntity } from 'entities/modelEntity';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Skeleton } from 'partials/equipments/models/skeleton';
import React from 'react';
import { readModel, updateModel } from 'services/equipments//modelService';
import Yup from 'utils/yup';


const Categories: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({formData}) => {
  const router = useRouter ()
  const { id } = router.query

  const Form = dynamic(
    ()=> import('partials/equipments/models/form').then((mod)=>mod.ModelForm),
    {loading: () => <Skeleton />}
  )

  const schema = Yup.object().shape({
    name: Yup.string().required(),
  });

  const onSubmit = async (data: ModelEntity) => {
    await updateModel(Number(id), data);
  }

  return(
    <Page title={`Editando Modelo #${id}`} >
      <Form onSubmit={onSubmit} validator={schema} loadedData={formData} />
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps = async(context) => {
  const { id } = context.query;
  const formData = await readModel(Number(id));
  return {
    props: {formData},
  }
}

export default Categories;