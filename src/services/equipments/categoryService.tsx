import { useFetch } from "hooks/fetch";
import { api } from "services/api";
import { toast } from "react-toastify";
import { handler } from "utils/handler";
import { CategoryEntity } from "entities/categoryEntity";
import Router from 'next/router'

export const searchFields = ['name'];

export const getAllCategories = () => {
  return useFetch('/equipments/categories');
}

export const readCategory = async (id: number): Promise<CategoryEntity> => {
  try {
    const { data } = await api.get(`/equipments/categories/${id}`);
    return data;
  } catch (err) {
    handler(err);
  }
}

export const createCategory = async (data: CategoryEntity) => {
  try{
    await api.post('/equipments/categories', data);
    toast.success('Registro adicionado')
    Router.push('/equipments/categories');
  } catch(err) {
    handler(err);
  }
}

export const updateCategory = async (id:number, data: CategoryEntity) => {
  try{
    await api.put(`/equipments/categories/${id}`, data);
    toast.success('Registro alterado')
    Router.push('/equipments/categories');
  } catch(err) {
    handler(err);
  }
}

export const deleteCategory = async (id: number, cb?: (key: string) => void): Promise<void> => {
  try {
    await api.delete(`/equipments/categories/${id}`)
    toast.success('Registro removido');
    cb && cb('/equipments/categories');
  } catch (err) {
    handler(err);
  }
}