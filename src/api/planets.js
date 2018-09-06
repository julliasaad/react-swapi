import { API } from './index';

export const getPlanets = () => API.get('/planets').then(response => response.data);

export const getPlanetsById = (id) => API.get(`/planets/${id}`).then(response => response.data);

export default getPlanets;