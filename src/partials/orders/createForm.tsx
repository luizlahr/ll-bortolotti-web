import { yupResolver } from '@hookform/resolvers/yup';
import { Descriptions, Statistic } from 'antd';
import { DummyInput } from 'components/form/dummyInput';
import { FormActions } from 'components/form/formActions';
import { FormControl } from 'components/form/formControl';
import { Select } from 'components/form/select';
import { Button } from 'components/general/button';
import { Col, Row } from 'components/layout/grid';
import { ContactEntity } from 'entities/contactEntity';
import { OrderEntity } from 'entities/orderEntity';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { getAllContacts } from 'services/contacts/contactService';
import { AnyObjectSchema } from "yup";


interface FormProps {
  onSubmit: (data: Partial<OrderEntity>) => void;
  defaultValues?: Partial<OrderEntity>,
  validator: AnyObjectSchema,
  loadedData?: Partial<OrderEntity>;
}

interface ContactsProps {
  value: number;
  label: string;
}

export const CreateOrderForm: React.FC<FormProps> = ({defaultValues, onSubmit,  validator}) => {
  const [ contactData, setContactData ] = useState<ContactEntity>();
  const [ contactList, setContactList ] = useState<ContactsProps[]>([]);
  const { data } = getAllContacts();
  const {control, handleSubmit, errors, watch} = useForm<OrderEntity>({
    resolver: yupResolver(validator),
    defaultValues
  });

  const selectedContact = watch('contactId');

  useEffect(()=>{
    setContactList(data?.map((contact: ContactEntity) => {
      return { label: contact.name,  value: contact.id }
    }))
  },[data])

  useEffect(()=>{
    const contact = data?.filter((contact: ContactEntity) => selectedContact === contact.id);
    setContactData(contact?.[0]);
  },[selectedContact, data])

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
      <Row>
        <Col xs={24}>
          <FormControl label="Cliente" error={errors?.contactId?.message}>
            <Select name="contactId" control={control} options={contactList} />
          </FormControl>
        </Col>
        {selectedContact && (
          <>
            <Col xs={8}>
              <FormControl label="E-mail">
                <DummyInput name="contact_email" value={contactData?.email} disabled />
              </FormControl>
            </Col>

            <Col xs={8}>
              <FormControl label="Celular">
                <DummyInput name="contact_mobile" value={contactData?.mobile} disabled />
              </FormControl>
            </Col>

            <Col xs={8}>
              <FormControl label="phone">
                <DummyInput name="contact_phone" value={contactData?.phone} disabled />
              </FormControl>
            </Col>
          </>
        )}
      </Row>
      </fieldset>

      <FormActions>
        <Button color="primary">Salvar</Button>
        <Button href="/orders">Cancelar</Button>
      </FormActions>
    </form>
  );
}