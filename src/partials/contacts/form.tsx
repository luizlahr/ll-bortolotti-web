import { yupResolver } from '@hookform/resolvers/yup';
import { FormActions } from 'components/form/formActions';
import { FormControl } from 'components/form/formControl';
import { Input } from 'components/form/input';
import { Radio } from 'components/form/radio';
import { Select } from 'components/form/select';
import { SubHeader } from 'components/form/subHeader';
import { Switch } from 'components/form/switch';
import { Button } from 'components/general/button';
import { Col, Row } from 'components/layout/grid';
import { ContactEntity } from 'entities/contactEntity';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import states from 'services/common/states';
import { AnyObjectSchema } from "yup";


interface FormProps {
  onSubmit: (data: Partial<ContactEntity>) => void;
  defaultValues?: Partial<ContactEntity>,
  validator: AnyObjectSchema,
  loadedData?: Partial<ContactEntity>;
}

export const ContactForm: React.FC<FormProps> = ({defaultValues, onSubmit,  validator, loadedData}) => {
  const {control, handleSubmit, errors, reset, watch} = useForm<ContactEntity>({
    resolver: yupResolver(validator),
    defaultValues
  });

  useEffect(() => {
    if (loadedData) reset(loadedData);
  }, [reset,loadedData]);


  const businessOptions = [
    {label: 'Física', value: false},
    {label: 'Jurídica', value: true}
  ];

  const tagOptions = [
    {label: 'Cliente', value: 'cliente'},
    {label: 'Fornecedor', value: 'fornecedor'}
  ];

  const stateOptions = states.map(({name, code}) => {
    return {label: name, value: code}
  });

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
      <Row>
        <Col xs={24}>
          <SubHeader>Dados Pessoais</SubHeader>
        </Col>
        <Col xs={4}>
          <FormControl label="Pessoa" error={errors?.business?.message}>
            <Radio name="business" control={control} options={businessOptions} />
          </FormControl>
        </Col>
        <Col xs={12}>
          <FormControl label="Nome" error={errors?.name?.message}>
            <Input name="name" control={control} />
          </FormControl>
        </Col>
        <Col xs={8}>
          <FormControl label="Apelido" error={errors?.nickname?.message}>
            <Input name="nickname" control={control} />
          </FormControl>
        </Col>
        <Col xs={10}>
          <Row>
            <Col xs={4}>
              <FormControl label="DDD" error={errors?.mobile?.message}>
                <Input name="mobilePrefix" control={control} />
              </FormControl>
            </Col>
            <Col xs={14}>
              <FormControl label="Celular" error={errors?.mobile?.message}>
                <Input name="mobile" control={control} maxLength={11} />
              </FormControl>
            </Col>
            <Col xs={6}>
              <FormControl error={errors.whatsapp?.message} label="WhatsApp?">
                <Switch label="WhatsApp" name="whatsapp" control={control} unCheckedChildren="Não" checkedChildren="Sim" />
              </FormControl>
            </Col>
          </Row>
        </Col>
        <Col xs={6}>
          <FormControl label="Telefone" error={errors?.phone?.message}>
            <Input name="phone" control={control} />
          </FormControl>
        </Col>
        <Col xs={8}>
          <FormControl label="E-mail" error={errors?.email?.message}>
            <Input type="email" name="email" control={control} />
          </FormControl>
        </Col>
        <Col xs={6}>
          <FormControl label="Tags">
            <Select name="tags" control={control} options={tagOptions} mode="tags" />
          </FormControl>
        </Col>
        <Col xs={9}>
          <FormControl label="RG" error={errors?.nid?.message}>
            <Input name="nid" control={control} />
          </FormControl>
        </Col>
        <Col xs={9}>
          <FormControl label="CPF" error={errors?.ssn?.message}>
            <Input name="ssn" control={control} />
          </FormControl>
        </Col>
        
        <Col xs={24}>
          <SubHeader>Endereço</SubHeader>
        </Col>
        <Col xs={4}>
          <FormControl label="CEP" error={errors?.zipcode?.message}>
            <Input name="zipcode" control={control} />
          </FormControl>
        </Col>
        <Col xs={16}>
          <FormControl label="Endereço" error={errors?.streetName?.message}>
            <Input name="streetName" control={control} />
          </FormControl>
        </Col>
        <Col xs={4}>
          <FormControl label="Número" error={errors?.streetNumber?.message}>
            <Input name="streetNumber" control={control} />
          </FormControl>
        </Col>

        <Col xs={6}>
          <FormControl label="Bairro" error={errors?.neighborhood?.message}>
            <Input name="neighborhood" control={control} />
          </FormControl>
        </Col>
        <Col xs={14}>
          <FormControl label="Cidade" error={errors?.city?.message}>
            <Input name="city" control={control} />
          </FormControl>
        </Col>
        <Col xs={4}>
          <FormControl label="Estado" error={errors?.state?.message}>
            <Select name="state" control={control} options={stateOptions} />
          </FormControl>
        </Col>
      </Row>
      </fieldset>

      <FormActions>
        <Button color="primary">Salvar</Button>
        <Button href="/contacts">Cancelar</Button>
      </FormActions>
    </form>
  );
}