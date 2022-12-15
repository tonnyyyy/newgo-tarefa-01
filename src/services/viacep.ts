import axios from 'axios';

const api = axios.create({
  baseURL: 'https://viacep.com.br/'
})

const get = (cep: string) => api.get(`ws/${cep}/json/`)

export default {
  get,
}