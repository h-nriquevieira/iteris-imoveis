import axios from "axios";

const url = 'http://localhost:8080/imoveis'

export function getImoveis() {
  return axios.get(url)
    .then(response => response.data)
}

export function getImovelById(id) {
  return axios.get(url + `/${id}`)
    .then(response => response.data)
}