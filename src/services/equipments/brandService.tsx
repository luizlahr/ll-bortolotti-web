import { useFetch } from "hooks/fetch";
import { api } from "services/api";
import { toast } from "react-toastify";
import { handler } from "utils/handler";
import { BrandEntity } from "entities/brandEntity";
import Router from 'next/router'

export const searchFields = ['name'];

export const getAllBrands = () => {
  return useFetch('/equipments/brands');
}

export const readBrand = async (id: number): Promise<BrandEntity> => {
  try {
    const { data } = await api.get(`/equipments/brands/${id}`);
    return data;
  } catch (err) {
    handler(err);
  }
}

export const createBrand = async (data: BrandEntity) => {
  try{
    await api.post('/equipments/brands', data);
    toast.success('Registro adicionado')
    Router.push('/equipments/brands');
  } catch(err) {
    handler(err);
  }
}

export const updateBrand = async (id:number, data: BrandEntity) => {
  try{
    await api.put(`/equipments/brands/${id}`, data);
    toast.success('Registro alterado')
    Router.push('/equipments/brands');
  } catch(err) {
    handler(err);
  }
}

export const deleteBrand = async (id: number, cb?: (key: string) => void): Promise<void> => {
  try {
    await api.delete(`/equipments/brands/${id}`)
    toast.success('Registro removido');
    cb && cb('/equipments/brands');
  } catch (err) {
    handler(err);
  }
}