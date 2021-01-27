import { useFetch } from "hooks/fetch";
import { api } from "services/api";
import { toast } from "react-toastify";
import { handler } from "utils/handler";
import { ModelEntity } from "entities/modelEntity";
import Router from 'next/router'

export const searchFields = ['name', 'category.name', 'brand.name'];

export const getAllModels = () => {
  return useFetch('/equipments/models');
}

export const readModel = async (id: number): Promise<ModelEntity> => {
  try {
    const { data } = await api.get(`/equipments/models/${id}`);
    return data;
  } catch (err) {
    handler(err);
  }
}

export const createModel = async (data: ModelEntity) => {
  try{
    await api.post('/equipments/models', data);
    toast.success('Registro adicionado')
    Router.push('/equipments/models');
  } catch(err) {
    handler(err);
  }
}

export const updateModel = async (id:number, data: ModelEntity) => {
  try{
    await api.put(`/equipments/models/${id}`, data);
    toast.success('Registro alterado')
    Router.push('/equipments/models');
  } catch(err) {
    handler(err);
  }
}

export const deleteModel = async (id: number, cb?: (key: string) => void): Promise<void> => {
  try {
    await api.delete(`/equipments/models/${id}`)
    toast.success('Registro removido');
    cb && cb('/equipments/models');
  } catch (err) {
    handler(err);
  }
}