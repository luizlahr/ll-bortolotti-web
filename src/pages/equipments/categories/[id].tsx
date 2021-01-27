import { Page } from 'components/layout/page';
import { CategoryEntity } from 'entities/categoryEntity';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Skeleton } from 'partials/equipments/categories/skeleton';
import React from 'react';
import { readCategory, updateCategory } from 'services/equipments//categoryService';
import Yup from 'utils/yup';


const Categories: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({formData}) => {
  const router = useRouter ()
  const { id } = router.query

  const Form = dynamic(
    ()=> import('partials/equipments/categories/form').then((mod)=>mod.CategoryForm),
    {loading: () => <Skeleton />}
  )

  const schema = Yup.object().shape({
    name: Yup.string().required(),
  });

  const onSubmit = async (data: CategoryEntity) => {
    await updateCategory(Number(id), data);
  }

  return(
    <Page title={`Editando Categoria #${id}`} >
      <Form onSubmit={onSubmit} validator={schema} loadedData={formData} />
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps = async(context) => {
  const { id } = context.query;
  const formData = await readCategory(Number(id));
  return {
    props: {formData},
  }
}

export default Categories;