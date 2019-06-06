import axios from 'axios'

const URL = "http://localhost:4567"


const api = axios.create({
    baseURL: `${URL}`
})

export const getAllComments = async() => {
    try{
        const response = await api.get('/comments')
        return response.data
    } catch(e) {
        console.log(e.message)
    }
}

export const createComments = async(data) => {
    try {
        const response = await api.post('/comments', data)
        return response.data
    } catch(e) {
        console.log(e.message)
    }
}

export const updateComments = async(id,data) => {
    try {
        const response = await api.put(`/comments/${id}`, data)
        console.log(response.data)
        return response.data
    } catch(e) {
        console.log(e.message)
    }
}

export const deleteComments = async(id) => {
    try {
        const response = await api.delete(`/comments/${id}`)
        return response.data
    } catch(e) {
        console.log(e.message)
    }
}

export const getComments = async(id) => {
    try {
        const response = await api.get(`/comments/${id}`)
        return response.data

    } catch(e) {
console.log(e.message)
    }
}