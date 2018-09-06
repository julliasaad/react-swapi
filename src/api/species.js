import { API } from './index';

export const getSpecies = () => API.get('/species').then(response => response.data);

export const getSpeciesById = (id) => API.get(`/species/${id}`).then(response => response.data);

export default getSpecies;