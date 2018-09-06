import axios from 'axios';
import { get, getById } from './resources';

export const API = axios.create({
  baseURL: 'https://swapi.co/api/',
  timeout: 3000
});

export default { 
  get, 
  getById,
};