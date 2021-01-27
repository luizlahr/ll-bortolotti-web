import axios from 'axios';

const customAxio = axios.create({
  baseURL: 'http://localhost:3333/api'
});

export const api = customAxio;
