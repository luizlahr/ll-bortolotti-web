import { Page } from 'components/layout/page';
import { BrandEntity } from 'entities/brandEntity';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { Skeleton } from 'partials/equipments/brands/skeleton';
import React from 'react';
import { readBrand, updateBrand } from 'services/equipments//brandService';
import Yup from 'utils/yup';


const Brands: React.FC<InferGetServerSidePropsType<typeof getServerSideProps>> = ({formData}) => {
  const router = useRouter ()
  const { id } = router.query

  const Form = dynamic(
    ()=> import('partials/equipments/brands/form').then((mod)=>mod.BrandForm),
    {loading: () => <Skeleton />}
  )

  const schema = Yup.object().shape({
    name: Yup.string().required(),
  });

  const onSubmit = async (data: BrandEntity) => {
    await updateBrand(Number(id), data);
  }

  return(
    <Page title={`Editando Marca #${id}`} >
      <Form onSubmit={onSubmit} validator={schema} loadedData={formData} />
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps = async(context) => {
  const { id } = context.query;
  const formData = await readBrand(Number(id));
  return {
    props: {formData},
  }
}

export default Brands;