import { yupResolver } from '@hookform/resolvers/yup';
import { FormActions } from 'components/form/formActions';
import { FormControl } from 'components/form/formControl';
import { Input } from 'components/form/input';
import { Select } from 'components/form/select';
import { Button } from 'components/general/button';
import { Col, Row } from 'components/layout/grid';
import { BrandEntity } from 'entities/brandEntity';
import { CategoryEntity } from 'entities/categoryEntity';
import { ModelEntity } from 'entities/modelEntity';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { api } from 'services/api';
import { getAllBrands } from 'services/equipments/brandService';
import { getAllCategories } from 'services/equipments/categoryService';
import { AnyObjectSchema } from "yup";


interface FormProps {
  onSubmit: (data: Partial<ModelEntity>) => void;
  defaultValues?: Partial<ModelEntity>,
  validator: AnyObjectSchema,
  loadedData?: Partial<ModelEntity>;
}

interface SelectOptionsProps {
  label: string;
  value: string|number;
}

export const ModelForm: React.FC<FormProps> = ({defaultValues, onSubmit,  validator, loadedData}) => {
  const [categories, setCategories] = useState<SelectOptionsProps[]>();
  const [brands, setBrands] = useState<SelectOptionsProps[]>();
  const {control, handleSubmit, errors, reset, watch} = useForm<ModelEntity>({
    resolver: yupResolver(validator),
    defaultValues
  });

  useEffect(()=>{
    const fetch = async () => {
      const [{data: categoriesData}, {data: brandsData}] = await Promise.all([api.get('/equipments/categories'), api.get('/equipments/brands')]);
      
      setCategories(categoriesData.map((category: CategoryEntity) => {
        return {label: category.name, value: category.id}
      }));

      setBrands(brandsData.map((category: BrandEntity) => {
        return {label: category.name, value: category.id}
      }));
    }

    fetch();
  }, []);

  useEffect(() => {
    if (loadedData) reset({
      ...loadedData, 
      categoryId: loadedData.category.id, 
      brandId: loadedData.brand.id
    });
  }, [reset,loadedData]);

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <Row>
          <Col xs={8}>
            <FormControl label="Categoria" error={errors?.categoryId?.message}>
              <Select name="categoryId" disabled={!categories} showSearch control={control} options={categories} />
            </FormControl>
          </Col>
          <Col xs={8}>
            <FormControl label="Marca" error={errors?.brandId?.message}>
              <Select name="brandId" disabled={!brands} showSearch control={control} options={brands}/>
            </FormControl>
          </Col>
          <Col xs={8}>
            <FormControl label="Modelo" error={errors?.name?.message}>
              <Input name="name" control={control} />
            </FormControl>
          </Col>
        </Row>
      </fieldset>
      <Row>
        <Col xs={24}>
          <FormActions>
            <Button color="primary">Salvar</Button>
            <Button href="/equipments/categories">Cancelar</Button>
          </FormActions>
        </Col>
      </Row>
    </form>
  );
}