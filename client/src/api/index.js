import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000'})

export const signIn = (data) => API.post('/users/signin', data);

export const create = (newLead) => API.post('/leads/new',newLead);

export const updateBStatus = (id, updated) => API.patch(`/leads/b/${id}`, updated)
export const updateCStatus = (id, updated) => API.patch(`/leads/c/${id}`, updated)

export const fetch_all = () => API.get('/leads/data');