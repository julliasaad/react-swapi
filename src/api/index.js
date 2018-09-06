import axios from 'axios';
import { getPeople, getPeopleById } from './people';
import { getFilms, getFilmsById } from './films';
import { getSpecies, getSpeciesById } from './species';
import { getPlanets, getPlanetsById } from './planets';

export const API = axios.create({
  baseURL: 'https://swapi.co/api/',
  timeout: 3000
});

export default { 
  getPeople, 
  getPeopleById,
  getFilms, 
  getFilmsById ,
  getSpecies, 
  getSpeciesById ,
  getPlanets, 
  getPlanetsById  
};