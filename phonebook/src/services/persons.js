import axios from "axios"

const baseUrl = "http://localhost:3001/persons"

const getAll = () => {
    return axios.get(baseUrl).then(response => response.data)
}

const create = (personObject) => {
    return axios.post(baseUrl, personObject).then(response => response.data)
}

const del = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
}

const update = (id, newObject) => {
    return axios.put(`${baseUrl}/${id}`, newObject).then(response => response.data)
}
export default {getAll, create, del, update}