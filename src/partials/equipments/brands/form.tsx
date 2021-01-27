import { yupResolver } from '@hookform/resolvers/yup';
import { FormActions } from 'components/form/formActions';
import { FormControl } from 'components/form/formControl';
import { Input } from 'components/form/input';
import { Button } from 'components/general/button';
import { Col, Row } from 'components/layout/grid';
import { BrandEntity } from 'entities/brandEntity';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { AnyObjectSchema } from "yup";


interface FormProps {
  onSubmit: (data: Partial<BrandEntity>) => void;
  defaultValues?: Partial<BrandEntity>,
  validator: AnyObjectSchema,
  loadedData?: Partial<BrandEntity>;
}

export const BrandForm: React.FC<FormProps> = ({defaultValues, onSubmit,  validator, loadedData}) => {
  const {control, handleSubmit, errors, reset, watch} = useForm<BrandEntity>({
    resolver: yupResolver(validator),
    defaultValues
  });

  useEffect(() => {
    if (loadedData) reset(loadedData);
  }, [reset,loadedData]);

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <Row>
          <Col xs={24}>
            <FormControl label="Nome" error={errors?.name?.message}>
              <Input name="name" control={control} />
            </FormControl>
          </Col>
        </Row>
      </fieldset>
      <Row>
        <Col xs={24}>
          <FormActions>
            <Button color="primary">Salvar</Button>
            <Button href="/equipments/brands">Cancelar</Button>
          </FormActions>
        </Col>
      </Row>
    </form>
  );
}