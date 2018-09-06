import { API } from './index';

export const getFilms = () => API.get('/films').then(response => response.data);

export const getFilmsById = (id) => API.get(`/films/${id}`).then(response => response.data);

export default getFilms;