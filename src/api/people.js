import { API } from './index';

export const getPeople = () => API.get('/people').then(response => response.data);

export const getPeopleById = (id) => API.get(`/people/${id}`).then(response => response.data);

export default getPeople;