import { useFetch } from "hooks/fetch";
import { api } from "services/api";
import { toast } from "react-toastify";
import { handler } from "utils/handler";
import { ContactEntity } from "entities/contactEntity";
import Router from 'next/router'

export const searchFields = ['name', 'nickname', 'email', 'phone', 'mobile', 'ssn', 'nid', 'streetName', 'streetNumber', 'neighborhood', 'city', 'state'];

export const getAllContacts = () => {
  return useFetch('/contacts');
}

export const readContact = async (id: number): Promise<ContactEntity> => {
  try {
    const { data } = await api.get(`/contacts/${id}`);
    return data;
  } catch (err) {
    handler(err);
  }
}

export const createContact = async (data: ContactEntity) => {
  try{
    await api.post('/contacts', data);
    toast.success('Registro adicionado')
    Router.push('/contacts');
  } catch(err) {
    handler(err);
  }
}

export const updateContact = async (id:number, data: ContactEntity) => {
  try{
    await api.put(`/contacts/${id}`, data);
    toast.success('Registro alterado')
    Router.push('/contacts');
  } catch(err) {
    handler(err);
  }
}

export const deleteContact = async (id: number, cb?: (key: string) => void): Promise<void> => {
  try {
    await api.delete(`/contacts/${id}`)
    toast.success('Registro removido');
    cb && cb('/contacts');
  } catch (err) {
    handler(err);
  }
}