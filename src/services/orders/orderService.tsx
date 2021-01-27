import { useFetch } from "hooks/fetch";
import { api } from "services/api";
import { toast } from "react-toastify";
import { handler } from "utils/handler";
import { OrderEntity } from "entities/orderEntity";
import Router from 'next/router'

export const searchFields = ['id', 'contact.name', 'status.status', 'expiresAt', 'value'];

export const getAllOrders = () => {
  return useFetch('/orders');
}

export const readOrder = async (id: number): Promise<OrderEntity> => {
  try {
    const { data } = await api.get(`/orders/${id}`);
    return data;
  } catch (err) {
    handler(err);
  }
}

export const createOrder = async (data: OrderEntity) => {
  try{
    await api.post('/orders', data);
    toast.success('Registro adicionado')
    Router.push('/Orders');
  } catch(err) {
    handler(err);
  }
}

export const updateOrder = async (id:number, data: OrderEntity) => {
  try{
    await api.put(`/orders/${id}`, data);
    toast.success('Registro alterado')
    Router.push('/Orders');
  } catch(err) {
    handler(err);
  }
}

export const deleteOrder = async (id: number, cb?: (key: string) => void): Promise<void> => {
  try {
    await api.delete(`/orders/${id}`)
    toast.success('Registro removido');
    cb && cb('/Orders');
  } catch (err) {
    handler(err);
  }
}