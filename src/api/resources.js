import { API } from '.';

export const get = (resource) => API.get(`/${resource}`).then(response => response.data);

export const getById = (resource, id) => API.get(`/${resource}/${id}`).then(response => response.data);

export default get;